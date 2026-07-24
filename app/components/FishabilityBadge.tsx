import { fishabilityLabel, type FishabilityStatus } from "@/lib/fishability";

export function FishabilityBadge({
  status,
  className = ""
}: {
  status: FishabilityStatus;
  className?: string;
}) {
  return (
    <span
      className={`fishability-badge launch-status-${status}${className ? ` ${className}` : ""}`}
    >
      {fishabilityLabel(status)}
    </span>
  );
}
