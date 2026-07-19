"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";

type SpotFeatureCollection = GeoJSON.FeatureCollection<
  GeoJSON.Point,
  {
    id: string;
    name: string;
    trailer: boolean;
    carryIn: boolean;
    launchName: string;
    maxFetchKm: number | null;
    sourceAccessPointId: string | null;
    species: string[];
    speciesLabel: string;
    status: "prime" | "marginal" | "tough" | "unknown";
    statusLabel: string;
    statusDetail: string;
  }
>;

const statusLayers = ["prime", "marginal", "tough", "unknown"] as const;

export function SpotMap({ geojson }: { geojson: SpotFeatureCollection }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: {
        version: 8,
        glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors"
          }
        },
        layers: [{ id: "osm", type: "raster", source: "osm" }]
      },
      center: [-80.55, 43.55],
      zoom: 7.3
    });

    map.addControl(new CurrentLocationControl(), "top-right");
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      const bounds = new maplibregl.LngLatBounds();
      geojson.features.forEach((feature) => {
        bounds.extend(feature.geometry.coordinates as [number, number]);
      });

      addLaunchImages(map);

      map.addSource("spots", {
        type: "geojson",
        data: geojson,
        cluster: true,
        clusterMaxZoom: 9,
        clusterRadius: 52
      });

      map.addLayer({
        id: "spot-clusters",
        type: "circle",
        source: "spots",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": "#00d9e8",
          "circle-radius": ["step", ["get", "point_count"], 23, 6, 29, 12, 35],
          "circle-stroke-color": "#171717",
          "circle-stroke-width": 4
        }
      });

      map.addLayer({
        id: "spot-cluster-count",
        type: "symbol",
        source: "spots",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["Open Sans Bold"],
          "text-size": 18,
          "text-allow-overlap": true
        },
        paint: {
          "text-color": "#171717"
        }
      });

      statusLayers.forEach((status) => {
        map.addLayer({
          id: `spot-${status}`,
          type: "symbol",
          source: "spots",
          filter: ["all", ["!", ["has", "point_count"]], ["==", ["get", "status"], status]],
          layout: {
            "icon-image": `launch-${status}`,
            "icon-size": 1,
            "icon-anchor": "bottom",
            "icon-allow-overlap": true,
            "icon-ignore-placement": true
          }
        });
      });

      if (!bounds.isEmpty()) {
        map.resize();
        map.fitBounds(bounds, { padding: fitPadding(map), maxZoom: 9.2, duration: 0 });
      }

      map.on("click", "spot-clusters", async (event) => {
        const feature = map.queryRenderedFeatures(event.point, { layers: ["spot-clusters"] })[0];
        const clusterId = feature?.properties?.cluster_id;
        if (typeof clusterId !== "number") return;

        const source = map.getSource("spots") as maplibregl.GeoJSONSource;
        const zoom = await source.getClusterExpansionZoom(clusterId);
        map.easeTo({
          center: (feature.geometry as GeoJSON.Point).coordinates as [number, number],
          zoom,
          duration: 450
        });
      });

      statusLayers.forEach((status) => {
        map.on("click", `spot-${status}`, (event) => {
          const feature = event.features?.[0];
          if (!feature || feature.geometry.type !== "Point") return;
          showLaunchPopup(
            map,
            feature as unknown as GeoJSON.Feature<GeoJSON.Point, SpotFeatureCollection["features"][number]["properties"]>
          );
        });

        map.on("mouseenter", `spot-${status}`, () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", `spot-${status}`, () => {
          map.getCanvas().style.cursor = "";
        });
      });

      map.on("mouseenter", "spot-clusters", () => {
        map.getCanvas().style.cursor = "zoom-in";
      });
      map.on("mouseleave", "spot-clusters", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    return () => map.remove();
  }, [geojson]);

  return <div ref={containerRef} className="map-shell" aria-label="Southern Ontario fishing spots map" />;
}

function fitPadding(map: maplibregl.Map) {
  return map.getContainer().clientWidth < 520
    ? { top: 36, right: 28, bottom: 36, left: 28 }
    : 58;
}

function showLaunchPopup(
  map: maplibregl.Map,
  feature: GeoJSON.Feature<GeoJSON.Point, SpotFeatureCollection["features"][number]["properties"]>
) {
  const [lng, lat] = feature.geometry.coordinates;
  const { id, name, trailer, carryIn, launchName, speciesLabel, statusLabel, statusDetail } = feature.properties;
  const popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: true,
    className: "launch-popup",
    offset: 16
  }).setHTML(
    `<article class="launch-card launch-card-link" role="link" tabindex="0" data-href="/${escapeHtml(id)}/fishing">
      <strong>${escapeHtml(name)}</strong>
      <span>${escapeHtml(statusLabel)}</span>
      <p>${escapeHtml(statusDetail)}</p>
      <p>${trailer ? "Trailer ramp plus carry-in access." : carryIn ? "Carry-in launch access." : "Launch access needs review."}</p>
      <em>${escapeHtml(launchName)}</em>
      <div>${escapeHtml(speciesLabel)}</div>
    </article>`
  );

  const openLakePage = (event: Event) => {
    const card = event.currentTarget as HTMLElement;
    const href = card.dataset.href;
    if (href) window.location.href = href;
  };

  popup.on("open", () => {
    const card = popup.getElement().querySelector<HTMLElement>(".launch-card-link");
    if (!card || card.dataset.bound === "true") return;
    card.dataset.bound = "true";
    card.addEventListener("click", openLakePage);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLakePage(event);
      }
    });
  });

  popup.setLngLat([lng, lat]).addTo(map);
}

class CurrentLocationControl implements maplibregl.IControl {
  private map?: maplibregl.Map;
  private container?: HTMLDivElement;
  private marker?: maplibregl.Marker;

  onAdd(map: maplibregl.Map) {
    this.map = map;
    this.container = document.createElement("div");
    this.container.className = "maplibregl-ctrl maplibregl-ctrl-group current-location-control";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "current-location-button";
    button.setAttribute("aria-label", "Find my location");
    button.title = "Find my location";
    button.innerHTML = `<svg class="target-ring" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v5M12 18v5M1 12h5M18 12h5" />
    </svg>`;
    button.addEventListener("click", () => this.locate(button));

    this.container.appendChild(button);
    return this.container;
  }

  onRemove() {
    this.marker?.remove();
    this.container?.parentNode?.removeChild(this.container);
    this.map = undefined;
  }

  private locate(button: HTMLButtonElement) {
    if (!this.map || !navigator.geolocation) {
      button.dataset.state = "error";
      button.title = "Location is not available in this browser";
      return;
    }

    button.dataset.state = "loading";
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!this.map) return;
        const lngLat: [number, number] = [position.coords.longitude, position.coords.latitude];
        this.marker?.remove();
        const element = document.createElement("div");
        element.className = "current-location-dot";
        this.marker = new maplibregl.Marker({ element, anchor: "center" }).setLngLat(lngLat).addTo(this.map);
        this.map.flyTo({ center: lngLat, zoom: Math.max(this.map.getZoom(), 11), speed: 1.2 });
        button.dataset.state = "found";
        button.title = "Current location found";
      },
      () => {
        button.dataset.state = "error";
        button.title = "Location permission denied or unavailable";
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }
}

function addLaunchImages(map: maplibregl.Map) {
  const colors = {
    prime: "#9cff13",
    marginal: "#f87500",
    tough: "#a83f37",
    unknown: "#d8d8d8"
  };

  Object.entries(colors).forEach(([status, color]) => {
    const image = new Image(44, 52);
    image.onload = () => {
      if (!map.hasImage(`launch-${status}`)) {
        map.addImage(`launch-${status}`, image, { pixelRatio: 1 });
      }
    };
    image.src = launchIconDataUrl(color);
  });
}

function launchIconDataUrl(fill: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 52">
    <path d="M22 50C14 39 7 30 7 20 7 9.5 14.2 3 22 3s15 6.5 15 17c0 10-7 19-15 30Z" fill="${fill}" stroke="#171717" stroke-width="3"/>
    <path d="M12 26h20l-4 8H16l-4-8Z" fill="#171717"/>
    <path d="M17 22h13l2 4H14l3-4Z" fill="#171717"/>
    <path d="M13 37h18" fill="none" stroke="#171717" stroke-linecap="square" stroke-width="3"/>
    <path d="M16 41h12" fill="none" stroke="#171717" stroke-linecap="square" stroke-width="3"/>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
