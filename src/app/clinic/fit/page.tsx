import type { Metadata } from "next";
import {
  PageHero,
  FitSplit,
  FeatureMedia,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  AudienceGrid,
  WhyGrid,
  FaqSection,
  ProcessList,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { CLINIC_BOOK } from "@/lib/niche-nav";
import { CLINIC_AI } from "@/lib/ai-dfy";
import { CLINIC_MARKETS, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Who Clinic Systems Are For | NL · Australia · Canada · Nordics",
  description:
    `Wekex Clinic is for dental and physio clinics in ${CLINIC_MARKETS.phrase} that want more patient enquiries — fixed USD Pilot, founder-led delivery.`,
  path: "/clinic/fit",
  keywords: [
    "clinic CRM for dental practices",
    "physio marketing Netherlands",
    "dental lead system Australia",
    "clinic software Canada",
    "Nordic clinic enquiry system",
  ],
});

export default function ClinicFitPage() {
  return (
    <>
      <PageHero
        label="Clinic · Fit"
        title="Built for clinic owners"
        titleAccent="Not generic IT projects."
        body="We take a small number of Pilots so delivery stays founder-led. Here’s who we say yes to — and who we don’t. 15-minute fit call ends with a clear yes/no and a one-page scope when it’s a yes."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/pricing"
        secondaryLabel="Pricing"
        image="/assets/img/clinic/office.jpg"
        imageAlt="Clinic owner context for Wekex fit"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Dental & physio",
              CLINIC_MARKETS.label,
              "Approve Pilot this month",
              "Someone follows up leads",
              "2 slots / month",
            ]}
          />
        </div>
      </section>

      <AudienceGrid
        label="Best suited for"
        title="Clinics ready to grow systematically"
        body="We say yes to a small number of Pilots so the work stays sharp. If you recognise yourself below, the fit call is usually short."
        audiences={[
          {
            t: "Dental clinics",
            d: "Want more new-patient enquiries and a desk that can follow up without WhatsApp chaos — hygiene, general, or selective specialty focus.",
          },
          {
            t: "Physio & rehab",
            d: "Booking-heavy practices that need showed tracking, clear next actions, and less phone tag for first assessments.",
          },
          {
            t: "Growing single sites",
            d: "One location ready to approve a Pilot this month, provide assets, and own follow-up after go-live.",
          },
          {
            t: CLINIC_MARKETS.label,
            d: "Owners who want English-first delivery, fixed USD pricing, and a founder on the build — not a black-box offshore farm.",
          },
          {
            t: "Owners who hate vanity metrics",
            d: "You’d rather see booked and showed than celebrate lead dumps that never become visits.",
          },
          {
            t: "Teams with a real desk",
            d: "Someone answers the phone / WhatsApp. A perfect landing page won’t save a clinic that never follows up.",
          },
          {
            t: "Ready to decide",
            d: "You can approve Pilot scope without a six-month procurement committee.",
          },
          {
            t: "Want ownership",
            d: "You prefer a done-for-you install you own over another SaaS seat tax.",
          },
        ]}
      />

      <FitSplit
        label="Fit check"
        title="Good fit vs not a fit — said plainly"
        goodTitle="Good fit"
        goodBody={`Dental or physio clinics in ${CLINIC_MARKETS.phrase} that want more patient enquiries, can approve a Pilot this month, have a website or are ready for one landing page, and have someone who will follow up leads. You care about booked → showed — not just “more leads.” You’re fine with fixed USD packages (Pilot $1,200 · Install $2,500–3,500 · optional Retainer) and honest limits: no fake HIPAA badges, no guaranteed patient volume, no ₹ cost-per-visit theatre. You want founder-led delivery and will give access for a 14–21 day build.`}
        badTitle="Not a fit"
        badBody="Anyone wanting cheap logos, unlimited free revisions, “send 500 leads,” or a full-time engineer hire. Clinics that need a clinical EMR / HIPAA-certified product sold as marketing. Buyers who only want a SaaS subscription with no ownership. Multi-country enterprise rollouts that need a 12-month PMO. Practices with nobody to answer enquiries. Anyone asking us to invent case-study percentages or fake customer counts for their board. If that’s you, we’ll say no on the fit call — kindly and quickly."
      />

      <WhyGrid
        label="Why Wekex for this segment"
        title="Product depth. DFY delivery. Clear no’s."
        body="Fit isn’t only about you — it’s about how we work. Here’s what you get when you’re a yes."
        items={[
          {
            t: "Journey-first CRM",
            d: "Stages map to enquiry → contact → book → visit — not generic sales pipelines.",
          },
          {
            t: "Booking on the same spine",
            d: "Patients finish on mobile; desk sees booked and showed without hunting chats.",
          },
          {
            t: "Fixed USD packages",
            d: "Pilot, Install, Retainer — written scope. No mystery hourly fog to start.",
          },
          {
            t: "Live in weeks",
            d: "14–21 days after scope lock and assets. Two Pilot slots per month.",
          },
          {
            t: "You own the build",
            d: "Not endless platform rent to keep landing + board alive.",
          },
          {
            t: "Honest integrations",
            d: "Ads, WhatsApp handoff, calendar — scoped clearly. You keep accounts and spend.",
          },
        ]}
      />

      <FeatureMedia
        label="What good looks like"
        title="A clinic that uses the board every morning"
        body="Fit isn’t a logo on a slide. It’s a front desk that opens one queue, a owner who can read source → showed without agency fog, and a Pilot that shipped in weeks. Sample product context — not live client data."
        image="/assets/img/clinic/room.jpg"
        imageAlt="Clinic consultation room atmosphere"
        bullets={[
          "Weekend enquiries waiting with source tags",
          "Open follow-ups visible after a busy Monday",
          "Bookings and no-shows on the same journey",
          "Weekly snapshot that changes next week’s spend",
        ]}
      />

      <ProcessList
        label="Fit call → yes/no"
        title="How we decide quickly"
        body="We don’t drag “discovery” for months. The fit call exists to protect both sides."
        steps={[
          {
            t: "You email the basics",
            d: "Clinic name, country (NL / Australia / Canada / Nordics / other), website if any, goal (more enquiries / bookings). Use the book link — it pre-fills the prompt.",
          },
          {
            t: "15-minute conversation",
            d: "We ask how enquiries arrive today, who follows up, and whether you can approve Pilot this month.",
          },
          {
            t: "Clear yes / no",
            d: "If yes: one-page scope and slot. If no: we say why — and may point you elsewhere (including Property if that’s the real need).",
          },
          {
            t: "Build only after scope lock",
            d: "Assets and access in; 14–21 day path to live. No fake urgency — but slots are real.",
          },
        ]}
      />

      <FaqSection
        title="Fit FAQ"
        items={[
          {
            q: "We’re outside NL / Australia / Canada / Nordics — can we still apply?",
            a: "Sometimes. Those regions are the sweet spot for how we deliver. Other countries: ask on the fit call — we’ll say yes only if delivery quality stays high.",
          },
          {
            q: "We’re a multi-location group",
            a: "Pilot usually starts with one site / one path. Rolling out everywhere at once is rarely a Pilot. Fit call decides.",
          },
          {
            q: "We need HIPAA / clinical EMR",
            a: "We’re not that product. We build enquiry and booking ops. We don’t sell fake HIPAA badges.",
          },
          {
            q: "We only want Meta ads management",
            a: "Retainer exists for channel help — but we prefer a Pilot/Install so there’s a real enquiry system underneath. Ads into a messy inbox is how clinics waste spend.",
          },
          {
            q: "What if we’re not sure?",
            a: "Book the 15-minute call. A clear no is a successful outcome — better than a bad Pilot.",
          },
          {
            q: "Looking for UAE property instead?",
            a: "We have a separate Property offer. Use /property if brokerage lead systems are what you need.",
          },
        ]}
      />

      <AiDfySection {...CLINIC_AI.fit} />

      <CtaBand
        title="Not sure? Ask in 15 minutes"
        body="We’ll give a clear yes/no on fit and a one-page scope if it’s a yes. Reply within 24 hours."
        note="When both monthly slots are taken, the next start moves 3–4 weeks out."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property"
        secondaryLabel="Looking for Property instead?"
      />
    </>
  );
}
