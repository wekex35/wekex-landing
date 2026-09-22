"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const homeLinks = [
  { href: "/#work", label: "Work" },
  { href: "/clinic", label: "Clinic" },
  { href: "/property", label: "Property" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const inClinic = pathname.startsWith("/clinic");
  const inProperty = pathname.startsWith("/property");
  const pilotHref = inProperty ? "/property/pricing" : "/clinic/pricing";

  // Niche mini-sites use their own nav — hide the parent Wekex bar
  if (inClinic || inProperty) return null;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 md:px-6 md:pt-5">
      <div className="pointer-events-auto relative w-full max-w-site">
        <div className="flex items-center gap-2 rounded-full border border-ink/8 bg-white/80 px-2 py-2 shadow-pill backdrop-blur-xl md:px-3">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 rounded-full px-2.5 py-1.5 transition hover:bg-paper md:px-3 md:py-2"
            onClick={() => setOpen(false)}
          >
            <img
              src="/assets/img/brand-mark.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-md object-contain"
            />
            <span className="font-display text-lg font-bold tracking-tight text-ink md:text-xl">
              Wekex
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-0.5 md:flex">
            {homeLinks.map((l) => {
              const active =
                (l.href === "/clinic" && inClinic) ||
                (l.href === "/property" && inProperty);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-3.5 py-2 text-sm transition ${
                    active
                      ? "bg-paper font-medium text-ink"
                      : "text-ink-muted hover:bg-paper hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href={pilotHref}
              className="ml-1 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-ink-soft"
            >
              Start a Pilot
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span className={`h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-px w-full bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white/95 p-4 shadow-pill backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-1">
              {homeLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl px-4 py-3 font-display text-base text-ink hover:bg-paper"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href={pilotHref}
                className="btn-signal mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Start a Pilot
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
