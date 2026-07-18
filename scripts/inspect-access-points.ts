type Feature = {
  id?: string | number;
  geometry?: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: Record<string, unknown>;
};

export {};

type FeatureCollection = {
  features: Feature[];
  exceededTransferLimit?: boolean;
};

const endpoint =
  "https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open07/MapServer/15/query";

const params = new URLSearchParams({
  where: "1=1",
  geometry: "-81.2,43.3,-80.0,44.2",
  geometryType: "esriGeometryEnvelope",
  inSR: "4326",
  outSR: "4326",
  outFields: "*",
  f: "geojson",
  resultRecordCount: "2000"
});

const response = await fetch(`${endpoint}?${params}`);
if (!response.ok) {
  throw new Error(`Ontario access point request failed: ${response.status}`);
}

const collection = (await response.json()) as FeatureCollection;
const fields = new Set<string>();
const typeCounts = new Map<string, number>();
const launchCandidates: Feature[] = [];

for (const feature of collection.features) {
  Object.keys(feature.properties).forEach((field) => fields.add(field));
  const accessType = String(feature.properties.FISHING_ACCESS_POINT_TYPE ?? "Unknown");
  typeCounts.set(accessType, (typeCounts.get(accessType) ?? 0) + 1);
  if (isLaunchCapable(accessType)) {
    launchCandidates.push(feature);
  }
}

console.log("Fields:");
console.log([...fields].sort().join("\n"));
console.log("\nAccess types:");
console.table([...typeCounts].map(([type, count]) => ({ type, count })));
console.log(`\nLaunch-capable candidates: ${launchCandidates.length}`);
console.log(
  JSON.stringify(
    launchCandidates.slice(0, 20).map((feature) => ({
      id: feature.id,
      type: feature.properties.FISHING_ACCESS_POINT_TYPE,
      name: feature.properties.SITE_NAME,
      lng: feature.geometry?.coordinates[0],
      lat: feature.geometry?.coordinates[1],
      objectId: feature.properties.OBJECTID
    })),
    null,
    2
  )
);

if (collection.exceededTransferLimit) {
  console.error(
    "\nWarning: ArcGIS reported exceededTransferLimit. Page through resultOffset before final ingest."
  );
}

function isLaunchCapable(accessType: string) {
  const normalized = accessType.toLowerCase();
  return normalized.includes("boat launch") || normalized.includes("enhanced shoreline");
}
