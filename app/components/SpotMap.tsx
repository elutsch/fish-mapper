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
  }
>;

export function SpotMap({ geojson }: { geojson: SpotFeatureCollection }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: {
        version: 8,
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

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    map.addControl(new CurrentLocationControl(), "top-right");

    map.on("load", () => {
      const bounds = new maplibregl.LngLatBounds();
      const markers = geojson.features.map((feature) => {
        const [lng, lat] = feature.geometry.coordinates;
        const { id, name, trailer, carryIn, launchName, species } = feature.properties;
        bounds.extend([lng, lat]);

        const markerEl = document.createElement("button");
        markerEl.type = "button";
        markerEl.className = `boat-launch-marker ${trailer ? "trailer" : "carry-in"}`;
        markerEl.setAttribute("aria-label", `${name} fishing conditions`);
        markerEl.innerHTML = boatLaunchSvg;

        const popup = new maplibregl.Popup({
          closeButton: false,
          closeOnClick: false,
          className: "launch-popup",
          offset: 16
        }).setHTML(
          `<article class="launch-card launch-card-link" role="link" tabindex="0" data-href="/${escapeHtml(id)}/fishing">
            <strong>${escapeHtml(name)}</strong>
            <span>${escapeHtml(launchName)}</span>
            <p>${trailer ? "Trailer ramp plus carry-in access." : carryIn ? "Carry-in launch access." : "Launch access needs review."}</p>
            <div>${escapeHtml(species.join(", "))}</div>
          </article>`
        );

        const marker = new maplibregl.Marker({ element: markerEl, anchor: "bottom" })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(map);

        const show = () => popup.setLngLat([lng, lat]).addTo(map);
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
        markerEl.addEventListener("click", show);

        return marker;
      });

      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, { padding: 58, maxZoom: 9.2, duration: 0 });
      }

      map.once("remove", () => markers.forEach((marker) => marker.remove()));
    });

    return () => map.remove();
  }, [geojson]);

  return <div ref={containerRef} className="map-shell" aria-label="Southern Ontario fishing spots map" />;
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
    button.innerHTML = `<span aria-hidden="true"></span>`;
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

const boatLaunchSvg = `
  <svg viewBox="0 0 44 52" aria-hidden="true" focusable="false">
    <path class="pin" d="M22 50C14 39 7 30 7 20 7 9.5 14.2 3 22 3s15 6.5 15 17c0 10-7 19-15 30Z" />
    <path class="boat" d="M12 26h20l-4 8H16l-4-8Z" />
    <path class="bow" d="M17 22h13l2 4H14l3-4Z" />
    <path class="ramp" d="M13 37h18" />
    <path class="ramp" d="M16 41h12" />
  </svg>`;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
