import Link from "next/link";

export function TrustChips({ items }: { items: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-full border border-ink-line bg-white px-3 py-1.5 text-xs font-medium text-ink-muted"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function JourneyCard({
  steps,
  caption,
}: {
  steps: { t: string; time?: string }[];
  caption?: string;
}) {
  return (
    <div className="surface-card p-5 md:p-6">
      {caption && (
        <p className="mb-4 text-xs uppercase tracking-[0.16em] text-signal">
          {caption}
        </p>
      )}
      <ol className="space-y-0">
        {steps.map((s, i) => (
          <li key={s.t} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="my-1 w-px flex-1 bg-ink-line" />
              )}
            </div>
            <div className={`pb-5 ${i === steps.length - 1 ? "pb-0" : ""}`}>
              <p className="font-display text-sm font-semibold text-ink">{s.t}</p>
              {s.time && (
                <p className="mt-0.5 text-xs text-ink-muted">{s.time}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function FunnelStrip({
  label,
  title,
  body,
  steps,
}: {
  label: string;
  title: string;
  body?: string;
  steps: { t: string; d: string }[];
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {body && <p className="mt-4 max-w-2xl body-lg">{body}</p>}
        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="h-full rounded-3xl border border-ink-line bg-paper p-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-signal">
                  Step {i + 1}
                </p>
                <h3 className="mt-3 font-display text-base font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-signal md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SourceBoard({
  label,
  title,
  body,
  rows,
  note,
}: {
  label: string;
  title: string;
  body?: string;
  rows: { source: string; metric: string; detail: string }[];
  note?: string;
}) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {body && <p className="mt-4 max-w-2xl body-lg">{body}</p>}
        <div className="mt-12 overflow-hidden rounded-3xl border border-ink-line bg-white shadow-soft">
          <div className="flex items-center justify-between border-b border-ink-line px-5 py-4 md:px-6">
            <p className="font-display text-sm font-semibold">Source performance</p>
            <p className="text-xs text-ink-muted">Sample UI layout · not live client data</p>
          </div>
          <div className="divide-y divide-ink-line">
            {rows.map((r) => (
              <div
                key={r.source}
                className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 md:grid-cols-[1.2fr_1fr_1fr] md:px-6"
              >
                <p className="font-medium text-ink">{r.source}</p>
                <p className="text-sm text-ink-muted md:text-right">{r.metric}</p>
                <p className="col-span-2 text-sm text-ink-muted md:col-span-1 md:text-right">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        {note && <p className="mt-4 text-sm text-ink-muted">{note}</p>}
      </div>
    </section>
  );
}

export function CapabilityBlocks({
  label,
  title,
  body,
  blocks,
}: {
  label: string;
  title: string;
  body?: string;
  blocks: { t: string; d: string; items: string[] }[];
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {body && <p className="mt-4 max-w-2xl body-lg">{body}</p>}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {blocks.map((b) => (
            <div
              key={b.t}
              className="rounded-3xl border border-ink-line bg-paper p-7 md:p-8"
            >
              <h3 className="font-display text-xl font-semibold md:text-2xl">
                {b.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{b.d}</p>
              <ul className="mt-6 space-y-2.5 text-sm text-ink">
                {b.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-signal">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudienceGrid({
  label,
  title,
  body,
  audiences,
}: {
  label: string;
  title: string;
  body?: string;
  audiences: { t: string; d: string }[];
}) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {body && <p className="mt-4 max-w-2xl body-lg">{body}</p>}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.t}
              className="rounded-3xl border border-ink-line bg-white p-6"
            >
              <h3 className="font-display text-lg font-semibold">{a.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  label = "FAQ",
  title,
  items,
}: {
  label?: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-shell max-w-3xl">
        <p className="section-label">{label}</p>
        <h2 className="display-lg">{title}</h2>
        <div className="mt-10 divide-y divide-ink-line border-y border-ink-line">
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-display text-lg font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="shrink-0 text-signal transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyGrid({
  label,
  title,
  body,
  items,
}: {
  label: string;
  title: string;
  body?: string;
  items: { t: string; d: string }[];
}) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {body && <p className="mt-4 max-w-2xl body-lg">{body}</p>}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.t}
              className="rounded-3xl border border-ink-line bg-white p-6"
            >
              <h3 className="font-display text-lg font-semibold">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StageJourney({
  label,
  title,
  body,
  stages,
}: {
  label: string;
  title: string;
  body?: string;
  stages: { t: string; d: string; items: string[] }[];
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {body && <p className="mt-4 max-w-2xl body-lg">{body}</p>}
        <div className="mt-14 space-y-5">
          {stages.map((s, i) => (
            <div
              key={s.t}
              className="grid gap-6 rounded-3xl border border-ink-line bg-paper p-6 md:grid-cols-[auto_1fr] md:p-8"
            >
              <p className="font-display text-4xl font-bold text-signal/40">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {s.t}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {s.d}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-ink"
                    >
                      <span className="text-signal">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompareTable({
  label,
  title,
  body,
  headers,
  rows,
}: {
  label: string;
  title: string;
  body?: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {body && <p className="mt-4 max-w-2xl body-lg">{body}</p>}
        <div className="mt-12 overflow-x-auto rounded-3xl border border-ink-line bg-white shadow-soft">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink-line bg-paper">
                {headers.map((h) => (
                  <th
                    key={h}
                    className="px-5 py-4 font-display text-sm font-semibold text-ink md:px-6"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-b border-ink-line last:border-0">
                  {row.map((cell, i) => (
                    <td
                      key={`${row[0]}-${i}`}
                      className={`px-5 py-4 md:px-6 ${
                        i === 0 ? "font-medium text-ink" : "text-ink-muted"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function DeepLinkGrid({
  label,
  title,
  links,
}: {
  label: string;
  title: string;
  links: { href: string; t: string; d: string }[];
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-2xl">{title}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-3xl border border-ink-line bg-paper p-6 transition hover:border-signal/40 hover:shadow-soft"
            >
              <h3 className="font-display text-lg font-semibold">{l.t}</h3>
              <p className="mt-2 text-sm text-ink-muted">{l.d}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-signal">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessList({
  label,
  title,
  body,
  steps,
}: {
  label: string;
  title: string;
  body?: string;
  steps: { t: string; d: string }[];
}) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {body && <p className="mt-4 max-w-2xl body-lg">{body}</p>}
        <ol className="mt-12 space-y-4">
          {steps.map((s, i) => (
            <li
              key={s.t}
              className="flex gap-5 rounded-3xl border border-ink-line bg-white p-6 md:gap-8 md:p-8"
            >
              <p className="font-display text-3xl font-bold text-signal">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ShowcaseGrid({
  label,
  title,
  body,
  note,
  items,
}: {
  label: string;
  title: string;
  body?: string;
  note?: string;
  items: {
    src: string;
    alt: string;
    t: string;
    d: string;
    /** Intrinsic pixel size — used for correct aspect alignment */
    w: number;
    h: number;
    /** Span 2 columns on sm+ for wide landscape shots */
    span?: 1 | 2;
  }[];
}) {
  return (
    <section className="border-y border-ink-line bg-paper py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-3xl">{title}</h2>
        {body && <p className="mt-4 max-w-2xl body-lg">{body}</p>}
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item) => (
            <figure
              key={item.src + item.t}
              className={`mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-ink-line bg-white shadow-soft ${
                item.span === 2 ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className="overflow-hidden bg-paper-soft"
                style={{ aspectRatio: `${item.w} / ${item.h}` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  className="block h-full w-full object-contain object-top"
                />
              </div>
              <figcaption className="border-t border-ink-line px-5 py-4">
                <p className="font-display text-base font-semibold text-ink">
                  {item.t}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{item.d}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {note && <p className="mt-8 text-sm text-ink-muted">{note}</p>}
      </div>
    </section>
  );
}
