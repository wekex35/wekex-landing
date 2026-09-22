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
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { PROPERTY_BOOK, PROPERTY_PRICING } from "@/lib/niche-nav";
import { PROPERTY_AI } from "@/lib/ai-dfy";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "UAE Property Pricing — Pilot from $1,500 | Dubai & Abu Dhabi",
  description:
    "Fixed USD property packages for Dubai and Abu Dhabi brokerages: Pilot $1,500, Full Install $2,500–3,500, Retainer $1,500–2,500/mo. Own your enquiry system.",
  path: "/property/pricing",
  keywords: [
    "Dubai property CRM pricing",
    "UAE brokerage DFY cost",
    "Abu Dhabi real estate lead system price",
  ],
});

export default function PropertyPricingPage() {
  return (
    <>
      <PageHero
        label="Property · Pricing"
        title="Fixed scope. USD pricing."
        titleAccent="Clear timeline."
        body="Portal subscriptions and agency retainers often cost more every month than this entire one-time Pilot. DFY install — you own the build."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property/fit"
        secondaryLabel="Who it's for"
        image="/assets/img/property/dashboard.webp"
        imageAlt="Property enquiry dashboard — sample UI"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Pilot $1,500 one-time",
              "Install $2,500–3,500",
              "Retainer $1,500–2,500/mo",
              "2 slots / month",
            ]}
          />
        </div>
      </section>

      <PricingGrid
        label="Packages"
        title="Property packages"
        body="Pilot proves owned enquiries. Install hardens the system. Retainer keeps the channel live if you want ongoing DFY help."
        tiers={PROPERTY_PRICING}
        bookHref={PROPERTY_BOOK}
      />

      <CompareTable
        label="Context"
        title="How this compares to portal rent & agency retainers"
        body="Illustrative comparison of commercial shape — not a claim that we replace every portal or agency service."
        headers={["", "Typical portal / agency path", "Wekex Property"]}
        rows={[
          [
            "Upfront",
            "Often low — cost shows up monthly",
            "Pilot $1,500 one-time to prove the path",
          ],
          [
            "Ongoing",
            "Portal fees + agency retainers that rarely pause",
            "Optional Retainer $1,500–2,500/mo DFY",
          ],
          [
            "What you get",
            "Inventory visibility / creative retainers",
            "Owned landers + inbox + one channel wiring",
          ],
          [
            "Ownership",
            "Rented attention inside portals / agency assets",
            "You own the pages and enquiry system we build",
          ],
          [
            "Permits",
            "Still on the brokerage",
            "Still on the brokerage — we don’t hold Trakheesi",
          ],
          [
            "Timeline",
            "Ongoing campaigns without a fixed go-live",
            "Live system in 14–21 days after scope lock",
          ],
          [
            "Outcome promises",
            "Sometimes overstated lead or revenue claims",
            "No fake 3x / revenue % claims — system + follow-up",
          ],
        ]}
      />

      <ProcessList
        label="Commercial path"
        title="How engagement usually runs"
        body="Fixed packages so Dubai and Abu Dhabi teams know what they’re buying."
        steps={[
          {
            t: "15-min fit call",
            d: "City, team size, lead sources, and whether agents will reply fast. Clear yes/no within 24 hours with a one-page scope.",
          },
          {
            t: "Pilot — $1,500",
            d: "Lead-flow audit, 1–2 listing/offer pages, WhatsApp/form capture, one channel setup. Prove owned enquiries before larger spend.",
          },
          {
            t: "Full Install — $2,500–3,500",
            d: "Everything in Pilot plus CRM handoff notes, 2 weeks optimize after go-live, and agent response checklist.",
          },
          {
            t: "Optional Retainer — $1,500–2,500/mo",
            d: "Channel management, creative refresh, weekly report, priority support — only if you want ongoing DFY help.",
          },
        ]}
      />

      <FaqSection
        title="Pricing FAQ"
        items={[
          {
            q: "Is Pilot really one-time?",
            a: "Yes. Pilot is $1,500 one-time for the scoped build. Retainer is optional after Install if you want ongoing channel help.",
          },
          {
            q: "What’s included in Full Install?",
            a: "Everything in Pilot, plus CRM handoff notes, two weeks of optimization after go-live, and an agent response checklist.",
          },
          {
            q: "Do prices include ad spend?",
            a: "No. Media spend stays on your Meta/Google accounts. We wire and manage setup within package scope.",
          },
          {
            q: "Do you guarantee ROI or deal volume?",
            a: "No. We don’t publish fake 3x sales or revenue percentage claims. Outcomes depend on stock, market, spend, and follow-up speed.",
          },
          {
            q: "Who pays for permits?",
            a: "Your brokerage. Trakheesi and advertising permits are outside Wekex packages — we build the enquiry system only.",
          },
          {
            q: "How many Pilots do you take?",
            a: "Two founder-led Pilot slots per month. When both are taken, the next start moves 3–4 weeks out.",
          },
        ]}
      />

      <AiDfySection {...PROPERTY_AI.pricing} />

      <CtaBand
        title="2 pilot slots per month"
        body="Founder-led. First come, first served. Reply within 24 hours."
        note="Brokerages own Trakheesi / ad permits. We build the enquiry system."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Email to book"
        secondaryHref="/property"
        secondaryLabel="← Property home"
      />
    </>
  );
}
