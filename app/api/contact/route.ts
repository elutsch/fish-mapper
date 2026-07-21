import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(200),
  email: z.string().trim().email("Please enter a valid email address.").max(320),
  comments: z.string().trim().min(1, "Please add a comment.").max(4000)
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const error = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return NextResponse.json({ ok: false, error }, { status: 400 });
  }

  const submission = parsed.data;

  // Forward the submission to a Discord channel via its webhook URL when configured.
  // Discord only renders its own payload shape ({ content } or { embeds }), so we map
  // the form fields into an embed. No-op when CONTACT_WEBHOOK_URL is unset, so the form
  // still works end-to-end without the integration.
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(5000),
        body: JSON.stringify({
          username: "Bite Club",
          embeds: [
            {
              title: "New contact form submission",
              color: 0xf87500,
              fields: [
                { name: "Name", value: submission.name, inline: true },
                { name: "Email", value: submission.email, inline: true }
              ],
              description: submission.comments,
              timestamp: new Date().toISOString()
            }
          ]
        })
      });

      // Discord returns 204 on success; log anything else to surface a bad URL.
      if (!response.ok) {
        const detail = await response.text().catch(() => "");
        console.error(`Discord webhook responded ${response.status}: ${detail}`);
      }
    } catch (error) {
      // Don't fail the user's submission if the webhook is unreachable — log and move on.
      console.error("Contact webhook forwarding failed:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
