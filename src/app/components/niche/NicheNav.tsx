"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NicheLink } from "@/lib/niche-nav";

export default function NicheNav({
  links,
  ctaHref,
  ctaLabel = "Book fit call",
  brandLabel,
}: {
  links: NicheLink[];
  ctaHref: string;
  ctaLabel?: string;
  brandLabel: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hubHref = links[0]?.href ?? "/";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 md:px-6 md:pt-5">
      <div className="pointer-events-auto relative w-full max-w-site">
        <div className="flex items-center gap-2 rounded-full border border-ink/8 bg-white/90 px-2 py-1.5 shadow-pill backdrop-blur-xl md:grid md:grid-cols-[1fr_auto_1fr] md:gap-3 md:px-3 md:py-2">
          <div className="flex min-w-0 items-center gap-0.5 md:justify-self-start">
            <Link
              href="/"
              className="hidden shrink-0 rounded-full px-2 py-2 text-xs text-ink-muted transition hover:bg-paper hover:text-ink sm:inline-flex"
              title="Wekex home"
            >
              ←
            </Link>
            <Link
              href={hubHref}
              className="shrink-0 rounded-full px-3 py-2 font-display text-base font-bold tracking-tight text-ink md:px-3.5 md:text-lg"
              onClick={() => setOpen(false)}
            >
              {brandLabel}
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-0.5 justify-self-center md:flex">
            {links.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== links[0]?.href && pathname.startsWith(l.href + "/"));
              const isOverview = l.href === links[0]?.href;
              const overviewActive = isOverview && pathname === l.href;
              const on = isOverview ? overviewActive : active;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`shrink-0 rounded-full px-3 py-2 text-xs font-medium transition md:px-3.5 md:text-sm ${
                    on
                      ? "bg-ink text-white"
                      : "text-ink-muted hover:bg-paper hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center md:ml-0 md:justify-self-end">
            <a
              href={ctaHref}
              className="hidden shrink-0 rounded-full bg-signal px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-signal-soft md:inline-flex"
            >
              {ctaLabel}
            </a>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex w-4 flex-col gap-1.5">
                <span
                  className={`h-px w-full bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
                />
                <span
                  className={`h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-px w-full bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white/95 p-4 shadow-pill backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="rounded-2xl px-4 py-3 text-sm text-ink-muted hover:bg-paper hover:text-ink"
                onClick={() => setOpen(false)}
              >
                ← Wekex home
              </Link>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl px-4 py-3 font-display text-base text-ink hover:bg-paper"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={ctaHref}
                className="btn-signal mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                {ctaLabel}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
