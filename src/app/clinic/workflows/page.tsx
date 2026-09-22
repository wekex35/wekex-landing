import type { Metadata } from "next";
import {
  PageHero,
  FeatureMedia,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  StageJourney,
  ProcessList,
  FaqSection,
  CapabilityBlocks,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { CLINIC_BOOK } from "@/lib/niche-nav";
import { CLINIC_AI } from "@/lib/ai-dfy";
import { CLINIC_MARKETS, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Clinic Patient Workflows | NL · Australia · Canada · Nordics",
  description:
    `Real clinic operating workflows for ${CLINIC_MARKETS.phrase}: enquiry to visit, missed-call follow-up, treatment routing, and post-visit asks — installed as done-for-you flows.`,
  path: "/clinic/workflows",
  keywords: [
    "clinic patient workflows",
    "dental follow-up system Netherlands",
    "physio enquiry workflow Australia",
    "clinic automation Canada",
  ],
});

export default function ClinicWorkflowsPage() {
  return (
    <>
      <PageHero
        label="Clinic · Workflows"
        title="Workflows clinics actually run"
        titleAccent="Not sales-team theatre."
        body="We map how your desk works today, then install flows that match: enquiry → contact → book → visit — with follow-ups that don’t rely on memory. Four operating flows below are the ones we typically wire in a Clinic Pilot or Full Install."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/analytics"
        secondaryLabel="Analytics"
        image="/assets/img/clinic/appointments.jpg"
        imageAlt="Clinic enquiry system flow — sample UI / not live client data"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Enquiry → visit path",
              "Missed-contact recovery",
              "Treatment / clinician routing",
              "Post-visit light ask",
              "Desk-first design",
            ]}
          />
        </div>
      </section>

      <StageJourney
        label="Flow 01 · Lead to visit"
        title="New enquiry → call → appointment → visit"
        body="The core path. If this is broken, ads and landings just fill a louder inbox. We install a complete lead-to-patient path on one board with clear owners and next actions."
        stages={[
          {
            t: "Enquiry lands",
            d: "Website, landing, ads, WhatsApp handoff, or referral becomes a card with source and stage = new.",
            items: [
              "Tagged at capture — not “unknown” forever",
              "Visible in the open queue the same day",
              "Desk knows what “done for now” looks like",
              "No duplicate ghosts if the patient also books online",
            ],
          },
          {
            t: "First contact",
            d: "Call or WhatsApp is logged against the enquiry — not only on a personal phone. Stage moves to contacted with a note.",
            items: [
              "Next action if they don’t answer",
              "Preference notes (mornings, language, treatment interest)",
              "Handoff-safe for the next shift",
              "Escalation when a lead goes quiet",
            ],
          },
          {
            t: "Appointment booked",
            d: "Patient books online or desk books for them. Status becomes booked; calendar and CRM agree.",
            items: [
              "Slot visible without hunting messages",
              "Source still on the card for later reporting",
              "Reminder path as scoped in Pilot/Install",
              "Clear owner if clinician assignment matters",
            ],
          },
          {
            t: "Visit / showed",
            d: "Front desk closes the loop. Marketing finally sees what converted — without inventing vanity percentages.",
            items: [
              "Showed closes the funnel for the week",
              "No-show stays actionable",
              "Optional light post-visit follow-up",
              "Notes ready if they rebook later",
            ],
          },
        ]}
      />

      <StageJourney
        label="Flow 02 · Missed contact"
        title="Missed contact → follow-up → WhatsApp nudge"
        body="Busy mornings kill conversion. Open leads go cold because nobody owns the second attempt. This flow makes recovery visible — not heroic memory."
        stages={[
          {
            t: "No answer / busy",
            d: "First attempt fails. The card stays open with a timestamped note — not deleted from someone’s head.",
            items: [
              "Attempt logged on the enquiry",
              "Next attempt time suggested",
              "Still in the open follow-up queue",
              "Not marked contacted until real contact happens",
            ],
          },
          {
            t: "Structured follow-up",
            d: "Second and third touches follow a simple desk rule — call, then WhatsApp nudge — so volume doesn’t depend on who remembered.",
            items: [
              "WhatsApp handoff link with context",
              "Short scripts your desk can adapt",
              "Clear stop rule so patients aren’t harassed",
              "Owner visible if multiple people share the queue",
            ],
          },
          {
            t: "Recover or close",
            d: "Lead books, stays warm, or closes cleanly. Dead leads don’t pollute “new” forever.",
            items: [
              "Booked path rejoins Flow 01",
              "Closed reason optional and honest",
              "Queue stays scannable for the desk",
              "Weekly review can see stuck stages",
            ],
          },
        ]}
      />

      <ProcessList
        label="Flow 03 · Routing"
        title="Route by treatment or clinician"
        body="When you have specialties, multiple chairs, or preferred clinicians, enquiries should land with the right owner — without a game of telephone."
        steps={[
          {
            t: "Capture interest early",
            d: "Landing or form captures treatment interest (e.g. hygiene, whitening, physio assessment) so routing isn’t guesswork.",
          },
          {
            t: "Assign owner on the board",
            d: "Card shows who owns first contact — receptionist, coordinator, or clinician — based on simple rules you approve.",
          },
          {
            t: "Handoff without losing context",
            d: "Notes and source travel with the card. The next person doesn’t restart the conversation from zero.",
          },
          {
            t: "Escalate when stuck",
            d: "If an owner is off or overloaded, open follow-ups stay visible so the clinic doesn’t silently lose demand.",
          },
        ]}
      />

      <CapabilityBlocks
        label="Flow 04 · After the visit"
        title="Post-visit reminder or review ask — light, optional, not spammy"
        body="Reputation and rebooking matter — but clinics hate spam. We only wire post-visit asks you approve, with clear stop rules."
        blocks={[
          {
            t: "When it makes sense",
            d: "After showed, some clinics want a gentle reminder for a follow-up visit or a review ask. Others want silence. You choose.",
            items: [
              "Triggered from showed — not from random lead dumps",
              "Channel and wording scoped with you",
              "Easy to turn off if it feels wrong for your brand",
              "Never presented as guaranteed 5-star flood",
            ],
          },
          {
            t: "What we won’t do",
            d: "We don’t install aggressive drip spam or fake “automated reputation engines” that burn trust.",
            items: [
              "No purchased review schemes",
              "No medical advice bots posing as clinicians",
              "No claim that workflows alone fill chairs",
              "No HIPAA theatre — this is ops follow-up, not clinical care",
            ],
          },
        ]}
      />

      <FeatureMedia
        label="Desk scenarios"
        title="What a Monday morning looks like with the board live"
        body="Reception opens one queue: new enquiries from the weekend, contacted-but-not-booked, booked-today, and open no-shows from last week. Sample UI concept — not live client data. The point is operational calm, not a prettier spreadsheet."
        image="/assets/img/clinic/dashboard.jpg"
        imageAlt="Clinic desk enquiry board — sample UI / not live client data"
        bullets={[
          "Weekend Meta / Google enquiries already tagged and waiting",
          "Two no-answers from Friday still in follow-up — not forgotten",
          "Today’s bookings visible alongside who still needs a call",
          "Owner can cover for a colleague without reading private WhatsApp",
        ]}
      />

      <ProcessList
        label="How we install workflows"
        title="Map → agree → wire → walk the desk"
        body="Workflows fail when they are invented in a slide deck. We start from your real desk habits, then install only what they will run."
        steps={[
          {
            t: "Audit the current path",
            d: "Where enquiries arrive, who answers, how booking happens, where things die. Honest map — including the messy WhatsApp threads.",
          },
          {
            t: "Pick Pilot vs Install depth",
            d: "Pilot proves the core enquiry → book → visit path plus one channel. Install hardens routing, reminders, and reporting rhythm.",
          },
          {
            t: "Wire stages and next actions",
            d: "Board statuses, notes, and booking status match the flows above — in language your team already uses.",
          },
          {
            t: "Desk walkthrough on go-live",
            d: "We don’t throw a login over the wall. Reception practices the Monday queue before traffic ramps.",
          },
        ]}
      />

      <FaqSection
        title="Clinic workflows FAQ"
        items={[
          {
            q: "Do you customize every clinic’s workflows?",
            a: "We start from the four operating flows above and tune labels, owners, and reminder depth to your desk. We don’t invent a unique enterprise BPM project for every Pilot.",
          },
          {
            q: "Is WhatsApp fully integrated as an inbox?",
            a: "We typically wire handoff links and notification paths — scoped clearly. We don’t pretend to replace every messaging platform’s full inbox product.",
          },
          {
            q: "Can workflows guarantee fewer no-shows?",
            a: "No. Reminders and status visibility help the desk act — they don’t guarantee behaviour change in every market.",
          },
          {
            q: "What’s in Pilot vs Full Install?",
            a: "Pilot proves the core path and one channel. Full Install expands routing, optimize window, and handover depth. Exact scope locks on the fit call.",
          },
          {
            q: "Are scenario screenshots real clinics?",
            a: "No. Product visuals are sample UI / not live client data.",
          },
        ]}
      />

      <AiDfySection {...CLINIC_AI.workflows} />

      <CtaBand
        title="Want these flows live?"
        body="We agree scope on the fit call — Pilot proves one path; Install hardens the rest. Founder-led. Fixed USD."
        note="Two Pilot slots per month."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/fit"
        secondaryLabel="Who it's for"
      />
    </>
  );
}
