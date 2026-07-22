# Agent Instructions

## Waterbody Card Artwork

When adding a new lake or river spot that appears in `data/spots.json`, create matching card artwork before handing off.

- Find at least one online reference image or official/conservation-area page for the specific waterbody.
- Generate an original stylized cartoon landscape from the reference cues; do not embed the raw online photo.
- Match the existing card-art direction: bold editorial cartoon, thick ink outlines, clean simplified shapes, saturated natural water/shore colors, crisp daylight, no text, no logos, no watermark.
- Save the optimized card asset as `public/waterbodies/{spot.id}.webp`.
- Use an 800x450 output target or equivalent 16:9 crop suitable for `.lake-image`.
- Confirm the new asset is served through the existing `LakeImage` path, which expects `/waterbodies/{spot.id}.webp`.
- Mention the reference source URL and saved asset path in the handoff/final response.

If image generation is unavailable, do not leave the new waterbody on the shared placeholder silently. Add a clear note to the handoff and record the missing asset in `.context/todos.md`.

## Top-Down Lake Hero Artwork

When creating a top-down hero image for a lake page, use the actual lake outline as the shape source. The output should be an original stylized cartoon map image, not a generic lake silhouette.

### Conestogo Test Workflow

This is the workflow used for the Conestogo Lake proof of concept.

1. Create working folders:

```bash
mkdir -p .context/lake-shapes public/waterbody-heroes
```

2. Fetch the OpenStreetMap/Nominatim polygon for the specific lake:

```bash
curl -s 'https://nominatim.openstreetmap.org/search?format=jsonv2&polygon_geojson=1&q=Conestogo%20Lake%2C%20Ontario%2C%20Canada' \
  -H 'User-Agent: fish-mapper-conductor/0.1' \
  > .context/lake-shapes/conestogo-nominatim.json
```

3. Confirm the response contains the intended waterbody and a polygon result:

```bash
node -e "const fs=require('fs'); const data=JSON.parse(fs.readFileSync('.context/lake-shapes/conestogo-nominatim.json','utf8')); console.log(data.length); for (const r of data.slice(0,5)) console.log(r.display_name, r.osm_type, r.osm_id, r.class, r.type, r.geojson&&r.geojson.type);"
```

For Conestogo, the selected result was `Conestogo Lake, Mapleton, Wellington County, Southwestern Ontario, Ontario, Canada` with `geojson.type === "Polygon"`.

4. Render a clean 16:9 outline reference from the polygon. Keep the full lake visible with generous padding, a warm paper background, bright blue water, and a thick black shoreline. Avoid grid backgrounds; they can rasterize poorly and distract image generation.

```bash
node - <<'NODE'
const fs = require('fs');
const results = JSON.parse(fs.readFileSync('.context/lake-shapes/conestogo-nominatim.json', 'utf8'));
const poly = results.find((r) => r.geojson?.type === 'Polygon').geojson;
const coords = poly.coordinates[0];
const xs = coords.map((p) => p[0]);
const ys = coords.map((p) => p[1]);
const minx = Math.min(...xs), maxx = Math.max(...xs), miny = Math.min(...ys), maxy = Math.max(...ys);
const w = 1600, h = 900, pad = 115;
const scale = Math.min((w - 2 * pad) / (maxx - minx), (h - 2 * pad) / (maxy - miny));
const xOffset = pad + (w - 2 * pad - (maxx - minx) * scale) / 2;
const yOffset = pad + (h - 2 * pad - (maxy - miny) * scale) / 2;
const points = coords.map(([lon, lat]) => {
  const x = (lon - minx) * scale + xOffset;
  const y = h - ((lat - miny) * scale + yOffset);
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(' ');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect x="0" y="0" width="${w}" height="${h}" fill="#efebdc"/>
  <polygon points="${points}" fill="none" stroke="#161616" stroke-width="26" stroke-linejoin="round"/>
  <polygon points="${points}" fill="#27a9cb" stroke="#161616" stroke-width="8" stroke-linejoin="round"/>
</svg>`;
fs.writeFileSync('.context/lake-shapes/conestogo-outline-clean.svg', svg);
NODE
```

5. Convert the SVG reference to PNG with `sips`:

```bash
sips -s format png .context/lake-shapes/conestogo-outline-clean.svg \
  --out .context/lake-shapes/conestogo-outline-clean.png
```

6. Inspect the outline reference before generating. The most important check is shape fidelity: full lake visible, no clipped arms, no wrong waterbody, and no distracting artifacts.

7. Generate the cartoon hero image using the outline PNG as the visible/reference image. Use this prompt structure:

```text
Use case: stylized-concept
Asset type: lake page hero image, 16:9 top-down illustrated map
Input image: the visible [Lake Name] outline is the shape reference; preserve its overall lake silhouette, orientation, long narrow arms, bends, lower basin, and side inlets as closely as possible.
Primary request: Create a stylized cartoon top-down view of [Lake Name] for a fishing conditions page hero.
Scene/backdrop: bird's-eye map view, lake centered on a warm paper-map land background with simplified forest patches, shoreline reeds, small ramp/dock details, subtle contour/wake accents inside the water, and a few tiny fishing-map symbols.
Subject: [Lake Name]'s actual lake/reservoir shape, rendered as bright blue water with thick black ink shoreline, matching the bold editorial cartoon style of the existing waterbody card images.
Style: thick ink outlines, clean simplified shapes, saturated natural water/shore colors, crisp daylight, subtle halftone/paper texture, high-polish editorial cartoon.
Composition: wide 16:9 hero image, full lake visible with generous padding, no crop on any lake arm, no title text, no labels, no logos, no watermark.
Avoid: generic oval lake, photorealism, satellite-map realism, text, labels, compass text, distorted or missing lake arms, excessive decorative clutter.
```

8. Copy the generated PNG from the Codex generated-images directory into the workspace for review:

```bash
latest=$(find /Users/erik/.codex/generated_images -type f -name '*.png' -print0 | xargs -0 stat -f '%m %N' | sort -nr | head -1 | cut -d' ' -f2-)
cp "$latest" .context/lake-shapes/conestogo-topdown-test.png
sips -g pixelWidth -g pixelHeight .context/lake-shapes/conestogo-topdown-test.png
```

For a production asset, optimize and save the approved version as:

```text
public/waterbody-heroes/{spot.id}.webp
```

Use a 16:9 size such as 1600x900 for hero usage. Keep the original generated PNG in `.context/lake-shapes/` during review so shape fidelity can be compared against the outline reference.

### Quality Bar

- The lake shape must be recognizably based on the polygon reference.
- The entire lake must fit in frame without clipped arms or cropped bays.
- The image must match the existing cartoon card-art language: bold black shoreline, saturated blue water, clean simplified land, and subtle print texture.
- Do not include readable labels, title text, compass text, logos, or watermarks.
- If the generated image loses the lake shape, regenerate from the same outline with a stricter prompt emphasizing shape preservation.
- In the handoff, include the polygon/source URL, the outline reference path, and the generated hero image path.
