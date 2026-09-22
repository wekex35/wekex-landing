import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import HomeHeroGraphic from "@/app/components/HomeHeroGraphic";
import { CLINIC_MARKETS, PROPERTY_MARKETS, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title:
    "Wekex — Clinic & UAE Property Enquiry Systems | NL · AU · CA · Nordics · Dubai",
  description:
    "Done-for-you enquiry systems for dental & physio clinics in the Netherlands, Australia, Canada & Nordics — and for Dubai & Abu Dhabi brokerages. Fixed USD pricing. Live in 14–21 days.",
  path: "/",
  keywords: [...CLINIC_MARKETS.keywords, ...PROPERTY_MARKETS.keywords],
  absoluteTitle: true,
});

const selectedWork = [
  {
    src: "/assets/img/clinic/landing.jpg",
    alt: "Multi-specialty clinic landing page",
    t: "Clinic landing",
    d: "Hero, services, doctors, book CTAs.",
    w: 941,
    h: 1672,
  },
  {
    src: "/assets/img/property/landing.jpg",
    alt: "Property brokerage landing page",
    t: "Property landing",
    d: "Listings, search, and enquire flows.",
    w: 736,
    h: 1104,
  },
  {
    src: "/assets/img/clinic/dashboard.jpg",
    alt: "Clinic CRM dashboard",
    t: "Clinic CRM",
    d: "Patient board, doctors, schedule.",
    w: 2048,
    h: 1536,
  },
  {
    src: "/assets/img/property/dashboard.jpg",
    alt: "Property CRM dashboard",
    t: "Property CRM",
    d: "Pipeline, listings, revenue.",
    w: 1000,
    h: 750,
  },
  {
    src: "/assets/img/clinic/booking-mobile.jpg",
    alt: "Clinic booking mobile app screens",
    t: "Booking mobile",
    d: "Slots, doctors, confirm.",
    w: 1200,
    h: 900,
  },
  {
    src: "/assets/img/property/mobile.jpg",
    alt: "Property listing mobile app",
    t: "Listings mobile",
    d: "Browse, detail, book viewing.",
    w: 1179,
    h: 1171,
  },
  {
    src: "/assets/img/clinic/landing-pedia.jpg",
    alt: "Pediatric clinic landing",
    t: "Pediatrics",
    d: "Family-friendly book journey.",
    w: 736,
    h: 1104,
  },
  {
    src: "/assets/img/property/landing-crm.jpg",
    alt: "Real estate CRM marketing layout",
    t: "Broker CRM pitch",
    d: "Leads, pipeline, AI follow-ups.",
    w: 736,
    h: 1104,
  },
  {
    src: "/assets/img/clinic/landing-care.jpg",
    alt: "Healthcare care delivery landing",
    t: "Care + consult",
    d: "Online consult and service cards.",
    w: 736,
    h: 1306,
  },
  {
    src: "/assets/img/clinic/landing-lab.jpg",
    alt: "Diagnostics lab landing page",
    t: "Diagnostics / lab",
    d: "Book a test, packages, home collection.",
    w: 736,
    h: 1104,
  },
  {
    src: "/assets/img/property/landing-commercial.jpg",
    alt: "Commercial property landing",
    t: "Commercial",
    d: "Tall listing + enquire CTA.",
    w: 736,
    h: 1472,
  },
  {
    src: "/assets/img/clinic/dental-mobile.jpg",
    alt: "Dental clinic mobile landing",
    t: "Dental mobile",
    d: "Offer + sticky book bar.",
    w: 736,
    h: 981,
  },
  {
    src: "/assets/img/property/crm-pipeline.jpg",
    alt: "Property sales pipeline board",
    t: "Sales pipeline",
    d: "Stages from lead to close.",
    w: 1200,
    h: 900,
  },
];

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <section className="relative isolate min-h-[100svh] overflow-x-clip overflow-y-visible bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-hero-wash" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" />

        <div className="relative grid min-h-[100svh] pb-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative z-10 flex min-w-0 flex-col justify-center bg-gradient-to-r from-paper from-70% to-transparent px-5 pb-8 pt-28 md:px-8 md:pb-10 md:pt-32 lg:bg-none lg:pl-[max(1.25rem,calc((100vw-1180px)/2+1.25rem))] lg:pr-6 xl:pr-10">
            <p
              className="w-full max-w-full opacity-0 animate-fade-up font-display text-[clamp(2.75rem,12vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.035em] text-ink sm:text-[clamp(3.5rem,9vw,6.5rem)]"
              style={{ animationDelay: "40ms" }}
            >
              Wekex
            </p>
            <div
              className="mt-5 h-1 w-14 origin-left rounded-full bg-signal opacity-0 animate-fade-up md:mt-6 md:w-16"
              style={{ animationDelay: "120ms" }}
            />
            <h1
              className="mt-6 max-w-md font-display text-[clamp(1.5rem,2.6vw,2.15rem)] font-semibold leading-[1.18] tracking-[-0.025em] text-ink opacity-0 animate-fade-up md:mt-8"
              style={{ animationDelay: "180ms" }}
            >
              Two products. One engineering standard.
            </h1>
            <p
              className="mt-4 max-w-md text-base leading-relaxed text-ink-muted opacity-0 animate-fade-up md:text-[1.05rem]"
              style={{ animationDelay: "260ms" }}
            >
              Done-for-you enquiry systems for clinics and UAE brokerages —
              fixed scope, live in weeks.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-3 opacity-0 animate-fade-up"
              style={{ animationDelay: "340ms" }}
            >
              <Link href="/clinic" className="btn-signal">
                Clinic systems
              </Link>
              <Link href="/property" className="btn-ghost">
                Property systems
              </Link>
            </div>
          </div>

          <div className="relative -mt-6 min-h-[46svh] lg:mt-0 lg:min-h-full lg:-ml-16 xl:-ml-24">
            <HomeHeroGraphic />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-ink-line/70 bg-white/75 backdrop-blur-md">
          <div className="site-shell flex flex-col gap-1 py-3.5 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span className="font-semibold text-ink">2 pilots / month</span>
              {" · "}
              Fixed scope · Live in 14–21 days
            </p>
            <p className="text-ink-muted/90">Online since 2016 · NL · AU · CA · Nordics · UAE</p>
          </div>
        </div>
      </section>

      <section id="products" className="bg-white py-20 md:py-28">
        <div className="site-shell">
          <p className="section-label">Products</p>
          <h2 className="display-lg max-w-3xl">
            Pick your niche — each has a full site of its own.
          </h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Link href="/clinic" className="group block">
              <div className="aspect-[16/10] overflow-hidden bg-paper-soft">
                <img
                  src="/assets/img/clinic/landing.jpg"
                  alt="Clinic enquiry system"
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-signal">
                {CLINIC_MARKETS.label}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Clinic
              </h3>
              <p className="mt-2 max-w-md text-ink-muted">
                Patient enquiry systems for dental &amp; physio clinics — CRM,
                booking, workflows, analytics.
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-ink transition group-hover:text-signal">
                Enter Clinic site →
              </span>
            </Link>

            <Link href="/property" className="group block">
              <div className="aspect-[16/10] overflow-hidden bg-paper-soft">
                <img
                  src="/assets/img/property/landing.jpg"
                  alt="Property enquiry system"
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-signal">
                {PROPERTY_MARKETS.label}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Property
              </h3>
              <p className="mt-2 max-w-md text-ink-muted">
                Lead inbox, listing pages, and workflows for Dubai &amp; Abu
                Dhabi — own enquiries beyond portals.
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-ink transition group-hover:text-signal">
                Enter Property site →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-ink-line bg-paper py-20 md:py-28">
        <div className="site-shell">
          <p className="section-label">Selected work</p>
          <h2 className="display-lg max-w-3xl">
            Clinic &amp; property systems — landings, CRM, mobile.
          </h2>
          <p className="mt-4 max-w-2xl body-lg">
            Style references for the enquiry systems we ship. Your Pilot gets
            one clear brand, wired to the board.
          </p>
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {selectedWork.map((item) => (
              <figure
                key={item.src}
                className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-ink-line bg-paper shadow-soft"
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
                <figcaption className="border-t border-ink-line bg-white px-5 py-4">
                  <p className="font-display text-base font-semibold text-ink">
                    {item.t}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{item.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            Sample layouts only — branding on mocks is illustrative, not live
            client sites.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 md:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="display-lg">Tell us what you need.</h2>
            <p className="mt-4 max-w-md body-lg">
              Clinic Pilot, Property Pilot, or custom software — we reply within
              24 hours with a clear yes/no on fit.
            </p>
            <div className="mt-8 space-y-2 text-sm text-ink-muted">
              <p>
                <a href="mailto:client@wekex.com" className="hover:text-signal">
                  client@wekex.com
                </a>
              </p>
              <p>
                <a href="tel:+918484034341" className="hover:text-signal">
                  +91 848 403 4341
                </a>
              </p>
            </div>
          </div>
          <div className="surface-card p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
