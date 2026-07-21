"use client";

import { useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactCta() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function openDialog() {
    setStatus("idle");
    setError(null);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      comments: String(data.get("comments") ?? "").trim()
    };

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <div className="contact-cta-copy">
        <span className="alert">Get In Touch</span>
        <h2 id="contact-cta-title">Missing Your Lake?</h2>
        <p>Let us know and we&apos;ll add it. Any questions or comments? Just drop a note.</p>
        <button type="button" className="contact-cta-button" onClick={openDialog}>
          Contact Us
        </button>
      </div>

      <dialog ref={dialogRef} className="contact-modal" aria-labelledby="contact-modal-title">
        <div className="contact-modal-head">
          <h3 id="contact-modal-title">Drop Us A Note</h3>
          <button
            type="button"
            className="contact-modal-close"
            onClick={closeDialog}
            aria-label="Close contact form"
          >
            &times;
          </button>
        </div>

        {status === "success" ? (
          <div className="contact-modal-success" role="status">
            <p className="contact-success-title">Thanks!</p>
            <p>We got your note and we&apos;ll be in touch.</p>
            <button type="button" className="contact-cta-button" onClick={closeDialog}>
              Done
            </button>
          </div>
        ) : (
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate={false}>
            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" required autoComplete="name" />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label className="contact-field">
              <span>Comments</span>
              <textarea name="comments" rows={4} required />
            </label>

            {status === "error" && error ? (
              <p className="contact-form-error" role="alert">
                {error}
              </p>
            ) : null}

            <div className="contact-form-actions">
              <button
                type="button"
                className="contact-form-cancel"
                onClick={closeDialog}
                disabled={status === "submitting"}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="contact-cta-button"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send It"}
              </button>
            </div>
          </form>
        )}
      </dialog>
    </section>
  );
}
