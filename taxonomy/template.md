# Page Template — Lake Profile Structure Contract

The Stage 4 narrative page has **six parts, in this order**. Conform to this shape exactly.

## 1. Frontmatter (YAML)
```yaml
slug: [from 1a]
lake: [from 1a]
province: [from 1a]
fmz: [from 1a]
coordinates: [from 1a, or omit]
surface_area: [from 1a morphology, or omit]
max_depth: [from 1a morphology, or omit]
waterbody_type: [reservoir | natural-lake | river]
best_season: [from 1a seasonal notes]
species_count: [count of Destination + Strong cards — must equal the Species section]
regs_effective_date: [from 1a; required]
last_verified: [from most recent fact-check generated_at, or 1a date if no fact-check ran]
fact_check_status: [from fact-check overall_status, or "unchecked" if Stage 2 not run]
```

## 2. Overview
- 90–180 words (aim 120–150).
- What the lake physically *is* (reservoir vs natural vs river, size/depth character, clarity, defining feature).
- ≥3 named specifics (lake, a structure, the watershed/river, the launch, the dam).
- Fishery character in plain terms — which species define it and why.
- Access framing if 1a has it.
- No filler, no brochure phrases, no live conditions.

## 3. Notable Facts
```markdown
## Notable Facts
- [Claim text] — [Source URL]
```
- 3–6 most consequential, defensible, sourced claims. Pulled verbatim-in-meaning from 1a's Notable facts. Prefer highest-authority source. Angler-report facts do not appear here.

## 4. Regulations snapshot
```markdown
## Regulations snapshot
_Regulations effective {regs_effective_date}, FMZ {n}. This is a summary, not the legal regulation — confirm current rules with the official source before fishing._

- **[Species]** — Season: [dates] — Limit: S-[x] / C-[x] — Size: [if any] — [official source URL]
- Waterbody exceptions for {lake}: [any, or "none documented"] — [source URL]
```
- Only from 1a's verified Regulations section. Exact — never soften, round, or paraphrase a limit/size.
- If 1a marked a species `[UNVERIFIED]`, write `Regulations for [species] not verified against an official source — check FMZ {n} regulations directly` with the official link. Never fill the gap.
- The disclaimer is mandatory.

## 5. Species
One card per **Destination** and **Strong** species. Present species → one "Also present" line. Absent species omitted.
```markdown
## [Species Display Name]
**Tier:** Destination | Strong
**Best Season:** [free text from 1a]
**Structure:** [named structure from 1a]

[40–110 word body]
```
- Every card names ≥1 real structure from 1a.
- Destination cards must reflect a quality signal (survey/record/stocking/tournament).
- Ordering: Destination first (taxonomy order), then Strong (taxonomy order), then `Also present: [species], [species].`

## 6. Key Resources
```markdown
## Key Resources
- FMZ {n} fishing regulations — [official URL]
- Boat launch and access, {managing authority} — [URL]
- Lake depth chart / Fish ON-Line record — [URL]
```
- 3–6 bullets. Always include the official regs link. Link specific task pages, not homepages. No Tripadvisor/Yelp/angler forums.

## Footer — Stage 4 metadata
Include the Stage 4 Metadata block specified in the agent instructions.
