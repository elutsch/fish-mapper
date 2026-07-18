import Anthropic from "@anthropic-ai/sdk";
import type { ForecastHour, PressureTrend, Spot, Verdict } from "../types";
import { verdictSchema } from "./schema";

export async function generateAnthropicVerdict(
  spot: Spot,
  hours: ForecastHour[],
  pressureTrend: PressureTrend,
  validFor: string
): Promise<Verdict | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return null;
  }

  const client = new Anthropic({ apiKey });
  const model = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-6";
  const prompt = buildPrompt(spot, hours, pressureTrend, validFor);

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const response = await client.messages.create({
      model,
      max_tokens: 1800,
      temperature: attempt === 0 ? 0.2 : 0,
      system: systemPrompt,
      messages: [{ role: "user", content: prompt }]
    });

    const text = response.content
      .map((part) => (part.type === "text" ? part.text : ""))
      .join("\n")
      .trim();
    const parsed = parseJson(text);
    const verdict = verdictSchema.safeParse(parsed);
    if (verdict.success) {
      return verdict.data;
    }
  }

  return null;
}

const systemPrompt = `You are an on-water fishing conditions analyst for Southern Ontario. Given a waterbody's geometry and an hourly forecast, decide separately for a powerboat, a fishing kayak, and an open canoe whether it is a good day to get on the water and fish. The heart of your job is the contrast between craft: the same wind is often a green light for a powerboat, marginal for a kayak, and unsafe for a canoe.

Reason explicitly about wind, fetch, waves, wind direction versus shoreline geometry, launch constraints, barometric trend, temperature, sun timing, moon phase, and precipitation only when decision-relevant. Output ONLY valid JSON matching the provided Verdict schema.`;

function buildPrompt(
  spot: Spot,
  hours: ForecastHour[],
  pressureTrend: PressureTrend,
  validFor: string
) {
  return JSON.stringify(
    {
      schema: {
        spotId: "string",
        activity: "on-water-fishing",
        generatedAt: "ISO string",
        validFor: "YYYY-MM-DD",
        byCraft: {
          powerboat: { rating: "go|marginal|no-go", bestWindow: "optional string", note: "1-2 sentences" },
          kayak: { rating: "go|marginal|no-go", bestWindow: "optional string", note: "1-2 sentences" },
          canoe: { rating: "go|marginal|no-go", bestWindow: "optional string", note: "1-2 sentences" }
        },
        confidence: "low|medium|high",
        summaryMd: "2-4 sentences explicitly contrasting the three craft",
        caveats: ["string"]
      },
      spot,
      pressureTrend,
      validFor,
      hours
    },
    null,
    2
  );
}

function parseJson(text: string) {
  const stripped = text
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .trim();
  return JSON.parse(stripped);
}
