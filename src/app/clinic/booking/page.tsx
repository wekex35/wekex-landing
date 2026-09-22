import type { Metadata } from "next";
import {
  PageHero,
  FeatureMedia,
  WorkflowSteps,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  ProcessList,
  FaqSection,
  CapabilityBlocks,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { CLINIC_BOOK } from "@/lib/niche-nav";
import { CLINIC_AI } from "@/lib/ai-dfy";
import { CLINIC_MARKETS, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Clinic Online Booking System | NL · Australia · Canada · Nordics",
  description:
    `Online booking and visit tracking for clinics in ${CLINIC_MARKETS.phrase}. Patients pick slots on mobile; desk sees booked, showed, and no-show — wired into the same enquiry CRM.`,
  path: "/clinic/booking",
  keywords: [
    "clinic online booking Netherlands",
    "dental appointment booking Australia",
    "physio booking system Canada",
    "patient scheduling Nordics",
  ],
});

export default function ClinicBookingPage() {
  return (
    <>
      <PageHero
        label="Clinic · Booking"
        title="Booking patients can finish"
        titleAccent="without calling the desk."
        body={`Online slots, confirmation, and showed tracking for clinics in ${CLINIC_MARKETS.phrase} — wired into the same enquiry system as your CRM board. Patients decide on their phone; your desk sees booked vs open without hunting WhatsApp threads.`}
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/workflows"
        secondaryLabel="See workflows"
        image="/assets/img/clinic/booking-mobile.jpg"
        imageAlt="Clinic online booking for dental and physio clinics in NL, Australia, Canada and Nordics"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Mobile-first booking",
              "Lands as structured enquiry",
              "Showed / no-show status",
              "Same board as CRM",
              "Pilot-ready in weeks",
            ]}
          />
        </div>
      </section>

      <FeatureMedia
        label="Calendar"
        title="Slots that sync with how you work"
        body="Patients pick a time that fits. You see booked vs open without hunting through messages. The calendar view is part of the enquiry system — not a disconnected widget that emails someone and then disappears."
        image="/assets/img/clinic/booking-mobile.jpg"
        imageAlt="Booking calendar UI — sample UI / not live client data"
        bullets={[
          "Clear available windows your desk can defend",
          "Booking lands as a structured enquiry with source and status",
          "No-show and showed status on the board after the visit window",
          "Fewer “did they book?” loops between marketing and reception",
        ]}
      />

      <FeatureMedia
        label="Mobile"
        title="Works on the phone — where most patients decide"
        body="Desktop-only forms lose people who were ready to book on the couch. Capture and booking screens are built for thumbs: short steps, clear CTAs, confirmation that doesn’t require a call back just to finish."
        image="/assets/img/clinic/dental-mobile.jpg"
        imageAlt="Mobile clinic booking — sample UI / not live client data"
        reverse
        bullets={[
          "Fast enquiry capture before the patient bounces",
          "Booking CTAs placed where intent is highest",
          "Confirmation path the desk can trust",
          "Desk-friendly follow-up when a patient stalls mid-book",
        ]}
      />

      <WorkflowSteps
        label="No-shows & visit status"
        title="Booking is not finished when the slot is reserved"
        body="Clinics lose money and chair time when “booked” never becomes “showed.” We wire status so the desk can see risk early and close the loop after the visit window."
        steps={[
          {
            t: "Booked → reminder path",
            d: "Light confirmation / reminder nudges (as scoped) so the appointment is not a silent calendar ghost.",
          },
          {
            t: "Showed closed on the board",
            d: "When the patient arrives, status moves to showed — marketing and desk share the same truth.",
          },
          {
            t: "No-show visible, not buried",
            d: "Missed visits stay on the board with a next action: rebook, WhatsApp, or close — not lost in a chat.",
          },
          {
            t: "Rebook without starting from zero",
            d: "History and notes stay on the enquiry so a second attempt isn’t “who was this again?”",
          },
        ]}
      />

      <CapabilityBlocks
        label="Booking + CRM together"
        title="Why booking alone is not enough"
        body="A calendar widget that dumps into email recreates the same mess. Wekex installs booking inside the enquiry journey — so source, stage, and visit outcome stay connected."
        blocks={[
          {
            t: "Before the slot",
            d: "Enquiry and booking share identity so you don’t get duplicate ghosts — one patient, one card, clear next step.",
            items: [
              "Form or ad capture can hand into booking",
              "Source tags survive into the booked stage",
              "Desk sees who still needs a call vs who self-booked",
              "Open leads without a slot stay visible in the queue",
            ],
          },
          {
            t: "After the slot",
            d: "Visit outcome is the marketing truth. Without showed / no-show, channel decisions are guesswork.",
            items: [
              "Showed status closes the funnel for reporting",
              "No-show triggers a defined follow-up, not silence",
              "Optional light post-visit ask — scoped, not spammy",
              "Weekly snapshot can include booked vs showed — your numbers after go-live",
            ],
          },
        ]}
      />

      <ProcessList
        label="How we install booking"
        title="From fit call to patients booking online"
        body="Exact tooling depends on your clinic and market. We confirm stack on the fit call — then ship a path patients can finish without calling the desk."
        steps={[
          {
            t: "Map how booking works today",
            d: "Phone-only? WhatsApp slots? Existing calendar tool? We document the real path — including where patients drop — before we rebuild anything.",
          },
          {
            t: "Define windows and rules",
            d: "Available hours, buffers, treatment types if needed, and what the desk must still control manually. We don’t invent fake “always full” calendars.",
          },
          {
            t: "Wire booking into the enquiry board",
            d: "A finished booking becomes a structured enquiry at booked — with source and notes — not a lonely email.",
          },
          {
            t: "Mobile QA and desk walkthrough",
            d: "We test the patient path on phone and walk reception through showed / no-show so day-one habits stick.",
          },
          {
            t: "Go-live + short optimize window",
            d: "Pilot proves the path; Full Install includes a short post-go-live optimize window so friction gets fixed while it’s fresh.",
          },
        ]}
      />

      <FaqSection
        title="Clinic booking FAQ"
        items={[
          {
            q: "Does booking replace our existing calendar forever?",
            a: "Not necessarily. We wire a patient-facing booking path into your enquiry system. Exact calendar tooling is scoped on the fit call — we are honest about what we connect vs what you keep.",
          },
          {
            q: "Will patients still call?",
            a: "Some will — that’s fine. The goal is that people who are ready to self-serve can finish without blocking the desk, while phone enquiries still land on the same board.",
          },
          {
            q: "How do no-shows work?",
            a: "Booked appointments get showed / no-show status on the board so the desk has a next action. Reminder nudges are scoped per Pilot/Install — we don’t claim magic no-show elimination.",
          },
          {
            q: "Is this an EMR appointment module?",
            a: "No. This is enquiry and booking operations for patient acquisition — not clinical scheduling inside a medical records product. We don’t claim HIPAA certification.",
          },
          {
            q: "Are booking screenshots real clinic calendars?",
            a: "No. Visuals are sample UI / not live client data. Your live slots and patients appear after install.",
          },
          {
            q: "Is booking in the $1,200 Pilot?",
            a: "Yes — Pilot includes booking/enquiry setup alongside landing, CRM stages, and one channel. Scope details lock on the fit call.",
          },
        ]}
      />

      <AiDfySection {...CLINIC_AI.booking} />

      <CtaBand
        title="Add booking to your Pilot"
        body="Landing + booking + CRM board + one channel is the Pilot core. Patients finish on mobile; desk sees booked and showed in one system."
        note="Fixed USD. You own the build. Two Pilot slots per month."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/pricing"
        secondaryLabel="See packages"
      />
    </>
  );
}
