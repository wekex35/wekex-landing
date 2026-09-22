"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";

export type BookNiche = "clinic" | "property";

type BookFitContextValue = {
  open: (niche: BookNiche) => void;
  close: () => void;
};

const BookFitContext = createContext<BookFitContextValue | null>(null);

export function useBookFit() {
  const ctx = useContext(BookFitContext);
  if (!ctx) throw new Error("useBookFit must be used within BookFitProvider");
  return ctx;
}

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const TIMEZONES = [
  { value: "Asia/Dubai", label: "Dubai (GST)" },
  { value: "Europe/Amsterdam", label: "Netherlands (CET)" },
  { value: "Australia/Sydney", label: "Australia (AEST)" },
  { value: "America/Toronto", label: "Canada (ET)" },
  { value: "Europe/Stockholm", label: "Nordics (CET)" },
  { value: "Asia/Kolkata", label: "India (IST)" },
  { value: "UTC", label: "UTC" },
];

function minDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

function DialogForm({
  niche,
  onClose,
}: {
  niche: BookNiche;
  onClose: () => void;
}) {
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [error, setError] = useState("");
  const isClinic = niche === "clinic";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[min(92svh,40rem)] w-full max-w-lg flex-col overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white shadow-pill">
        <div className="flex items-start justify-between gap-4 border-b border-ink-line px-5 py-4 md:px-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-signal">
              15-min fit call
            </p>
            <h2
              id={titleId}
              className="mt-1 font-display text-xl font-semibold tracking-tight text-ink"
            >
              {isClinic ? "Clinic Pilot" : "Property Pilot"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-muted transition hover:bg-paper hover:text-ink"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        {status === "ok" ? (
          <div className="space-y-4 px-5 py-8 md:px-6">
            <p className="font-display text-lg font-semibold text-ink">
              Request sent.
            </p>
            <p className="text-sm text-ink-muted">
              We&apos;ll confirm your preferred slot by email shortly.
            </p>
            <button type="button" className="btn-signal" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form
            className="flex min-h-0 flex-1 flex-col"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const fd = new FormData(form);
              setStatus("loading");
              setError("");
              try {
                const res = await fetch("/api/book", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    niche,
                    name: fd.get("name"),
                    email: fd.get("email"),
                    phone: fd.get("phone") || undefined,
                    orgName: fd.get("orgName"),
                    location: fd.get("location"),
                    website: fd.get("website") || undefined,
                    teamSize: fd.get("teamSize") || undefined,
                    date: fd.get("date"),
                    time: fd.get("time"),
                    timezone: fd.get("timezone"),
                    goal: fd.get("goal") || undefined,
                    notes: fd.get("notes") || undefined,
                  }),
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Failed to submit");
                setStatus("ok");
                form.reset();
              } catch (err) {
                setStatus("err");
                setError(
                  err instanceof Error ? err.message : "Failed to submit. Try again."
                );
              }
            }}
          >
            <div className="scrollbar-none min-h-0 flex-1 space-y-3 overflow-y-auto px-5 py-4 md:px-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Your name *">
                  <input
                    name="name"
                    required
                    className="input-field"
                    placeholder="Full name"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email *">
                  <input
                    name="email"
                    type="email"
                    required
                    className="input-field"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Phone / WhatsApp">
                <input
                  name="phone"
                  type="tel"
                  className="input-field"
                  placeholder="+971 …"
                  autoComplete="tel"
                />
              </Field>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label={isClinic ? "Clinic name *" : "Brokerage name *"}>
                  <input
                    name="orgName"
                    required
                    className="input-field"
                    placeholder={isClinic ? "Clinic name" : "Brokerage name"}
                  />
                </Field>
                <Field label={isClinic ? "Country *" : "City *"}>
                  {isClinic ? (
                    <select name="location" required className="input-field" defaultValue="">
                      <option value="" disabled>
                        Select country
                      </option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="Nordics">Nordics</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <select name="location" required className="input-field" defaultValue="">
                      <option value="" disabled>
                        Select city
                      </option>
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Other UAE">Other UAE</option>
                    </select>
                  )}
                </Field>
              </div>

              {isClinic ? (
                <Field label="Website (optional)">
                  <input
                    name="website"
                    type="url"
                    className="input-field"
                    placeholder="https://"
                  />
                </Field>
              ) : (
                <Field label="Team size">
                  <select name="teamSize" className="input-field" defaultValue="">
                    <option value="">Select size</option>
                    <option value="1–3">1–3</option>
                    <option value="4–10">4–10</option>
                    <option value="11–25">11–25</option>
                    <option value="25+">25+</option>
                  </select>
                </Field>
              )}

              <div className="grid gap-3 sm:grid-cols-3">
                <Field label="Preferred date *">
                  <input
                    name="date"
                    type="date"
                    required
                    min={minDate()}
                    className="input-field"
                  />
                </Field>
                <Field label="Time *">
                  <select name="time" required className="input-field" defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Timezone *">
                  <select
                    name="timezone"
                    required
                    className="input-field"
                    defaultValue={isClinic ? "Europe/Amsterdam" : "Asia/Dubai"}
                  >
                    {TIMEZONES.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label={isClinic ? "Goal" : "Current lead sources"}>
                {isClinic ? (
                  <select name="goal" className="input-field" defaultValue="">
                    <option value="">Select goal</option>
                    <option value="More enquiries">More enquiries</option>
                    <option value="More bookings">More bookings</option>
                    <option value="Both">Both</option>
                    <option value="Replace current stack">Replace current stack</option>
                  </select>
                ) : (
                  <input
                    name="goal"
                    className="input-field"
                    placeholder="Portals, WhatsApp, referrals…"
                  />
                )}
              </Field>

              <Field label="Anything else">
                <textarea
                  name="notes"
                  rows={3}
                  className="input-field resize-y"
                  placeholder="Context that helps us prepare"
                />
              </Field>

              {status === "loading" && (
                <p className="text-sm text-ink-muted">Sending…</p>
              )}
              {status === "err" && (
                <p className="text-sm text-signal">{error}</p>
              )}
            </div>

            <div className="border-t border-ink-line px-5 py-4 md:px-6">
              <button
                type="submit"
                className="btn-signal w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Submitting…" : "Submit fit call request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function BookFitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [niche, setNiche] = useState<BookNiche | null>(null);

  const open = useCallback((n: BookNiche) => setNiche(n), []);
  const close = useCallback(() => setNiche(null), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(
        'a[href="#book-clinic"], a[href="#book-property"]'
      );
      if (!el) return;
      e.preventDefault();
      const href = el.getAttribute("href");
      if (href === "#book-clinic") open("clinic");
      if (href === "#book-property") open("property");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  useEffect(() => {
    if (!niche) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [niche, close]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#book-clinic") open("clinic");
    if (hash === "#book-property") open("property");
  }, [open]);

  return (
    <BookFitContext.Provider value={{ open, close }}>
      {children}
      {niche && <DialogForm niche={niche} onClose={close} />}
    </BookFitContext.Provider>
  );
}
