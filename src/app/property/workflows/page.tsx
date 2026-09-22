import type { Metadata } from "next";
import {
  PageHero,
  WorkflowSteps,
  FeatureMedia,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  StageJourney,
  FaqSection,
  WhyGrid,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { PROPERTY_BOOK } from "@/lib/niche-nav";
import { PROPERTY_AI } from "@/lib/ai-dfy";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "UAE Brokerage Workflows | Dubai & Abu Dhabi Property Teams",
  description:
    "Enquiry → WhatsApp → viewing → follow-up workflows for Dubai and Abu Dhabi brokerages. Speed-to-first-reply systems installed done-for-you.",
  path: "/property/workflows",
  keywords: [
    "Dubai real estate workflows",
    "Abu Dhabi brokerage follow-up",
    "UAE property viewing process",
    "WhatsApp lead routing Dubai",
  ],
});

export default function PropertyWorkflowsPage() {
  return (
    <>
      <PageHero
        label="Property · Workflows"
        title="Workflows brokers actually run"
        titleAccent="First reply wins the viewing."
        body="We map how your team works today, then install flows that keep enquiries moving — enquiry → WhatsApp → viewing → follow-up — without another spreadsheet."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property/integrations"
        secondaryLabel="Integrations"
        image="/assets/img/property/crm-pipeline.jpg"
        imageAlt="Deals kanban pipeline — sample brokerage lead flow UI"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Enquiry → WhatsApp",
              "Viewing booked",
              "Post-tour follow-up",
              "5–20 agent desks",
            ]}
          />
        </div>
      </section>

      <StageJourney
        label="Operating journey"
        title="Enquiry → WhatsApp → viewing → follow-up"
        body="Four stages we wire for Dubai and Abu Dhabi teams — practical desk motion, not sales-theatre automation."
        stages={[
          {
            t: "Enquiry lands",
            d: "Buyer hits your lander, ad, or WhatsApp CTA. A structured card appears with source and owner rules.",
            items: [
              "Form or WhatsApp capture",
              "Source / listing tag",
              "Owner or duty route",
              "Status: new",
            ],
          },
          {
            t: "WhatsApp conversation",
            d: "Agent replies in the channel buyers already use — with notes on the card so the thread isn’t trapped on one phone.",
            items: [
              "First-response visibility",
              "Desk notes on the lead",
              "Reassign without losing context",
              "Status: contacted",
            ],
          },
          {
            t: "Viewing set",
            d: "When interest is real, slot and community stay attached to the same enquiry.",
            items: [
              "Viewing time logged",
              "Agent on site named",
              "Buyer preferences noted",
              "Status: viewing",
            ],
          },
          {
            t: "Follow-up after the tour",
            d: "Open next steps surface so deals don’t die in personal chat archives after the viewing.",
            items: [
              "Post-viewing bump queue",
              "Next action visible",
              "Handoff notes for principals",
              "Status: follow-up",
            ],
          },
        ]}
      />

      <WorkflowSteps
        label="Desk flows"
        title="Day-to-day paths we typically install"
        body="Scoped on the fit call for how your 5–20 agent team already operates."
        steps={[
          {
            t: "Enquiry → route → first reply",
            d: "Lead lands, owner is clear, buyer hears back fast — before they message another brokerage.",
          },
          {
            t: "WhatsApp thread → viewing booked",
            d: "Conversation and slot stay attached to the same lead card.",
          },
          {
            t: "Missed reply → bump queue",
            d: "Open leads surface before they go cold overnight or over the weekend.",
          },
          {
            t: "Post-viewing follow-up",
            d: "Notes and next step so deals don’t die after the tour.",
          },
        ]}
      />

      <FeatureMedia
        label="System context · sample"
        title="Workflows sit on the same inbox — not a separate tool"
        body="Sample UI for how stages appear on the board. Illustrative layout only — not live client throughput numbers."
        image="/assets/img/property/ai-agent.jpg"
        imageAlt="AI agent for real estate — sample system context, illustrative"
        bullets={[
          "Stages your agents already understand",
          "Capture wired from listings and ads",
          "Optional weekly snapshot on retainer",
        ]}
      />

      <WhyGrid
        label="Design rules"
        title="Workflows that respect how UAE desks work"
        items={[
          {
            t: "Speed over ceremony",
            d: "First response and clear ownership beat elaborate automation nobody will maintain.",
          },
          {
            t: "WhatsApp-native reality",
            d: "Buyers message on WhatsApp — we design for that, not against it.",
          },
          {
            t: "Notes survive handoffs",
            d: "When agents rotate or leave, context stays on the card.",
          },
          {
            t: "No fake SLAs on the site",
            d: "We don’t invent “reply in 47 seconds” case studies. Your team sets response norms.",
          },
          {
            t: "Pilot proves one path",
            d: "Full Install hardens routing and checklists once the desk is using the board.",
          },
          {
            t: "Permits out of scope",
            d: "Trakheesi and ad permits stay with the brokerage. Workflows cover enquiry ops.",
          },
        ]}
      />

      <FaqSection
        title="Workflows FAQ"
        items={[
          {
            q: "Do you automate every message?",
            a: "No. We install clear stages, routing, and queues. Heavy auto-spam is out of scope — UAE buyers expect a real agent reply.",
          },
          {
            q: "Can workflows differ by community or agent?",
            a: "Yes. We match routing to how you already assign stock — listing agent, duty desk, or simple rotation.",
          },
          {
            q: "What’s in Pilot vs Full Install?",
            a: "Pilot proves one end-to-end path (capture → reply → viewing status). Full Install hardens routing, checklists, and optimization after go-live.",
          },
          {
            q: "Will this force agents off WhatsApp?",
            a: "No. WhatsApp stays the conversation surface; the workflow adds ownership, status, and follow-up visibility.",
          },
          {
            q: "Do you guarantee more viewings?",
            a: "No. We install the operating path. Viewings depend on stock, market, and how fast your team replies.",
          },
          {
            q: "Who is this for?",
            a: "Dubai and Abu Dhabi brokerages with roughly 5–20 agents that will actually run follow-up — not lead mills.",
          },
        ]}
      />

      <AiDfySection {...PROPERTY_AI.workflows} />

      <CtaBand
        title="Want these flows live?"
        body="Pilot proves one path; Full Install hardens routing and handover."
        note="Brokerages own Trakheesi / ad permits. We build the enquiry workflows."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property/fit"
        secondaryLabel="Who it's for"
      />
    </>
  );
}
