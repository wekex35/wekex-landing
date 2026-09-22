import Link from "next/link";

/** Dedicated DFY AI band — same shell on every niche page, page-specific copy. */
export function AiDfySection({
  label = "DFY · AI optional",
  title,
  body,
  bullets,
  image,
  imageAlt,
  reverse,
  bookHref,
  bookLabel = "Discuss AI on fit call",
  secondaryHref,
  secondaryLabel,
}: {
  label?: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bookHref: string;
  bookLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="border-y border-ink-line bg-white py-20 md:py-28">
      <div
        className={`site-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}
      >
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="section-label">{label}</p>
          <h2 className="display-lg">{title}</h2>
          <p className="mt-5 body-lg">{body}</p>
          <ul className="mt-6 space-y-3 text-sm text-ink-muted">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={bookHref} className="btn-signal">
              {bookLabel}
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
        <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
          <div className="overflow-hidden rounded-2xl border border-ink-line bg-paper shadow-soft md:rounded-3xl">
            <img
              src={image}
              alt={imageAlt}
              className="block h-auto w-full object-contain object-top"
            />
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            Illustrative concept · not a live clinical AI product claim
          </p>
        </div>
      </div>
    </section>
  );
}

export default AiDfySection;
