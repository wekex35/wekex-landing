import type { Metadata } from "next";
import {
  PageHero,
  FitSplit,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  AudienceGrid,
  WhyGrid,
  FaqSection,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { PROPERTY_BOOK } from "@/lib/niche-nav";
import { PROPERTY_AI } from "@/lib/ai-dfy";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Who UAE Property Systems Are For | Dubai & Abu Dhabi",
  description:
    "Wekex Property is for 5–20 agent Dubai and Abu Dhabi brokerages that want an owned enquiry funnel — not another portal-only desk.",
  path: "/property/fit",
  keywords: [
    "Dubai brokerage CRM fit",
    "Abu Dhabi real estate software",
    "UAE property lead system for agents",
  ],
});

export default function PropertyFitPage() {
  return (
    <>
      <PageHero
        label="Property · Fit"
        title="Built for brokerages"
        titleAccent="Not lead mills."
        body="We sell systems with follow-up — not raw lead dumps. Here’s who we partner with in Dubai and Abu Dhabi, and who we politely decline."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property/pricing"
        secondaryLabel="Pricing"
        image="/assets/img/property/ops.webp"
        imageAlt="Aurex mobile discover / browse — sample UAE property visual"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Dubai · Abu Dhabi",
              "5–20 agents",
              "Follow-up required",
              "2 Pilot slots / month",
            ]}
          />
        </div>
      </section>

      <AudienceGrid
        label="Who we say yes to"
        title="Brokerages ready to own the first reply"
        body="We take a small number of Pilots so delivery stays founder-led."
        audiences={[
          {
            t: "Dubai desks",
            d: "Tired of portal-only capture and WhatsApp group chaos on hot communities.",
          },
          {
            t: "Abu Dhabi teams",
            d: "Want owned landers and a clear path from enquiry to viewing.",
          },
          {
            t: "5–20 agent brokerages",
            d: "Big enough to need routing — small enough that a fixed Pilot still fits.",
          },
          {
            t: "Ops-ready principals",
            d: "Can approve budget this month and hold agents to first-response norms.",
          },
        ]}
      />

      <FitSplit
        label="Fit check"
        title="Good fit vs not a fit"
        goodTitle="Good fit"
        goodBody="5–20 agent brokerages in Dubai or Abu Dhabi that lose leads across WhatsApp and portals, can approve a Pilot this month, and have agents who will reply fast. You keep Trakheesi / ad permits; we build the enquiry system."
        badTitle="Not a fit"
        badBody="“Send 500 raw leads” buyers, teams with no follow-up process, anyone expecting us to hold Trakheesi / ad permits, or shops that only want logos and unlimited free revisions. We sell systems, not lead mills."
      />

      <WhyGrid
        label="Partnership rules"
        title="How we keep Pilots shippable"
        items={[
          {
            t: "Founder-led slots",
            d: "Two Property Pilots per month. Quality over volume.",
          },
          {
            t: "Follow-up is non-negotiable",
            d: "If agents won’t reply, an inbox won’t save the brokerage.",
          },
          {
            t: "Honest commercial terms",
            d: "Pilot $1,500 · Install · optional Retainer. No fake ROI banners.",
          },
          {
            t: "Permits stay with you",
            d: "We build enquiry pages and wiring — not a compliance shell company.",
          },
          {
            t: "Sample UI, not fake cases",
            d: "Product visuals are labeled sample. We don’t invent customer counts.",
          },
          {
            t: "Clear no is a gift",
            d: "If you’re not a fit, we say so in 15 minutes — no long pitch deck.",
          },
        ]}
      />

      <FaqSection
        title="Fit FAQ"
        items={[
          {
            q: "What team size works best?",
            a: "Roughly 5–20 agents in Dubai or Abu Dhabi. Smaller solos can work if follow-up is serious; larger desks may need scoped Install extras.",
          },
          {
            q: "Do you sell raw leads?",
            a: "No. We install owned capture and follow-up systems. Lead mills are not a fit.",
          },
          {
            q: "Can you hold our advertising permits?",
            a: "No. Brokerages own Trakheesi / advertising permits. That boundary is firm.",
          },
          {
            q: "We’re mostly portal-dependent — still a fit?",
            a: "Often yes, if you want owned landers and inbox discipline alongside portals — not if you only want more portal logins.",
          },
          {
            q: "What if we’re not ready this month?",
            a: "Say so on the call. Slots are limited; we can point you to the next window instead of forcing a bad start.",
          },
          {
            q: "Looking for clinics instead?",
            a: "We run a separate Clinic product for dental and physio. Property stays UAE brokerage-focused.",
          },
        ]}
      />

      <AiDfySection {...PROPERTY_AI.fit} />

      <CtaBand
        title="Not sure? Ask in 15 minutes"
        body="Clear yes/no on fit and a one-page scope if it’s a yes."
        note="Brokerages own Trakheesi / ad permits. We build the enquiry system."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic"
        secondaryLabel="Looking for Clinic instead?"
      />
    </>
  );
}
