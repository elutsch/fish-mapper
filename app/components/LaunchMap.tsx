"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";

// A single-pin map for a lake's launch/access area. Scroll-zoom is disabled so
// the page still scrolls over it; zoom via the +/- control or pinch.
export function LaunchMap({ lat, lng, label }: { lat: number; lng: number; label: string }) {
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
      center: [lng, lat],
      zoom: 13,
      scrollZoom: false
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      map.resize();
      const element = document.createElement("div");
      element.className = "launch-map-pin";
      element.innerHTML = `<svg width="32" height="40" viewBox="0 0 44 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M22 50C14 39 7 30 7 20 7 9.5 14.2 3 22 3s15 6.5 15 17c0 10-7 19-15 30Z" fill="#f87500" stroke="#171717" stroke-width="3"/>
        <circle cx="22" cy="20" r="6" fill="#171717"/>
      </svg>`;
      new maplibregl.Marker({ element, anchor: "bottom" }).setLngLat([lng, lat]).addTo(map);
    });

    return () => map.remove();
  }, [lat, lng]);

  return <div ref={containerRef} className="launch-map" role="img" aria-label={label} />;
}
