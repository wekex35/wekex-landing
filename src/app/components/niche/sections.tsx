import Link from "next/link";

export function PageHero({
  label,
  title,
  titleAccent,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  image,
  imageAlt,
}: {
  label: string;
  title: React.ReactNode;
  titleAccent?: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative bg-hero-wash pb-14 pt-4 md:pb-20 md:pt-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-grain" />
      <div className="site-shell relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="min-w-0 max-w-xl lg:max-w-none">
          <p className="section-label">{label}</p>
          <h1 className="font-display text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-ink text-balance">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-signal">{titleAccent}</span>
              </>
            )}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-[1.05rem] md:leading-relaxed">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={primaryHref} className="btn-signal">
              {primaryLabel}
            </a>
            {secondaryHref && secondaryLabel && (
              secondaryHref.startsWith("/") ? (
                <Link href={secondaryHref} className="btn-ghost">
                  {secondaryLabel}
                </Link>
              ) : (
                <a href={secondaryHref} className="btn-ghost">
                  {secondaryLabel}
                </a>
              )
            )}
          </div>
        </div>
        {image && (
          <div className="min-w-0 justify-self-stretch">
            <div className="overflow-hidden rounded-2xl border border-ink-line bg-white shadow-soft md:rounded-3xl">
              <img
                src={image}
                alt={imageAlt || ""}
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function JourneyTimeline({
  label = "Patient journey",
  title,
  steps,
  stats,
}: {
  label?: string;
  title: string;
  steps: { t: string; d: string }[];
  stats?: { v: string; l: string }[];
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-2xl">{title}</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.t}
              className="relative rounded-3xl border border-ink-line bg-paper p-5"
            >
              <p className="font-display text-xs text-signal">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-base font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{s.d}</p>
            </div>
          ))}
        </div>
        {stats && stats.length > 0 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-3xl border border-ink-line bg-paper px-6 py-5 text-center"
              >
                <p className="font-display text-3xl font-bold tracking-tight text-ink">
                  {s.v}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{s.l}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function ModuleGrid({
  label,
  title,
  body,
  modules,
}: {
  label: string;
  title: string;
  body?: string;
  modules: { t: string; items: string[] }[];
}) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-2xl">{title}</h2>
        {body && <p className="mt-4 max-w-xl body-lg">{body}</p>}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m.t} className="rounded-3xl border border-ink-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold">{m.t}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {m.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-signal">·</span>
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

export function ProblemSolution({
  label,
  title,
  problemTitle,
  problemItems,
  solutionTitle,
  solutionItems,
}: {
  label: string;
  title: string;
  problemTitle: string;
  problemItems: string[];
  solutionTitle: string;
  solutionItems: string[];
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-2xl">{title}</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-ink-line bg-paper p-8">
            <h3 className="font-display text-xl font-semibold text-ink-muted">
              {problemTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              {problemItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-signal">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-signal/30 bg-white p-8 shadow-soft">
            <h3 className="font-display text-xl font-semibold">{solutionTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              {solutionItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-signal">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkflowSteps({
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
        <h2 className="display-lg max-w-2xl">{title}</h2>
        {body && <p className="mt-4 max-w-xl body-lg">{body}</p>}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {steps.map((s, i) => (
            <div
              key={s.t}
              className="flex gap-5 rounded-3xl border border-ink-line bg-white p-6 md:p-7"
            >
              <p className="font-display text-2xl font-bold text-signal">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingGrid({
  label,
  title,
  body,
  tiers,
  bookHref,
}: {
  label: string;
  title: string;
  body?: string;
  tiers: {
    name: string;
    price: string;
    period?: string;
    desc: string;
    features: string[];
    cta: string;
    featured?: boolean;
  }[];
  bookHref: string;
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-xl">{title}</h2>
        {body && <p className="mt-4 max-w-xl body-lg">{body}</p>}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-3xl border p-7 md:p-8 ${
                p.featured
                  ? "border-signal bg-paper shadow-soft"
                  : "border-ink-line bg-paper"
              }`}
            >
              {p.featured && (
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-signal">
                  Most chosen
                </p>
              )}
              <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
              <p className="mt-4 font-display text-3xl font-bold tracking-tight">
                {p.price}
                {p.period && (
                  <span className="ml-1 text-base font-normal text-ink-muted">
                    {p.period}
                  </span>
                )}
              </p>
              <p className="mt-3 text-sm text-ink-muted">{p.desc}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-ink-muted">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-signal">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={bookHref} className="btn-signal mt-8 w-full">
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FitSplit({
  label,
  title,
  goodTitle,
  goodBody,
  badTitle,
  badBody,
}: {
  label: string;
  title: string;
  goodTitle: string;
  goodBody: string;
  badTitle: string;
  badBody: string;
}) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-2xl">{title}</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-ink-line bg-white p-8">
            <h3 className="font-display text-xl font-semibold">{goodTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{goodBody}</p>
          </div>
          <div className="rounded-3xl border border-ink-line bg-white p-8">
            <h3 className="font-display text-xl font-semibold">{badTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{badBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  body,
  note,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  body: string;
  note?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-t border-ink-line bg-white py-20 md:py-28">
      <div className="site-shell max-w-2xl text-center">
        <h2 className="display-lg">{title}</h2>
        <p className="mt-4 body-lg">{body}</p>
        {note && <p className="mt-3 text-sm text-ink-muted">{note}</p>}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={primaryHref} className="btn-signal">
            {primaryLabel}
          </a>
          {secondaryHref && secondaryLabel && (
            secondaryHref.startsWith("/") ? (
              <Link href={secondaryHref} className="btn-ghost">
                {secondaryLabel}
              </Link>
            ) : (
              <a href={secondaryHref} className="btn-ghost">
                {secondaryLabel}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export function FeatureMedia({
  label,
  title,
  body,
  image,
  imageAlt,
  reverse,
  bullets,
}: {
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bullets?: string[];
}) {
  return (
    <section className="py-20 md:py-28">
      <div
        className={`site-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "" : ""
        }`}
      >
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="section-label">{label}</p>
          <h2 className="display-lg">{title}</h2>
          <p className="mt-5 body-lg">{body}</p>
          {bullets && (
            <ul className="mt-6 space-y-3 text-sm text-ink-muted">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={`min-w-0 surface-card ${reverse ? "lg:order-1" : ""}`}>
          <img
            src={image}
            alt={imageAlt}
            className="block h-auto w-full object-contain object-top"
          />
        </div>
      </div>
    </section>
  );
}

export function IntegrationGrid({
  label,
  title,
  body,
  groups,
  disclaimer,
}: {
  label: string;
  title: string;
  body?: string;
  groups: { t: string; items: string[]; note?: string }[];
  disclaimer?: string;
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="site-shell">
        <p className="section-label">{label}</p>
        <h2 className="display-lg max-w-2xl">{title}</h2>
        {body && <p className="mt-4 max-w-xl body-lg">{body}</p>}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.t} className="rounded-3xl border border-ink-line bg-paper p-6">
              <h3 className="font-display text-lg font-semibold">{g.t}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-signal">·</span>
                    {item}
                  </li>
                ))}
              </ul>
              {g.note && (
                <p className="mt-4 text-xs text-ink-muted/80">{g.note}</p>
              )}
            </div>
          ))}
        </div>
        {disclaimer && (
          <p className="mt-8 text-sm text-ink-muted">{disclaimer}</p>
        )}
      </div>
    </section>
  );
}
