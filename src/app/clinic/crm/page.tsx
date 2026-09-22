import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  FeatureMedia,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  FunnelStrip,
  CapabilityBlocks,
  CompareTable,
  FaqSection,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { CLINIC_BOOK } from "@/lib/niche-nav";
import { CLINIC_AI } from "@/lib/ai-dfy";
import { CLINIC_MARKETS, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Clinic Enquiry CRM for Dental & Physio | NL · AU · CA · Nordics",
  description:
    `Patient enquiry CRM for clinics in ${CLINIC_MARKETS.phrase} — new → contacted → booked → showed. Done-for-you install. Fixed USD Pilot from $1,200.`,
  path: "/clinic/crm",
  keywords: [
    "clinic enquiry CRM",
    "dental CRM Netherlands",
    "physio CRM Australia",
    "patient pipeline Canada",
    "clinic lead management Nordics",
  ],
});

export default function ClinicCrmPage() {
  return (
    <>
      <PageHero
        label="Clinic · CRM"
        title="Enquiry CRM for clinics"
        titleAccent="Patient journeys, not lead dumps."
        body={`Every patient enquiry lives on one board: new, contacted, booked, showed. Built for dental and physio desks in ${CLINIC_MARKETS.phrase}. Notes, source tags, and next actions stay on the card — so front desk stops chasing threads across WhatsApp, sticky notes, and personal phones. Done-for-you install. You own the build.`}
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/booking"
        secondaryLabel="See booking"
        image="/assets/img/clinic/dashboard.jpg"
        imageAlt="Clinic enquiry CRM pipeline for NL, Australia, Canada and Nordic clinics"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Stages: new → showed",
              "Source tags on every card",
              "Desk notes & owners",
              "Wired to booking",
              "You own the system",
            ]}
          />
        </div>
      </section>

      <ProblemSolution
        label="Why clinic CRM"
        title="Generic CRMs fail in clinics — because clinics are not sales teams."
        problemTitle="The usual mess"
        problemItems={[
          "Lead-only lists with no visit or booking context — marketing celebrates “leads,” desk has no idea who showed",
          "Call and WhatsApp history lives on personal phones, not on the patient enquiry",
          "Marketing landing pages dump into inboxes; front desk never sees a queue",
          "No clear lifecycle from first enquiry → contacted → booked → showed",
          "Owners guess which channel drove visits because nothing is tagged at capture",
          "Handoffs break when one receptionist is off — nothing is written down on the card",
        ]}
        solutionTitle="What Wekex installs"
        solutionItems={[
          "Patient-centric stages your desk already understands: new, contacted, booked, showed",
          "Contact status, booking status, and source on every enquiry card",
          "Landing + one acquisition channel wired into the same board",
          "Lifecycle visibility from first touch through visit — not a vanity lead list",
          "Desk notes and next-action clarity so anyone can pick up an open lead",
          "A weekly snapshot rhythm you can act on — without an enterprise BI project",
        ]}
      />

      <FeatureMedia
        label="Pipeline"
        title="New → contacted → booked → showed"
        body="Statuses match how clinics actually work. Sample UI layout below — not live client data. Nothing important lives only in a chat thread: source, owner, notes, and next action sit on the card so the board is the source of truth."
        image="/assets/img/clinic/appointments.jpg"
        imageAlt="Enquiry CRM stages — sample UI / not live client data"
        bullets={[
          "Source tags (web, ads, referral, walk-in, manual)",
          "Owner / desk notes on each card — handoffs that survive shift changes",
          "Clear next action for every open lead (call, WhatsApp, book, close)",
          "Booked and showed status shared with the booking module — one system",
        ]}
      />

      <CapabilityBlocks
        label="What the board carries"
        title="CRM depth clinics actually use day to day"
        body="We don’t bolt on a hundred unused features. We install the enquiry surface your desk will open every morning — and wire it to capture, booking, and a light reporting rhythm."
        blocks={[
          {
            t: "Capture & source",
            d: "Every enquiry that enters the system should arrive already tagged — so later reporting is not a spreadsheet archaeology project.",
            items: [
              "Website and landing form capture into the board",
              "Paid channel capture (one channel in Pilot; more in Install as scoped)",
              "Manual / referral / walk-in entry with the same stage model",
              "Source field visible on the card and in weekly review",
            ],
          },
          {
            t: "Desk operations",
            d: "Front desk is the product user. If the board is slower than WhatsApp, they won’t use it — so we design for speed and clarity.",
            items: [
              "Stage moves that take seconds, not a CRM certification course",
              "Notes for “called twice / prefers mornings / wants whitening quote”",
              "Open follow-up queue so cold leads are visible, not forgotten",
              "Optional owner / clinician routing when you have specialties",
            ],
          },
          {
            t: "Booking loop",
            d: "CRM without booking context is just a prettier inbox. Enquiries and appointments share status so marketing and desk stay aligned.",
            items: [
              "Booked status when a patient finishes online booking",
              "Showed / no-show visibility after the visit window",
              "Same patient journey language across CRM and calendar views",
              "Less “did they actually come?” chasing between marketing and reception",
            ],
          },
          {
            t: "Handover & ownership",
            d: "This is a done-for-you install, not a SaaS seat you rent forever. You own the landing and system we build.",
            items: [
              "Fixed USD Pilot / Install scope — clear on the fit call",
              "Handover docs so your team knows how to run the board",
              "Optional Retainer for channel management — not required to keep the CRM alive",
              "No fake “HIPAA certified CRM” claims — this is enquiry ops, not an EMR",
            ],
          },
        ]}
      />

      <CompareTable
        label="Compare"
        title="Generic CRM vs Wekex clinic enquiry system"
        body="Most clinics don’t need another pipeline toy. They need a board that matches patient journeys and sits next to booking — installed in weeks, owned by the clinic."
        headers={["Capability", "Generic CRM / inbox", "Wekex clinic install"]}
        rows={[
          [
            "Stages",
            "Sales stages (SQL, negotiation…)",
            "Clinic stages: new → contacted → booked → showed",
          ],
          [
            "Visit context",
            "Often missing — leads only",
            "Booking + showed status on the same journey",
          ],
          [
            "Desk handoff",
            "Chat threads & personal phones",
            "Notes + next action on the enquiry card",
          ],
          [
            "Source clarity",
            "UTMs in a spreadsheet (maybe)",
            "Source tags at capture, visible weekly",
          ],
          [
            "Delivery model",
            "SaaS seats + endless onboarding",
            "DFY Pilot / Install — you own the build",
          ],
          [
            "Time to useful",
            "Months of configuration",
            "Typically live in 14–21 days after scope lock",
          ],
          [
            "Clinical records",
            "Sometimes oversold as “healthcare CRM”",
            "Enquiry & booking ops only — not an EMR",
          ],
        ]}
      />

      <FunnelStrip
        label="Enquiry → visit"
        title="How an enquiry moves through the Wekex board"
        body="Marketing does not stop at form fills. The same journey language runs from first touch to showed — so you can see where volume drops without inventing vanity metrics."
        steps={[
          {
            t: "Capture",
            d: "Landing, ads, site, or referral lands as a tagged enquiry",
          },
          {
            t: "New",
            d: "Visible on the board with source and next action",
          },
          {
            t: "Contacted",
            d: "Call / WhatsApp logged — not lost on a personal phone",
          },
          {
            t: "Booked",
            d: "Slot confirmed; desk sees booked vs open",
          },
          {
            t: "Showed",
            d: "Visit closed so marketing knows what converted",
          },
        ]}
      />

      <FeatureMedia
        label="Why it sticks"
        title="Built for the desk — not for a sales enablement deck"
        body="If reception won’t open it on a busy Monday, the CRM is theatre. We keep stages short, cards scannable, and booking status in the same system so the board earns its place next to the phone."
        image="/assets/img/clinic/room.jpg"
        imageAlt="Clinic desk and enquiry system context"
        reverse
        bullets={[
          "Language your team already uses — not “MQLs”",
          "One place for open follow-ups after a busy morning",
          "Works with WhatsApp handoff links — we don’t pretend to replace every chat app",
          "Paired with booking and analytics pages in this Clinic site",
        ]}
      />

      <FaqSection
        title="Clinic CRM FAQ"
        items={[
          {
            q: "Is this a SaaS CRM subscription?",
            a: "No. Wekex sells done-for-you installs: Pilot, Full Install, and optional Retainer. You own the landing and enquiry system we build — we are not renting you seats forever.",
          },
          {
            q: "What stages do you install?",
            a: "Typically new → contacted → booked → showed, with source tags and desk notes. We tune labels to how your clinic already talks about patients.",
          },
          {
            q: "Does this replace our EMR / clinical software?",
            a: "No. We build enquiry and booking operations — not clinical charts, prescriptions, or medical records systems. We do not claim HIPAA product certification.",
          },
          {
            q: "Will my front desk actually use it?",
            a: "That’s the design bar. If a flow is slower than WhatsApp, we cut it. The board has to be faster for handoffs and open follow-ups than hunting chat threads.",
          },
          {
            q: "What’s included in the Pilot for CRM?",
            a: "Enquiry audit, board stages, capture into the board, booking/enquiry setup, and one acquisition channel. Exact scope is locked on the fit call.",
          },
          {
            q: "Do you guarantee more patients?",
            a: "No. We install a system and channel wiring. Outcomes depend on your market, spend, offer, and how fast the desk follows up.",
          },
          {
            q: "Are the screenshots real clinic data?",
            a: "No. Product visuals are sample UI layouts — not live client data. Your numbers appear after install.",
          },
        ]}
      />

      <AiDfySection {...CLINIC_AI.crm} />

      <CtaBand
        title="Want this CRM live in weeks?"
        body="Pilot includes enquiry audit, landing, booking setup, CRM board stages, and one channel. 15-minute fit call — we reply within 24 hours with a one-page scope."
        note="Two founder-led Pilot slots per month. When both are taken, the next start moves 3–4 weeks out."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Start with Pilot"
        secondaryHref="/clinic/pricing"
        secondaryLabel="See packages"
      />
    </>
  );
}
