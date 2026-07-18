import { z } from "zod";

export const craftVerdictSchema = z.object({
  rating: z.enum(["go", "marginal", "no-go"]),
  bestWindow: z.string().optional(),
  note: z.string().min(12).max(420)
});

export const verdictSchema = z.object({
  spotId: z.string(),
  activity: z.literal("on-water-fishing"),
  generatedAt: z.string(),
  validFor: z.string(),
  byCraft: z.object({
    powerboat: craftVerdictSchema,
    kayak: craftVerdictSchema,
    canoe: craftVerdictSchema
  }),
  confidence: z.enum(["low", "medium", "high"]),
  summaryMd: z.string().min(50).max(1000),
  caveats: z.array(z.string()).default([])
});
