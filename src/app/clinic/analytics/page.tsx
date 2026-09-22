import type { Metadata } from "next";
import {
  PageHero,
  ModuleGrid,
  FeatureMedia,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  SourceBoard,
  FaqSection,
  FunnelStrip,
  WhyGrid,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { CLINIC_BOOK } from "@/lib/niche-nav";
import { CLINIC_AI } from "@/lib/ai-dfy";
import { CLINIC_MARKETS, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Clinic Enquiry Analytics | NL · Australia · Canada · Nordics",
  description:
    `See which sources drive booked visits for clinics in ${CLINIC_MARKETS.phrase} — not vanity lead counts. Simple clinic analytics with Wekex.`,
  path: "/clinic/analytics",
  keywords: [
    "clinic marketing analytics",
    "dental lead source reporting Netherlands",
    "physio enquiry analytics Australia",
    "clinic ROI dashboard Canada",
  ],
});

export default function ClinicAnalyticsPage() {
  return (
    <>
      <PageHero
        label="Clinic · Analytics"
        title="Know what drives visits"
        titleAccent="Not vanity lead counts."
        body="Simple source tags, funnel stages, and a weekly snapshot so you can decide where to spend — without an enterprise BI project. Numbers below are illustrative sample UI only — not live client data and not case-study claims."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/integrations"
        secondaryLabel="Integrations"
        image="/assets/img/clinic/analytics.webp"
        imageAlt="Clinic pipeline visibility — sample UI / not live client data"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Source tags at capture",
              "Funnel: new → showed",
              "Weekly snapshot",
              "AI analytics optional",
              "Illustrative UI only",
            ]}
          />
        </div>
      </section>

      <SourceBoard
        label="Visibility"
        title="Source performance the way a clinic owner reads it"
        body="After go-live you see your sources and stages. The board below is sample UI structure only — we don’t invent case-study percentages, fake patient counts, or ₹ cost-per-visit claims."
        rows={[
          {
            source: "Google / search landing",
            metric: "Enquiries → booked",
            detail: "Tagged per campaign / page",
          },
          {
            source: "Meta ads",
            metric: "Enquiries → booked",
            detail: "One Pilot channel typical",
          },
          {
            source: "Website / organic",
            metric: "Enquiries → booked",
            detail: "Form + source on card",
          },
          {
            source: "Referral / walk-in",
            metric: "Manual capture",
            detail: "Same board as paid",
          },
          {
            source: "WhatsApp / phone",
            metric: "Logged as enquiry",
            detail: "Not lost on personal phones",
          },
        ]}
        note="Your real numbers appear after install. Illustrative layout only — sample UI / not live client data."
      />

      <ModuleGrid
        label="What you see"
        title="Clarity your desk can use every week"
        body="Analytics here means operational clarity — not a 40-tab dashboard nobody opens. Modules below describe the product surface we install."
        modules={[
          {
            t: "Source tags",
            items: [
              "Web / landing",
              "Paid channel",
              "Referral / walk-in",
              "Manual / phone entry",
            ],
          },
          {
            t: "Funnel stages",
            items: ["New", "Contacted", "Booked", "Showed"],
          },
          {
            t: "Weekly snapshot",
            items: [
              "Enquiries in",
              "Booked",
              "Open follow-ups",
              "Channel notes",
            ],
          },
          {
            t: "Decisions",
            items: [
              "Where to put budget",
              "Where desk drops balls",
              "What to pause",
              "What to double down on",
            ],
          },
        ]}
      />

      <FunnelStrip
        label="Reading the funnel"
        title="From touchpoint to visit — without vanity maths"
        body="We teach your team to read stages honestly. A spike in “new” that never becomes “booked” is a desk or offer problem — not a reason to celebrate lead volume."
        steps={[
          { t: "Touchpoints", d: "Ads, SEO, site, local" },
          { t: "Capture", d: "Landing / form / WA" },
          { t: "Board", d: "Stages & owners" },
          { t: "Visit", d: "Booked → showed" },
          { t: "Snapshot", d: "Weekly clarity" },
        ]}
      />

      <FeatureMedia
        label="Product UI"
        title="A weekly rhythm — not a BI project"
        body="Owners don’t need a data warehouse. They need a Friday view: what came in, what booked, what’s still open, and which source deserves next week’s spend. Sample UI — not live client data."
        image="/assets/img/clinic/analytics.webp"
        imageAlt="Clinic analytics dashboard — sample UI / not live client data"
        bullets={[
          "Same journey language as CRM and booking",
          "Source tags that survive from first click to showed",
          "Open follow-up count so “busy week” doesn’t hide leaks",
          "Retainer optional if you want us to keep writing the channel notes",
        ]}
      />

      <WhyGrid
        label="How we stay honest"
        title="What this analytics page is — and isn’t"
        body="Healthcare marketing sites love fake badges and invented ROI. We don’t."
        items={[
          {
            t: "Illustrative until install",
            d: "Boards and metrics layouts on this site are sample UI. Your figures appear after your system is live.",
          },
          {
            t: "No fake HIPAA / compliance seals",
            d: "Enquiry analytics is operational — not a certified clinical reporting product.",
          },
          {
            t: "No invented patient counts",
            d: "We don’t plaster “10,000 clinics” or fabricated conversion rates to sell the Pilot.",
          },
          {
            t: "No ₹ cost-per-visit theatre",
            d: "We won’t invent cost-per-visit case claims. Spend, market, and desk speed drive outcomes.",
          },
          {
            t: "Decisions over decoration",
            d: "If a chart doesn’t change next week’s budget or desk habit, we don’t build it for vanity.",
          },
          {
            t: "You own the system",
            d: "Reporting lives with the install you own — not locked behind a SaaS analytics upsell.",
          },
        ]}
      />

      <FaqSection
        title="Clinic analytics FAQ"
        items={[
          {
            q: "Are the metrics on this page real client results?",
            a: "No. Source boards and layouts are sample UI / not live client data. They show structure — not promised outcomes.",
          },
          {
            q: "Do you guarantee ROAS or cost per visit?",
            a: "No. We install tagging, stages, and a weekly snapshot. Results depend on spend, creative, market, offer, and follow-up speed.",
          },
          {
            q: "Is this Google Analytics / Looker Studio?",
            a: "We focus on enquiry-board clarity (sources + stages + weekly notes). Exact marketing analytics tools are scoped on the fit call if needed.",
          },
          {
            q: "What’s in Pilot vs Install for reporting?",
            a: "Pilot gets you tagged capture and stage visibility. Full Install deepens handover and the reporting rhythm. Retainer can include weekly channel notes.",
          },
          {
            q: "Can AI help with analytics?",
            a: "Yes — if you want it. DFY means we can add AI summaries or pattern nudges on top of source/funnel clarity. Optional, scoped on the fit call — not a required AI upsell.",
          },
          {
            q: "Will you publish our clinic’s numbers publicly?",
            a: "Not without permission. This marketing site deliberately uses illustrative layouts instead of borrowed client dashboards.",
          },
          {
            q: "HIPAA / patient privacy?",
            a: "We build enquiry and booking ops — not clinical EMRs. We don’t claim HIPAA product certification. You keep clinical systems separate.",
          },
        ]}
      />

      <AiDfySection {...CLINIC_AI.analytics} />

      <CtaBand
        title="Reporting without the agency fog"
        body="Full Install includes handover docs and a reporting rhythm you can keep. Pilot proves capture and stages first."
        note="Illustrative UI on this page · your numbers after go-live."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/pricing"
        secondaryLabel="Packages"
      />
    </>
  );
}
