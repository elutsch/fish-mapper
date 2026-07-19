import type { Spot } from "./types";

export function formatLaunchType(launch: Spot["launch"]) {
  const type = launch.trailer
    ? launch.carryIn
      ? "Trailer + carry-in launch"
      : "Trailer launch"
    : launch.carryIn
      ? "Carry-in launch"
      : "Launch access needs review";

  return launch.electricOnly ? `${type} · Electric only` : type;
}

export function formatAccessFee(launch: Spot["launch"]) {
  if (launch.accessFee === "paid") return "Paid access";
  if (launch.accessFee === "free") return "Free access";
  if (launch.accessFee === "varies") return "Access fees vary by craft";
  return "Fee not confirmed";
}
