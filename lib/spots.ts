import rawSpots from "@/data/spots.json";
import type { Spot } from "./types";

export const spots = rawSpots as Spot[];

type SpotGeoJson = GeoJSON.FeatureCollection<
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

export function getSpot(id: string) {
  return spots.find((spot) => spot.id === id);
}

export function spotsAsGeoJson(): SpotGeoJson {
  return {
    type: "FeatureCollection",
    features: spots.map((spot) => ({
      type: "Feature" as const,
      geometry: {
        type: "Point" as const,
        coordinates: [spot.lng, spot.lat] as [number, number]
      },
      properties: {
        id: spot.id,
        name: spot.name,
        trailer: spot.launch.trailer,
        carryIn: spot.launch.carryIn,
        launchName: spot.launch.name ?? (spot.launch.trailer ? "Boat launch" : "Carry-in launch"),
        maxFetchKm: spot.maxFetchKm ?? null,
        sourceAccessPointId: spot.sourceAccessPointId ?? null
      }
    }))
  };
}
