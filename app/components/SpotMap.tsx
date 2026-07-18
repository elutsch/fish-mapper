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
    map.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
        showAccuracyCircle: false
      }),
      "top-right"
    );

    map.on("load", () => {
      const bounds = new maplibregl.LngLatBounds();
      const markers = geojson.features.map((feature) => {
        const [lng, lat] = feature.geometry.coordinates;
        const { id, name, trailer, carryIn, launchName, maxFetchKm, sourceAccessPointId } =
          feature.properties;
        bounds.extend([lng, lat]);

        const markerEl = document.createElement("a");
        markerEl.className = `boat-launch-marker ${trailer ? "trailer" : "carry-in"}`;
        markerEl.href = `/${id}/fishing`;
        markerEl.setAttribute("aria-label", `${name} fishing conditions`);
        markerEl.innerHTML = boatLaunchSvg;

        const popup = new maplibregl.Popup({
          closeButton: false,
          closeOnClick: false,
          className: "launch-popup",
          offset: 20
        }).setHTML(
          `<article class="launch-card">
            <strong>${escapeHtml(name)}</strong>
            <span>${escapeHtml(launchName)}</span>
            <p>${trailer ? "Trailer ramp plus carry-in access." : carryIn ? "Carry-in launch access." : "Launch access needs review."}</p>
            <div>${maxFetchKm ? `${maxFetchKm.toFixed(1)} km fetch` : "Fetch under review"}${sourceAccessPointId ? ` / ${escapeHtml(sourceAccessPointId)}` : ""}</div>
          </article>`
        );

        const marker = new maplibregl.Marker({ element: markerEl, anchor: "bottom" })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(map);

        const show = () => {
          if (!popup.isOpen()) {
            marker.togglePopup();
          }
        };
        const hide = () => popup.remove();
        markerEl.addEventListener("mouseenter", show);
        markerEl.addEventListener("focus", show);
        markerEl.addEventListener("mouseleave", hide);
        markerEl.addEventListener("blur", hide);

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
