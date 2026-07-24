import { fishabilityLabel, type FishabilityStatus } from "@/lib/fishability";

export function FishabilityBadge({
  status,
  className = "",
  timeframe = "today"
}: {
  status: FishabilityStatus;
  className?: string;
  timeframe?: "today" | "day";
}) {
  return (
    <span
      className={`fishability-badge launch-status-${status}${className ? ` ${className}` : ""}`}
    >
      {fishabilityLabel(status, timeframe)}
    </span>
  );
}
