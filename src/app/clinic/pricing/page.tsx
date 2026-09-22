import type { Metadata } from "next";
import {
  PageHero,
  PricingGrid,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  CompareTable,
  ProcessList,
  FaqSection,
  WhyGrid,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { CLINIC_BOOK, CLINIC_PRICING } from "@/lib/niche-nav";
import { CLINIC_AI } from "@/lib/ai-dfy";
import { CLINIC_MARKETS, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Clinic Pricing — Pilot from $1,200 | NL · AU · CA · Nordics",
  description:
    `Fixed USD clinic packages for ${CLINIC_MARKETS.phrase}: Pilot $1,200, Full Install $2,500–3,500, Retainer $1,500–2,500/mo. Done-for-you — not SaaS. You own the build.`,
  path: "/clinic/pricing",
  keywords: [
    "clinic CRM pricing",
    "dental marketing package Netherlands",
    "physio lead system cost Australia",
    "clinic DFY pricing Canada",
  ],
});

export default function ClinicPricingPage() {
  return (
    <>
      <PageHero
        label="Clinic · Pricing"
        title="Fixed USD. Clear scope."
        titleAccent="You own everything we build."
        body="No SaaS subscription to keep your enquiry system alive. Pilot proves the system; Full Install hardens it; Retainer keeps the channel alive if you want ongoing help. Done-for-you delivery — founder-led, two Pilot slots per month."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/fit"
        secondaryLabel="Who it's for"
        image="/assets/img/clinic/room.webp"
        imageAlt="Wekex clinic system — product context"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Pilot $1,200 one-time",
              "Install $2,500–3,500",
              "Retainer optional",
              "Not a SaaS seat tax",
              "2 Pilot slots / month",
            ]}
          />
        </div>
      </section>

      <PricingGrid
        label="Packages"
        title="Clinic packages — Pilot · Install · Retainer"
        body="Agencies often charge thousands per month in retainers before anything ships. Our Pilot is one-time USD and meant to prove the path before a larger install."
        tiers={CLINIC_PRICING}
        bookHref={CLINIC_BOOK}
      />

      <CompareTable
        label="Compare"
        title="Wekex DFY vs a typical agency retainer"
        body="This is a category comparison — not a dig at every agency. If you want monthly strategy decks without an owned enquiry system, we’re not the fit."
        headers={["", "Typical agency retainer", "Wekex Clinic DFY"]}
        rows={[
          [
            "How you pay",
            "Monthly retainer before proof",
            "Pilot one-time → Install → optional Retainer",
          ],
          [
            "What you own",
            "Often unclear; locked in their stack",
            "You own the landing and system we build",
          ],
          [
            "Time to live system",
            "Months of “strategy”",
            "Typically 14–21 days after scope lock",
          ],
          [
            "Product shape",
            "Ads + creatives, CRM as afterthought",
            "Enquiry CRM + booking + one channel wired",
          ],
          [
            "Reporting",
            "Vanity lead counts / slide decks",
            "Source tags + stages + weekly snapshot",
          ],
          [
            "Delivery",
            "Junior rotation",
            "Founder-led Pilots (2 slots / month)",
          ],
          [
            "SaaS lock-in",
            "Sometimes seats on their platform",
            "Not a SaaS subscription product",
          ],
          [
            "Outcome promises",
            "Often inflated ROAS claims",
            "No fake patient counts or cost/visit theatre",
          ],
        ]}
      />

      <ProcessList
        label="How Pilot works"
        title="From email to a live enquiry path"
        body="Pilot is deliberately small and shippable. It’s how we prove fit before you commit to Full Install."
        steps={[
          {
            t: "15-minute fit call",
            d: "You email with clinic name, country, site, and goal. We reply within 24 hours. If it’s a yes, you get a one-page scope.",
          },
          {
            t: "Lock Pilot scope",
            d: "Enquiry audit, one landing page, booking/enquiry setup, CRM board stages, one acquisition channel. Written clearly — no hidden “phase 2 surprises.”",
          },
          {
            t: "Build in 14–21 days",
            d: "We wire capture → board → booking. You provide assets and access. Desk gets a walkthrough before go-live.",
          },
          {
            t: "Prove the path",
            d: "Real enquiries hit the board. You see stages and source tags. Decide whether Full Install / Retainer makes sense — no forced upsell theatre.",
          },
          {
            t: "Optional Full Install",
            d: "Hardens the system, expands what’s scoped, includes a short optimize window and handover docs.",
          },
          {
            t: "Optional Retainer",
            d: "Channel management, creative refresh, weekly report, priority support — only if you want ongoing help. The system stays yours either way.",
          },
        ]}
      />

      <WhyGrid
        label="What’s included / not"
        title="Clear edges so the fit call stays short"
        items={[
          {
            t: "Included in Pilot",
            d: "Enquiry audit, 1 landing, booking/enquiry setup, CRM stages, 1 channel setup — fixed $1,200 one-time.",
          },
          {
            t: "Included in Full Install",
            d: "Everything in Pilot depth expanded, full build & QA, 2 weeks optimize, handover docs — $2,500–3,500.",
          },
          {
            t: "Retainer (optional)",
            d: "Channel management, creative refresh, weekly report, priority support — $1,500–2,500 / month.",
          },
          {
            t: "Not included by default",
            d: "Media spend, clinical EMR work, unlimited free revisions, “send 500 leads,” or fake HIPAA certification.",
          },
          {
            t: "You pay separately",
            d: "Ad spend, third-party tool fees you choose to keep, and any specialty integrations called out in scope.",
          },
          {
            t: "Ownership",
            d: "Done-for-you means we build it with you — not that we rent you the only copy forever.",
          },
        ]}
      />

      <FaqSection
        title="Clinic pricing FAQ"
        items={[
          {
            q: "Is this a SaaS subscription?",
            a: "No. Packages are Pilot (one-time), Full Install (project), and optional Retainer for ongoing channel help. You own the build.",
          },
          {
            q: "Why is Pilot only $1,200?",
            a: "Because it’s scoped to prove the path — not to deliver a multi-location enterprise rollout. Depth expands in Full Install.",
          },
          {
            q: "What’s the difference between Install and Retainer?",
            a: "Install finishes and hardens the system. Retainer is ongoing channel/creative/reporting help after you have something live.",
          },
          {
            q: "Do prices include ad spend?",
            a: "No. Media spend stays in your ad accounts. Our fees are for the system and (on Retainer) management work.",
          },
          {
            q: "Can we start on Retainer only?",
            a: "Usually no — we want a Pilot or Install so there is a real enquiry system to manage. Fit call confirms.",
          },
          {
            q: "Refunds / guarantees?",
            a: "We don’t guarantee patient volume. Scope is fixed in writing. Outcomes depend on market, spend, and desk follow-up.",
          },
          {
            q: "Currency?",
            a: `Quoted in USD. Useful for owners in ${CLINIC_MARKETS.phrase} who want predictable fixed packages.`,
          },
          {
            q: "How do slots work?",
            a: "Two founder-led Pilot slots per month. When both are taken, the next start moves about 3–4 weeks out.",
          },
        ]}
      />

      <AiDfySection {...CLINIC_AI.pricing} />

      <CtaBand
        title="2 Pilot slots per month"
        body="Founder-led builds. First come, first served. Reply within 24 hours with a one-page scope if it’s a yes."
        note="Pilot $1,200 one-time · Install $2,500–3,500 · Retainer optional."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Email to book"
        secondaryHref="/clinic"
        secondaryLabel="← Clinic home"
      />
    </>
  );
}
