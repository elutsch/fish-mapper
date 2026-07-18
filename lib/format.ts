import type { Rating } from "./types";

export const craftLabels = {
  powerboat: "Powerboat",
  kayak: "Kayak",
  canoe: "Canoe"
} as const;

export function ratingLabel(rating: Rating) {
  return rating === "no-go" ? "No-go" : rating[0].toUpperCase() + rating.slice(1);
}

export function formatHour(iso: string) {
  return new Intl.DateTimeFormat("en-CA", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Toronto"
  }).format(new Date(iso));
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
