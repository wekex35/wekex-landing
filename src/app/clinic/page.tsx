import type { Metadata } from "next";
import {
  PageHero,
  JourneyTimeline,
  ModuleGrid,
  ProblemSolution,
  WorkflowSteps,
  FeatureMedia,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  FunnelStrip,
  SourceBoard,
  AudienceGrid,
  FaqSection,
  DeepLinkGrid,
  WhyGrid,
  ShowcaseGrid,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { CLINIC_BOOK } from "@/lib/niche-nav";
import { CLINIC_AI } from "@/lib/ai-dfy";
import { CLINIC_MARKETS, faqJsonLd, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Clinic Patient Enquiry Systems for NL, Australia, Canada & Nordics",
  description:
    "Done-for-you patient enquiry systems for dental and physio clinics in the Netherlands, Australia, Canada, and the Nordics. CRM, booking, workflows — live in 14–21 days. Pilot from $1,200.",
  path: "/clinic",
  keywords: CLINIC_MARKETS.keywords,
});

const CLINIC_FAQS = [
  {
    q: "Is this a SaaS subscription?",
    a: "No. Wekex sells done-for-you installs: Pilot, Full Install, and optional Retainer. You own the landing and system we build.",
  },
  {
    q: "Where does AI fit?",
    a: "DFY means we integrate AI where you want — reply drafts, nudges, routing, or none. Scoped on the fit call. Your desk stays in control; no unsupervised chatbot pretending to be the clinic.",
  },
  {
    q: "How long until we’re live?",
    a: "Most Clinic Pilots go live in 14–21 days after scope is locked and assets are provided.",
  },
  {
    q: "What’s included in the $1,200 Pilot?",
    a: "Enquiry audit, one landing page, booking/enquiry setup, CRM board stages, and one acquisition channel setup. Optional AI hooks are agreed on the fit call.",
  },
  {
    q: "Do you guarantee patient volume?",
    a: "No. We install a system and channel wiring. Outcomes depend on your market, spend, and how fast the desk follows up.",
  },
  {
    q: "HIPAA / medical records?",
    a: "We build enquiry and booking systems — not clinical EMRs. We don’t claim HIPAA product certification.",
  },
  {
    q: "Who is a good fit?",
    a: `Dental or physio clinics in ${CLINIC_MARKETS.phrase} that can approve a Pilot this month and have someone to follow up leads.`,
  },
];

export default function ClinicHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(CLINIC_FAQS)),
        }}
      />
      <PageHero
        label={`Clinic · ${CLINIC_MARKETS.label}`}
        title="Patient enquiry systems"
        titleAccent="built around the journey."
        body={`Wekex installs a done-for-you clinic system for practices in ${CLINIC_MARKETS.phrase} — unifying enquiries, calls/WhatsApp, appointments, and simple analytics so front desk stops losing patients in chat threads. Fixed USD scope. Live in 14–21 days. You own the build.`}
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book 15-min fit call"
        secondaryHref="/clinic/crm"
        secondaryLabel="Explore CRM"
        image="/assets/img/clinic/dashboard.jpg"
        imageAlt="Clinic patient enquiry CRM for dental and physio clinics"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Founder-led builds",
              "Fixed Pilot $1,200",
              "Live in 14–21 days",
              "2 slots / month",
              "You own the system",
            ]}
          />
        </div>
      </section>

      <JourneyTimeline
        label="Patient journey"
        title="Healthcare needs a CRM that understands patients — not just leads."
        steps={[
          {
            t: "Lead captured",
            d: "Website, landing, ads, or referral land on one board with source tags.",
          },
          {
            t: "First contact",
            d: "Call or WhatsApp logged against the enquiry — not lost in personal phones.",
          },
          {
            t: "Appointment booked",
            d: "Patient picks a slot online; desk sees booked vs open.",
          },
          {
            t: "Visit / showed",
            d: "Front desk closes the loop so marketing knows what converted.",
          },
          {
            t: "Follow-up",
            d: "Reminder or light review ask after showed — optional, not spammy.",
          },
        ]}
        stats={[
          { v: "14–21", l: "Days to live system" },
          { v: "2", l: "Pilot slots / month" },
          { v: "$1,200", l: "Pilot one-time" },
        ]}
      />

      <ProblemSolution
        label="Why clinic systems"
        title="Generic CRMs fail in clinics."
        problemTitle="What's the problem"
        problemItems={[
          "Lead-only lists with no visit or booking context",
          "No call / WhatsApp history on the patient record",
          "Marketing disconnected from front-desk operations",
          "No clear lifecycle from enquiry → booked → showed",
          "Owners guessing which channel actually drove visits",
        ]}
        solutionTitle="What Wekex installs"
        solutionItems={[
          "Patient-centric stages with full desk visibility",
          "Contact and booking status on every enquiry",
          "Landing + one channel wired into the same board",
          "Lifecycle from first enquiry through visit",
          "Source tags and a weekly snapshot you can act on",
        ]}
      />

      <ModuleGrid
        label="Core modules"
        title="Modules built for how clinics actually run"
        body="Same product depth you'd expect from a healthcare CRM — delivered as a fixed-scope install, not endless SaaS onboarding."
        modules={[
          {
            t: "Lead & enquiry",
            items: [
              "Website & landing forms",
              "Paid campaign capture",
              "Manual / referral entry",
              "Source tagging on every lead",
            ],
          },
          {
            t: "Booking & visits",
            items: [
              "Online slot selection",
              "Calendar visibility",
              "No-show / showed status",
              "Desk-friendly booking view",
            ],
          },
          {
            t: "Communication",
            items: [
              "WhatsApp handoff links",
              "Email notifications",
              "Reminder nudges",
              "Front-desk notes on cards",
            ],
          },
          {
            t: "Analytics & insights",
            items: [
              "Funnel stages",
              "Source effectiveness",
              "Weekly snapshot",
              "Open follow-up queue",
            ],
          },
        ]}
      />

      <WorkflowSteps
        label="Clinic workflows"
        title="Built for real healthcare workflows — not sales-team theatre"
        body="Workflows reflect how dental and physio desks operate day to day."
        steps={[
          {
            t: "New enquiry → call → appointment → visit",
            d: "Complete lead-to-patient path on one board with clear owners and next actions.",
          },
          {
            t: "Missed contact → follow-up → WhatsApp nudge",
            d: "Open leads don’t go cold because someone forgot to reply after a busy morning.",
          },
          {
            t: "Route by treatment or clinician",
            d: "When you have specialties or multiple chairs, enquiries land with the right owner.",
          },
          {
            t: "Post-visit reminder or review ask",
            d: "Optional light follow-up after showed — reputation without spam.",
          },
        ]}
      />

      <AiDfySection {...CLINIC_AI.hub} />

      <ShowcaseGrid
        label="AI options"
        title="Concept directions — you pick what to integrate"
        body="Illustrative inspiration only. DFY means we build the pieces you approve into your Pilot / Install — not every futuristic panel on this wall."
        note="Sample concepts for scoping. Not live product claims or clinical AI diagnostics."
        items={[
          {
            src: "/assets/img/clinic/ai-clinic.jpg",
            alt: "AI clinic operations concept",
            t: "Ops & engagement",
            d: "Efficiency, reminders, patient engagement hooks.",
            w: 735,
            h: 490,
          },
          {
            src: "/assets/img/clinic/ai-hospital.jpg",
            alt: "AI hospital assistant concept",
            t: "Desk assistant",
            d: "Tasks, alerts, and schedule help — human sends.",
            w: 736,
            h: 736,
          },
          {
            src: "/assets/img/clinic/ai-smart-hospital.jpg",
            alt: "Smart hospital AI concept",
            t: "System vision",
            d: "How AI can sit beside the enquiry stack.",
            w: 736,
            h: 736,
          },
          {
            src: "/assets/img/clinic/ai-personalize.jpg",
            alt: "Personalized care concept",
            t: "Personalization",
            d: "Only if it fits your niche — scoped, not assumed.",
            w: 1122,
            h: 1402,
          },
          {
            src: "/assets/img/clinic/ai-pharma.jpg",
            alt: "AI assistant with cited sources concept",
            t: "Assisted answers",
            d: "Drafts with sources — never unsupervised clinical advice.",
            w: 1200,
            h: 1500,
          },
          {
            src: "/assets/img/clinic/ai-health-app.jpg",
            alt: "AI health assistant mobile app concept",
            t: "Patient app (optional)",
            d: "Mobile AI coach style — only if you want it in scope.",
            w: 736,
            h: 736,
          },
          {
            src: "/assets/img/clinic/ai-telehealth.jpg",
            alt: "Telehealth video consult concept",
            t: "Telehealth (optional)",
            d: "Video consult + booking icons — wire only if you ask.",
            w: 736,
            h: 1104,
          },
        ]}
      />

      <FunnelStrip
        label="Marketing → visit"
        title="Marketing that doesn’t stop at leads"
        body="Every marketing interaction should flow into the enquiry board — so you see first click through to visit, not just form fills."
        steps={[
          { t: "Touchpoints", d: "Ads, SEO, site, local listing" },
          { t: "Capture", d: "Landing / form / WhatsApp" },
          { t: "CRM board", d: "Stages & owners" },
          { t: "Patient visit", d: "Booked → showed" },
          { t: "Snapshot", d: "Weekly clarity" },
        ]}
      />

      <FeatureMedia
        label="Product UI"
        title="One board for enquiries — not five chat threads"
        body="Pipeline statuses match clinic reality: new, contacted, booked, showed. Notes and source stay on the card so anyone on the desk can pick up."
        image="/assets/img/clinic/appointments.jpg"
        imageAlt="Clinic appointments dashboard — sample UI"
        bullets={[
          "Statuses your front desk already understands",
          "Source tags (web, ads, referral, walk-in)",
          "Clear next action on every open lead",
        ]}
      />

      <FeatureMedia
        label="Booking"
        title="Patients finish booking without calling the desk"
        body="Online slots, confirmation, and showed tracking — wired into the same enquiry system."
        image="/assets/img/clinic/booking-mobile.jpg"
        imageAlt="Clinic booking on mobile — sample UI"
        reverse
        bullets={[
          "Mobile-first booking experience",
          "Bookings land as structured enquiries",
          "No-show visibility for the desk",
        ]}
      />

      <FeatureMedia
        label="Landing pages"
        title="A clinic site patients actually finish"
        body="Pilot includes a landing built for enquiries — clear offer, form or WhatsApp CTA, and source tracking into the same board."
        image="/assets/img/clinic/landing-alt.jpg"
        imageAlt="Sample clinic marketing landing — illustrative"
        bullets={[
          "Clear CTA above the fold",
          "Mobile-first layout",
          "Wired to your enquiry system",
        ]}
      />

      <ShowcaseGrid
        label="Showcase"
        title="What the Clinic system looks like"
        body="Product UI, booking on mobile, landings, and the clinic atmosphere we design for — sample visuals, not live client screens."
        note="Illustrative mockups for scope. Your build is scoped on the fit call."
        items={[
          {
            src: "/assets/img/clinic/dashboard.jpg",
            alt: "Clinic operations dashboard",
            t: "Desk dashboard",
            d: "Doctors, schedule, and messages in one view.",
            w: 2048,
            h: 1536,
          },
          {
            src: "/assets/img/clinic/booking-mobile.jpg",
            alt: "Mobile booking app",
            t: "Mobile booking",
            d: "Patients book without calling the desk.",
            w: 1200,
            h: 900,
          },
          {
            src: "/assets/img/clinic/dental-mobile.jpg",
            alt: "Dental clinic mobile landing",
            t: "Niche landing",
            d: "Dental-style capture with a clear book CTA.",
            w: 736,
            h: 981,
          },
          {
            src: "/assets/img/clinic/appointments.jpg",
            alt: "Appointments board",
            t: "Appointments & queue",
            d: "Today’s list, availability, and follow-ups.",
            w: 1200,
            h: 900,
          },
          {
            src: "/assets/img/clinic/analytics.jpg",
            alt: "Clinic analytics dashboard",
            t: "Visibility",
            d: "Source and schedule clarity — not vanity counts.",
            w: 736,
            h: 566,
          },
          {
            src: "/assets/img/clinic/room.jpg",
            alt: "Modern clinic consultation room",
            t: "Clinic atmosphere",
            d: "The environment your patients walk into.",
            w: 735,
            h: 557,
          },
          {
            src: "/assets/img/clinic/office.jpg",
            alt: "Specialist clinic office",
            t: "Consult space",
            d: "Premium desk experience for specialist clinics.",
            w: 735,
            h: 675,
          },
          {
            src: "/assets/img/clinic/booking-ui.jpg",
            alt: "Booking UI mobile screen",
            t: "Booking UI",
            d: "Slot pick and confirm on the phone.",
            w: 735,
            h: 908,
          },
        ]}
      />

      <ShowcaseGrid
        label="Landing demos"
        title="Clinic landing pages we can ship"
        body="Full-page enquiry landings — hero, services, doctors, and book CTAs. Style varies by niche; your Pilot scopes one clear page wired to the board."
        note="Sample marketing layouts only — not live client sites. Branding on mocks is illustrative."
        items={[
          {
            src: "/assets/img/clinic/landing.jpg",
            alt: "Full hospital clinic website landing",
            t: "Multi-specialty clinic",
            d: "Hero, services, doctors, facilities, book CTAs.",
            w: 941,
            h: 1672,
          },
          {
            src: "/assets/img/clinic/landing-alt.jpg",
            alt: "Clinic marketing landing page",
            t: "General clinic",
            d: "Clean enquiry hero with appointment CTA.",
            w: 736,
            h: 1104,
          },
          {
            src: "/assets/img/clinic/landing-pedia.jpg",
            alt: "Pediatric clinic landing page",
            t: "Pediatrics",
            d: "Family-friendly booking and services grid.",
            w: 736,
            h: 1104,
          },
          {
            src: "/assets/img/clinic/landing-lab.jpg",
            alt: "Diagnostics lab landing page",
            t: "Diagnostics / lab",
            d: "Book a test, packages, and home collection.",
            w: 736,
            h: 1104,
          },
          {
            src: "/assets/img/clinic/landing-care.jpg",
            alt: "Healthcare delivery landing page",
            t: "Care + consult",
            d: "Online consult CTA and service cards.",
            w: 736,
            h: 1306,
          },
          {
            src: "/assets/img/clinic/dental-mobile.jpg",
            alt: "Dental clinic mobile landing",
            t: "Dental (mobile)",
            d: "Confident smile offer with book bar.",
            w: 736,
            h: 981,
          },
        ]}
      />

      <SourceBoard
        label="Visibility"
        title="Know what actually drives visits — not vanity lead counts"
        body="After go-live you see your sources and stages. Below is sample UI structure only — we don’t invent case-study percentages."
        rows={[
          { source: "Google / search landing", metric: "Enquiries → booked", detail: "Tagged per campaign" },
          { source: "Meta ads", metric: "Enquiries → booked", detail: "One Pilot channel" },
          { source: "Website / organic", metric: "Enquiries → booked", detail: "Form + source" },
          { source: "Referral / walk-in", metric: "Manual capture", detail: "Same board" },
        ]}
        note="Your real numbers appear after install. Illustrative layout only."
      />

      <WhyGrid
        label="Why Wekex"
        title="Product depth. DFY delivery. No SaaS lock-in."
        items={[
          {
            t: "Journey-first design",
            d: "Stages map to how patients move — enquiry, contact, book, visit — not generic sales stages.",
          },
          {
            t: "Fixed USD packages",
            d: "Pilot $1,200 · Install $2,500–3,500 · optional Retainer. Clear scope on the fit call.",
          },
          {
            t: "Live in weeks",
            d: "14–21 days to a working system. Two founder-led Pilot slots per month.",
          },
          {
            t: "You own the build",
            d: "No endless platform rent to keep your landing and board alive.",
          },
          {
            t: "Honest integrations",
            d: "We wire Meta/Google, WhatsApp, and calendar — scoped clearly. You keep accounts and ad spend.",
          },
          {
            t: "Real shipping proof",
            d: "Selected work includes live products (SuperKreator, GCL, 72 League, Nivase) — not fake clinic logos.",
          },
        ]}
      />

      <AudienceGrid
        label="Best suited for"
        title="Clinics ready to grow systematically"
        body="We say yes to a small number of Pilots so delivery stays founder-led."
        audiences={[
          {
            t: "Dental clinics",
            d: "Want more new-patient enquiries and a desk that can follow up without WhatsApp chaos.",
          },
          {
            t: "Physio & rehab",
            d: "Booking-heavy practices that need showed tracking and clear next actions.",
          },
          {
            t: "Growing single sites",
            d: "One location ready to approve a Pilot this month and own follow-up.",
          },
          {
            t: CLINIC_MARKETS.label,
            d: "Owners who want English-first delivery and fixed USD pricing across high-PPP markets.",
          },
        ]}
      />

      <DeepLinkGrid
        label="Explore the Clinic site"
        title="Every module has its own page — go as deep as you need"
        links={[
          { href: "/clinic/crm", t: "CRM", d: "Pipeline from new → showed with desk notes." },
          { href: "/clinic/booking", t: "Booking", d: "Calendar patients can finish on mobile." },
          { href: "/clinic/workflows", t: "Workflows", d: "Four operating flows clinics actually run." },
          { href: "/clinic/analytics", t: "Analytics", d: "Source and funnel clarity — no vanity counts." },
          { href: "/clinic/integrations", t: "Integrations", d: "Ads, WhatsApp, calendar — honest wiring." },
          { href: "/clinic/pricing", t: "Pricing", d: "Pilot · Full Install · Retainer in USD." },
          { href: "/clinic/fit", t: "Fit", d: "Who we say yes to — and who we don’t." },
        ]}
      />

      <FaqSection title="Clinic FAQ" items={CLINIC_FAQS} />

      <CtaBand
        title="See how Wekex fits your clinic"
        body="15-minute fit call. We reply within 24 hours with a one-page scope and a clear yes/no."
        note="When both monthly slots are taken, the next start moves 3–4 weeks out."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Email to book"
        secondaryHref="/clinic/pricing"
        secondaryLabel="See packages"
      />
    </>
  );
}
