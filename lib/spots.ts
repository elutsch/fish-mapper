import rawSpots from "@/data/spots.json";
import { formatAccessFee, formatLaunchType } from "./launch";
import { formatSpeciesName } from "./species";
import type { Spot } from "./types";

export const spots = rawSpots as Spot[];

export type MapSpotStatus = {
  status: "prime" | "marginal" | "tough" | "unknown";
  label: string;
  detail: string;
};

type SpotGeoJson = GeoJSON.FeatureCollection<
  GeoJSON.Point,
  {
    id: string;
    name: string;
    trailer: boolean;
    carryIn: boolean;
    launchTypeLabel: string;
    accessFeeLabel: string;
    maxFetchKm: number | null;
    sourceAccessPointId: string | null;
    species: string[];
    speciesLabel: string;
    status: MapSpotStatus["status"];
    statusLabel: string;
    statusDetail: string;
  }
>;

export function getSpot(id: string) {
  return spots.find((spot) => spot.id === id);
}

export function spotsAsGeoJson(statuses: Record<string, MapSpotStatus> = {}): SpotGeoJson {
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
        launchTypeLabel: formatLaunchType(spot.launch),
        accessFeeLabel: formatAccessFee(spot.launch),
        maxFetchKm: spot.maxFetchKm ?? null,
        sourceAccessPointId: spot.sourceAccessPointId ?? null,
        species: spot.species,
        speciesLabel: spot.species.map(formatSpeciesName).join(", "),
        status: statuses[spot.id]?.status ?? "unknown",
        statusLabel: statuses[spot.id]?.label ?? "Forecast pending",
        statusDetail: statuses[spot.id]?.detail ?? "Open this lake for the latest conditions."
      }
    }))
  };
}
