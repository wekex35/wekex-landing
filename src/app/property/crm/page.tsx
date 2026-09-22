import type { Metadata } from "next";
import {
  PageHero,
  ProblemSolution,
  FeatureMedia,
  WorkflowSteps,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  CapabilityBlocks,
  CompareTable,
  FaqSection,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { PROPERTY_BOOK } from "@/lib/niche-nav";
import { PROPERTY_AI } from "@/lib/ai-dfy";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "UAE Property Lead CRM for Dubai & Abu Dhabi Brokerages",
  description:
    "Lead inbox and routing for Dubai and Abu Dhabi brokerages. First agent to respond wins the viewing — we install the WhatsApp-first enquiry system. Pilot from $1,500.",
  path: "/property/crm",
  keywords: [
    "Dubai real estate CRM",
    "Abu Dhabi property lead inbox",
    "UAE brokerage CRM",
    "WhatsApp property leads Dubai",
  ],
});

export default function PropertyCrmPage() {
  return (
    <>
      <PageHero
        label="Property · CRM"
        title="Lead inbox for brokerages"
        titleAccent="Speed beats another portal login."
        body="Conversations, routing, and first-response visibility in one place for Dubai and Abu Dhabi desks — so the agent who should reply actually does, before the buyer messages someone else."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property/listings"
        secondaryLabel="See listings"
        image="/assets/img/property/dashboard.jpg"
        imageAlt="UAE property lead CRM inbox for Dubai and Abu Dhabi brokerages"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Capture → route → first reply",
              "Dubai · Abu Dhabi",
              "5–20 agent teams",
              "Sample UI labeled as sample",
            ]}
          />
        </div>
      </section>

      <ProblemSolution
        label="Why owned CRM"
        title="Portal leads without a system leak money"
        problemTitle="The usual mess"
        problemItems={[
          "Leads scattered across WhatsApp, portals, and personal phones",
          "No clear owner for first response on hot stock",
          "Viewings set in chats that vanish when agents leave",
          "No source clarity when you decide where to spend next",
          "Principals can’t see open follow-ups without pinging the group",
        ]}
        solutionTitle="What Wekex installs"
        solutionItems={[
          "Central inbox with agent routing and ownership",
          "Status from new → contacted → viewing → follow-up",
          "Notes that survive phone handoffs",
          "Tags so you know which channel or listing drove the enquiry",
          "A follow-up queue instead of relying on memory",
        ]}
      />

      <WorkflowSteps
        label="Lead path"
        title="Capture · route · first response"
        body="The CRM is built around the three moments that decide whether a buyer books a viewing."
        steps={[
          {
            t: "Capture",
            d: "Listing page, ads, or WhatsApp CTA creates a structured enquiry with source — not a screenshot in a group.",
          },
          {
            t: "Route",
            d: "Owner is clear: listing agent, duty desk, or rotation you define on the fit call.",
          },
          {
            t: "First response",
            d: "Visibility on who replied and what’s still open — because speed wins the viewing in UAE.",
          },
          {
            t: "Handoff",
            d: "If another agent picks up, notes and status stay on the card so buyers don’t repeat themselves.",
          },
        ]}
      />

      <CapabilityBlocks
        label="Inbox capabilities"
        title="What your team runs day to day"
        body="Practical desk tools — not a bloated enterprise CRM you never finish configuring."
        blocks={[
          {
            t: "Threads & ownership",
            d: "WhatsApp-style conversation context with a named owner so hot leads don’t sit unclaimed.",
            items: [
              "Assign / reassign to the right agent",
              "Desk notes on every open lead",
              "Status that matches brokerage language",
              "Clear next action instead of vague “nurture”",
            ],
          },
          {
            t: "Sources & clarity",
            d: "Know whether the enquiry came from your lander, ads, WhatsApp, or a portal handoff — without inventing vanity conversion rates.",
            items: [
              "Source / UTM tags on capture",
              "Listing or campaign label when available",
              "Weekly snapshot after go-live (optional retainer)",
              "No fake “case study” percentages on this page",
            ],
          },
          {
            t: "Viewing readiness",
            d: "When interest is real, keep slot, community, and buyer context attached to the same card.",
            items: [
              "Viewing-set status",
              "Notes for the agent on site",
              "Follow-up after the tour",
              "Handover without rewriting history",
            ],
          },
          {
            t: "Ops for principals",
            d: "See what’s open without scrolling three WhatsApp groups at midnight.",
            items: [
              "Open follow-up queue",
              "Unassigned / stalled visibility",
              "Simple stages your desk already understands",
              "Handoff notes for holidays and shifts",
            ],
          },
        ]}
      />

      <FeatureMedia
        label="Product UI · sample"
        title="Built for how buyers message"
        body="Sample inbox layout — illustrative structure only, not live client case numbers or fabricated response-time claims."
        image="/assets/img/property/crm-pipeline.jpg"
        imageAlt="Deals kanban pipeline — sample lead inbox UI, not live client data"
        bullets={[
          "First-response visibility",
          "Assign to the right agent",
          "Follow-up queue instead of memory",
        ]}
      />

      <CompareTable
        label="Compare"
        title="Portals-only vs owned enquiry system"
        body="Portals remain useful inventory channels. The gap is what happens after the enquiry lands."
        headers={["Capability", "Portals only", "Wekex owned system"]}
        rows={[
          [
            "Where enquiries live",
            "Portal inbox + personal WhatsApp",
            "Central brokerage inbox you own",
          ],
          [
            "First-response owner",
            "Often unclear / first to grab",
            "Named agent or duty route",
          ],
          [
            "Listing pages",
            "Rented portal detail pages",
            "Owned landers with your CTAs",
          ],
          [
            "Source clarity",
            "Portal-reported leads",
            "Tags on your capture path",
          ],
          [
            "After viewing",
            "Chat history on phones",
            "Follow-up status on the card",
          ],
          [
            "Trakheesi / ad permits",
            "Your brokerage",
            "Still your brokerage — we don’t hold them",
          ],
          [
            "Commercial model",
            "Ongoing portal / agency fees",
            "Pilot $1,500 · Install · optional Retainer",
          ],
        ]}
      />

      <FaqSection
        title="CRM FAQ"
        items={[
          {
            q: "Does this replace Bayut or Property Finder?",
            a: "No. Portals can still be part of how you get inventory visibility. Wekex installs an owned capture and follow-up layer so you’re not only living inside portal inboxes.",
          },
          {
            q: "Will agents still use WhatsApp?",
            a: "Yes — buyers already message there. We wire CTAs and capture so conversations start with ownership and notes, not a free-for-all group dump.",
          },
          {
            q: "Do you migrate years of old chats?",
            a: "Pilot focuses on a clean working path forward. Historical dump migrations are out of default Pilot scope unless agreed separately.",
          },
          {
            q: "Can we route by community or agent?",
            a: "Yes — we define routing rules on the fit call (duty desk, listing agent, or simple rotation) that match how your team already works.",
          },
          {
            q: "Is the inbox screenshot on this page a real client?",
            a: "No. Product visuals are sample UI layouts to show structure. We don’t invent case numbers or fake client metrics.",
          },
          {
            q: "What’s in Pilot vs Full Install?",
            a: "Pilot proves capture, routing, and first-response with 1–2 pages and one channel. Full Install hardens CRM handoff, optimization, and agent response checklists.",
          },
        ]}
      />

      <AiDfySection {...PROPERTY_AI.crm} />

      <CtaBand
        title="Want this inbox live in weeks?"
        body="Pilot includes lead-flow audit, listing pages, capture, and one channel — CRM handoff included."
        note="Brokerages own Trakheesi / ad permits. We build the enquiry system."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Start with Pilot"
        secondaryHref="/property/pricing"
        secondaryLabel="Pricing"
      />
    </>
  );
}
