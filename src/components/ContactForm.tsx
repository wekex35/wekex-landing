'use client';

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        setStatus("loading");
        setError("");

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              subject: formData.get("subject"),
              message: formData.get("message"),
            }),
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.error || "Failed to send message");
          setStatus("ok");
          form.reset();
        } catch (err) {
          setStatus("err");
          setError(err instanceof Error ? err.message : "Failed to send. Try again.");
        }
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" name="name" required placeholder="Your name" className="input-field" />
        <input type="email" name="email" required placeholder="Email" className="input-field" />
      </div>
      <input type="text" name="subject" required placeholder="Subject" className="input-field" />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Message"
        className="input-field resize-y"
      />

      {status === "loading" && <p className="text-sm text-ink-muted">Sending…</p>}
      {status === "ok" && (
        <p className="text-sm font-medium text-ink">Sent. We&apos;ll get back to you soon.</p>
      )}
      {status === "err" && <p className="text-sm text-signal">{error}</p>}

      <button type="submit" className="btn-signal" disabled={status === "loading"}>
        Send message
      </button>
    </form>
  );
}
