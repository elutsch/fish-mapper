export function normalizeSpeciesName(name: string) {
  const normalized = name.trim().toLowerCase();
  return normalized === "pike" ? "northern pike" : normalized;
}

export function formatSpeciesName(name: string) {
  return normalizeSpeciesName(name).replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

export function speciesPathSegment(name: string) {
  return normalizeSpeciesName(name).replaceAll(" ", "-");
}
