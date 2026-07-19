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
