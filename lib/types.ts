export type Craft = "powerboat" | "kayak" | "canoe";

export type Rating = "go" | "marginal" | "no-go";

export type Spot = {
  id: string;
  name: string;
  waterbody: string;
  lat: number;
  lng: number;
  launch: {
    trailer: boolean;
    carryIn: boolean;
    name?: string;
  };
  shorelineFetch: number[];
  maxFetchKm?: number;
  species: string[];
  fmz?: string;
  sourceAccessPointId?: string;
  sourceAccessPointName?: string;
  reviewNotes?: string[];
};

export type ForecastHour = {
  time: string;
  tempC?: number;
  tempMaxC?: number;
  tempMinC?: number;
  uvIndex?: number;
  uvIndexMax?: number;
  windKmh: number;
  gustKmh: number;
  windDirDeg: number;
  pressureHpa: number;
  precipMm: number;
  cloudPct: number;
  sunrise?: string;
  sunset?: string;
};

export type CraftVerdict = {
  rating: Rating;
  bestWindow?: string;
  note: string;
};

export type Verdict = {
  spotId: string;
  activity: "on-water-fishing";
  generatedAt: string;
  validFor: string;
  byCraft: Record<Craft, CraftVerdict>;
  confidence: "low" | "medium" | "high";
  summaryMd: string;
  caveats: string[];
};

export type PressureTrend = {
  label: "rising" | "steady" | "falling";
  rateHpaPer24h: number;
};
