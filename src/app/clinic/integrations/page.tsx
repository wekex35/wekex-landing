import type { Metadata } from "next";
import {
  PageHero,
  IntegrationGrid,
  FeatureMedia,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  CapabilityBlocks,
  FaqSection,
  ProcessList,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { CLINIC_BOOK } from "@/lib/niche-nav";
import { CLINIC_AI } from "@/lib/ai-dfy";
import { CLINIC_MARKETS, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Clinic Integrations | Meta, Google, WhatsApp | NL · AU · CA",
  description:
    `We wire Meta/Google, WhatsApp, and calendar into your clinic enquiry system for practices in ${CLINIC_MARKETS.phrase} — honest scope, fixed USD price. You keep accounts and ad spend.`,
  path: "/clinic/integrations",
  keywords: [
    "clinic Meta ads integration",
    "WhatsApp clinic leads Netherlands",
    "Google Ads dental booking Australia",
    "clinic calendar integration Canada",
  ],
});

export default function ClinicIntegrationsPage() {
  return (
    <>
      <PageHero
        label="Clinic · Integrations"
        title="Wire the tools you already use"
        titleAccent="We don’t pretend to be every vendor."
        body="Pilot and Install include practical connections: one paid or organic channel, WhatsApp/email handoff, and booking calendar — scoped clearly on the fit call. We install and wire. You keep accounts, ad spend, and clinical systems you already own."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic/pricing"
        secondaryLabel="Pricing"
        image="/assets/img/clinic/appointments.webp"
        imageAlt="Clinic system stack — sample diagram / not live client data"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "One channel in Pilot",
              "WhatsApp handoff links",
              "Booking calendar path",
              "You keep ad accounts",
              "Honest scope — no vapourware",
            ]}
          />
        </div>
      </section>

      <IntegrationGrid
        label="Typical wiring"
        title="What we commonly connect for clinics"
        body="Exact stack depends on your clinic, country, and what’s already live. We confirm on the fit call — then write it into Pilot or Install scope so nothing is assumed."
        groups={[
          {
            t: "Acquisition",
            items: [
              "Meta ads lead forms / landing traffic",
              "Google Ads to clinic landing",
              "Organic landing + SEO basics on the page we build",
              "UTM / source tagging into the enquiry board",
            ],
            note: "Pilot includes one channel setup. Additional channels are Install / Retainer scope.",
          },
          {
            t: "Messaging",
            items: [
              "WhatsApp handoff links with enquiry context",
              "Email notifications to desk / owner",
              "Reminder nudges as scoped",
              "Notes on the card so chat isn’t the only memory",
            ],
            note: "Handoff ≠ full WhatsApp Business API inbox product unless explicitly scoped.",
          },
          {
            t: "Scheduling",
            items: [
              "Patient-facing online booking UI",
              "Calendar visibility for the desk",
              "Booked status into the CRM board",
              "Showed / no-show status after the visit window",
            ],
            note: "We don’t silently replace every clinical scheduler — we wire acquisition booking ops.",
          },
          {
            t: "Analytics surface",
            items: [
              "Source tags on every enquiry",
              "Stage funnel: new → showed",
              "Weekly snapshot rhythm",
              "Channel notes (deeper on Retainer)",
            ],
            note: "Illustrative dashboards on this site are sample UI / not live client data.",
          },
          {
            t: "Forms & landings",
            items: [
              "One Pilot landing page",
              "Enquiry forms into the board",
              "Mobile-first capture",
              "Clear CTA to book or enquire",
            ],
          },
          {
            t: "Handover",
            items: [
              "Docs for how the stack fits together",
              "Desk walkthrough on go-live",
              "Access in your accounts — not locked in ours",
              "Optional Retainer for ongoing channel ops",
            ],
          },
        ]}
        disclaimer="Honest disclaimer: we install and wire what’s in scope. We do not claim to integrate every PMS/EMR, every ad network, or every messaging API out of the box. You keep your ad accounts and spend. We don’t claim HIPAA product certification — this is enquiry and booking ops, not a clinical records platform."
      />

      <CapabilityBlocks
        label="Deep dive"
        title="Ads, WhatsApp, and calendar — what “wired” means"
        body="Buzzwords are easy. Scope language is harder. Here’s how we talk about the three connections clinics ask about most."
        blocks={[
          {
            t: "Ads (Meta / Google)",
            d: "Pilot typically includes setup for one acquisition channel into your landing + enquiry board. Creative, budgets, and account ownership stay with you unless Retainer says otherwise.",
            items: [
              "Landing or lead form path into tagged enquiries",
              "Source visibility for that channel on the board",
              "Clear separation: our install fee ≠ your media spend",
              "No guarantee of lead volume or cost per visit",
            ],
          },
          {
            t: "WhatsApp",
            d: "Most clinic desks live in WhatsApp. We make handoffs structured — context on the card, links the desk can send — without pretending we’ve replaced WhatsApp itself.",
            items: [
              "Handoff links from enquiry / booking flows",
              "Desk notes so the next person has context",
              "Reminder / nudge paths only when scoped",
              "Explicit about API vs link-based approaches on the fit call",
            ],
          },
          {
            t: "Calendar / booking",
            d: "Patients finish booking online; status returns to the enquiry board. Exact calendar provider depends on your clinic — confirmed before build.",
            items: [
              "Mobile booking path patients can complete",
              "Booked → showed / no-show on the same journey",
              "Desk visibility without hunting chat threads",
              "No claim that we replace full clinical EMRs",
            ],
          },
          {
            t: "What stays yours",
            d: "Ownership matters. Done-for-you does not mean locked-in.",
            items: [
              "Ad accounts and billing",
              "Domain / hosting arrangements as agreed",
              "Clinical / PMS software you already run",
              "Patient relationships — we build the system, not rent your patients",
            ],
          },
        ]}
      />

      <FeatureMedia
        label="Stack picture"
        title="One enquiry system — not five disconnected tools"
        body="Landing → capture → board → booking → weekly snapshot. Integrations exist to feed that spine. Sample stack visual — not live client data."
        image="/assets/img/clinic/appointments.webp"
        imageAlt="System stack diagram — sample / not live client data"
        bullets={[
          "Fewer “which inbox did that lead hit?” moments",
          "Source tags that survive across tools",
          "Desk opens one board, not five tabs",
          "Retainer optional — system stays yours either way",
        ]}
      />

      <ProcessList
        label="How we scope integrations"
        title="Fit call → written scope → wire → verify"
        body="Nothing is assumed. If a connection isn’t written into Pilot or Install, it isn’t promised."
        steps={[
          {
            t: "Inventory what you use today",
            d: "Website, ads accounts, WhatsApp setup, calendar / PMS, email. Bring links and who owns logins.",
          },
          {
            t: "Mark Pilot vs later",
            d: "One channel + core booking/CRM path in Pilot. Extra channels, deeper messaging, or specialty routing in Install / Retainer.",
          },
          {
            t: "Write access and ownership",
            d: "Whose accounts, who pays media, who has admin. You keep spend and accounts.",
          },
          {
            t: "Wire and desk-verify",
            d: "Test capture → board → book on mobile. Confirm showed path. Fix friction in the optimize window when on Install.",
          },
        ]}
      />

      <FaqSection
        title="Clinic integrations FAQ"
        items={[
          {
            q: "Will you manage my ad spend?",
            a: "Not by default. Pilot/Install wire the channel into your system. Ongoing media management is Retainer scope if you want it. You keep accounts and pay media.",
          },
          {
            q: "Do you integrate with our dental/physio PMS?",
            a: "Sometimes partially, often not in Pilot. We are honest: enquiry ops and clinical PMS are different layers. Fit call decides what’s in vs out.",
          },
          {
            q: "Is WhatsApp Business API included?",
            a: "Only if explicitly scoped. Many clinics start with structured handoff links and notifications. We won’t imply full API inbox by default.",
          },
          {
            q: "Do you claim HIPAA-compliant integrations?",
            a: "No. We don’t sell fake HIPAA badges. This product is enquiry and booking operations — not a certified clinical integration suite.",
          },
          {
            q: "What if our stack is unusual?",
            a: "Say so on the fit call. We’ll give a clear yes/no and write scope — or decline if it’s a bad fit for founder-led delivery.",
          },
          {
            q: "Are stack diagrams real client architectures?",
            a: "No. Visuals are sample diagrams / not live client data.",
          },
        ]}
      />

      <AiDfySection {...CLINIC_AI.integrations} />

      <CtaBand
        title="Tell us your current stack"
        body="Bring website, booking tool, WhatsApp setup, and where enquiries arrive today — we’ll say what’s in Pilot vs Install."
        note="Fixed USD · you keep accounts · honest disclaimer above."
        primaryHref={CLINIC_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/clinic"
        secondaryLabel="Clinic overview"
      />
    </>
  );
}
