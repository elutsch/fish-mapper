const speciesCards: Record<string, { label: string; image: string }> = {
  "largemouth bass": { label: "Largemouth Bass", image: "/species/largemouth-bass.webp" },
  "smallmouth bass": { label: "Smallmouth Bass", image: "/species/smallmouth-bass.webp" },
  "northern pike": { label: "Northern Pike", image: "/species/northern-pike.webp" },
  pike: { label: "Northern Pike", image: "/species/northern-pike.webp" },
  walleye: { label: "Walleye", image: "/species/walleye.webp" },
  "black crappie": { label: "Black Crappie", image: "/species/black-crappie.webp" },
  "yellow perch": { label: "Yellow Perch", image: "/species/yellow-perch.webp" }
};

export function SpeciesCards({
  species,
  compact = false
}: {
  species: string[];
  compact?: boolean;
}) {
  const uniqueSpecies = dedupeSpecies(species);

  return (
    <div className={compact ? "species-strip species-strip-compact" : "species-strip"}>
      {uniqueSpecies.map((name) => {
        const card = speciesCards[name.toLowerCase()];
        if (!card) {
          return (
            <div key={name} className="species-poster species-poster-fallback">
              <span>{titleCase(name)}</span>
            </div>
          );
        }

        return (
          <img
            key={name}
            className="species-poster"
            src={card.image}
            alt={`${card.label} species card`}
            loading="lazy"
          />
        );
      })}
    </div>
  );
}

function dedupeSpecies(species: string[]) {
  const seen = new Set<string>();
  return species.filter((name) => {
    const normalized = name.toLowerCase() === "pike" ? "northern pike" : name.toLowerCase();
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

function titleCase(value: string) {
  return value
    .split(" ")
    .map((word) => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}
