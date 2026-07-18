import { ratingLabel } from "@/lib/format";
import type { Rating } from "@/lib/types";

export function RatingBadge({ rating }: { rating: Rating }) {
  return <span className={`rating ${rating}`}>{ratingLabel(rating)}</span>;
}
