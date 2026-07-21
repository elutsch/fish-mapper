import type { Rating } from "./types";

export const craftLabels = {
  powerboat: "Powerboat",
  kayak: "Kayak",
  canoe: "Canoe"
} as const;

export function ratingLabel(rating: Rating) {
  return rating === "no-go" ? "No-go" : rating[0].toUpperCase() + rating.slice(1);
}

// 8-point compass label (N, NE, E, …) for a wind bearing in degrees.
export function compass(degrees: number) {
  const points = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return points[Math.round((((degrees % 360) + 360) % 360) / 45) % 8];
}

export function formatHour(iso: string) {
  return new Intl.DateTimeFormat("en-CA", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Toronto"
  }).format(new Date(iso));
}

// Drop the leading "Regulations effective <date>, FMZ <n>." sentence from a
// regs disclaimer, leaving just the summary/caveat copy for the callout.
export function regsSummary(disclaimer: string) {
  return disclaimer.replace(/^Regulations effective[^.]*\.\s*/i, "").trim();
}

export function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Toronto"
  }).format(new Date(`${isoDate}T12:00:00-04:00`));
}
