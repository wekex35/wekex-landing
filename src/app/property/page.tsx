import type { Metadata } from "next";
import {
  PageHero,
  JourneyTimeline,
  ModuleGrid,
  ProblemSolution,
  FeatureMedia,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  AudienceGrid,
  FaqSection,
  DeepLinkGrid,
  WhyGrid,
  StageJourney,
  ShowcaseGrid,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { PROPERTY_BOOK } from "@/lib/niche-nav";
import { PROPERTY_AI } from "@/lib/ai-dfy";
import { PROPERTY_MARKETS, faqJsonLd, pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "UAE Property Enquiry Systems for Dubai & Abu Dhabi Brokerages",
  description:
    "Done-for-you property enquiry systems for Dubai and Abu Dhabi brokerages. Lead inbox, owned listing pages, WhatsApp capture, and workflows — beyond Bayut & Property Finder. Pilot from $1,500.",
  path: "/property",
  keywords: PROPERTY_MARKETS.keywords,
});

const PROPERTY_FAQS = [
  {
    q: "Is this a SaaS subscription?",
    a: "No. Wekex sells done-for-you installs: Pilot, Full Install, and optional Retainer. You own the listing pages and enquiry system we build.",
  },
  {
    q: "Where does AI fit?",
    a: "DFY means we integrate AI where you want — reply drafts, nudges, or none. Agreed on the fit call. Agents stay in control; no unsupervised chatbot pretending to be your brokerage.",
  },
  {
    q: "How long until we’re live?",
    a: "Most Property Pilots go live in 14–21 days after scope is locked and assets (listings, brand, WhatsApp number) are provided.",
  },
  {
    q: "What’s included in the $1,500 Pilot?",
    a: "Lead-flow audit, 1–2 listing/offer pages, WhatsApp/form capture, and one acquisition channel setup — with CRM handoff notes.",
  },
  {
    q: "Do you guarantee more deals or revenue?",
    a: "No. We install a capture and follow-up system. Outcomes depend on your stock, market, spend, and how fast agents reply.",
  },
  {
    q: "Who holds Trakheesi / ad permits?",
    a: "Your brokerage. Wekex builds the enquiry system and channel wiring — we do not hold or replace your advertising / listing permits.",
  },
  {
    q: "Who is a good fit?",
    a: "Dubai or Abu Dhabi brokerages with roughly 5–20 agents that can approve a Pilot this month and will own first response.",
  },
];

export default function PropertyHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(PROPERTY_FAQS)),
        }}
      />
      <PageHero
        label={`Property · ${PROPERTY_MARKETS.label}`}
        title="Own your property enquiries"
        titleAccent="Not just portal leads."
        body="Wekex installs a done-for-you brokerage system for Dubai and Abu Dhabi teams: listing pages, WhatsApp/CRM capture, and one acquisition channel — so the first agent to respond is yours. Fixed USD scope. Live in 14–21 days. You own the build."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book 15-min fit call"
        secondaryHref="/property/crm"
        secondaryLabel="Explore CRM"
        image="/assets/img/property/dashboard.webp"
        imageAlt="UAE property lead CRM dashboard for Dubai and Abu Dhabi brokerages"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Founder-led builds",
              "Fixed Pilot $1,500",
              "Live in 14–21 days",
              "2 slots / month",
              "5–20 agent teams",
              "You own the system",
            ]}
          />
        </div>
      </section>

      <JourneyTimeline
        label="Buyer journey"
        title="Built for how Dubai and Abu Dhabi buyers actually message."
        steps={[
          {
            t: "Enquiry in",
            d: "Listing page, ads, or WhatsApp land on one inbox with source tags.",
          },
          {
            t: "Routed",
            d: "Right agent owns first response — not a shared group chat free-for-all.",
          },
          {
            t: "First reply",
            d: "Speed wins the viewing. Notes stay on the lead, not in personal phones.",
          },
          {
            t: "Viewing set",
            d: "Slot, community, and buyer context logged against the same card.",
          },
          {
            t: "Follow-up",
            d: "Open deals surface after the tour — no lead lost in chat chaos.",
          },
        ]}
        stats={[
          { v: "14–21", l: "Days to live system" },
          { v: "2", l: "Pilot slots / month" },
          { v: "$1,500", l: "Pilot one-time" },
        ]}
      />

      <ProblemSolution
        label="Why owned systems"
        title="Portals alone don’t run your brokerage."
        problemTitle="What's the problem"
        problemItems={[
          "Leads scattered across WhatsApp, portals, and personal phones",
          "No clear owner for first response when buyers message after hours",
          "Viewings set in chats that vanish when agents leave",
          "Marketing spend with no source clarity on what got a reply",
          "Teams guessing which listing or channel actually drove viewings",
        ]}
        solutionTitle="What Wekex installs"
        solutionItems={[
          "Central inbox with agent routing and first-response visibility",
          "Owned listing / offer pages with Enquire and WhatsApp CTAs",
          "Stages from new → contacted → viewing → follow-up",
          "One acquisition channel wired into the same capture path",
          "Notes and source tags that survive phone handoffs",
        ]}
      />

      <ModuleGrid
        label="Core modules"
        title="Modules built for how UAE brokerages actually run"
        body="Proptech-style product depth — delivered as a fixed-scope install for 5–20 agent teams, not endless SaaS onboarding."
        modules={[
          {
            t: "Lead inbox",
            items: [
              "WhatsApp-style threads",
              "Agent routing & ownership",
              "Status & desk notes",
              "First-response focus",
            ],
          },
          {
            t: "Listing pages",
            items: [
              "Owned enquiry landers",
              "Stock / offer pages",
              "CTA to WhatsApp or form",
              "Source tagging",
            ],
          },
          {
            t: "Acquisition",
            items: [
              "Meta / Google channel",
              "Landing creative",
              "UTM clarity",
              "Weekly snapshot",
            ],
          },
          {
            t: "Pipeline",
            items: [
              "New → contacted → viewing",
              "Follow-up queue",
              "Handover notes",
              "No spreadsheet chaos",
            ],
          },
        ]}
      />

      <StageJourney
        label="Streamline every stage"
        title="From pre-sales interest to post-viewing follow-up"
        body="One operating system across the stages brokers already run — without inventing vanity conversion claims."
        stages={[
          {
            t: "Pre-sales & capture",
            d: "Buyers hit your owned pages or ads and leave a structured enquiry — not a screenshot in a group chat.",
            items: [
              "Listing / offer landers",
              "Form + WhatsApp CTAs",
              "Source / UTM tags",
              "One Pilot channel wired",
            ],
          },
          {
            t: "Listings & stock",
            d: "Stock you want to push sits on pages you own, with enquiry capture into the same inbox.",
            items: [
              "1–2 pages in Pilot",
              "Mobile-first buyer UX",
              "Clear community / price framing",
              "Copy you approve before go-live",
            ],
          },
          {
            t: "Viewing coordination",
            d: "Once interest is real, viewing slots and context stay attached to the lead card.",
            items: [
              "Owner for the viewing",
              "Slot + notes on the card",
              "Handoff without rewriting history",
              "Status: viewing set",
            ],
          },
          {
            t: "Follow-up & close loop",
            d: "After the tour, open next steps surface so deals don’t die in personal chat archives.",
            items: [
              "Post-viewing bump queue",
              "Next-action visibility",
              "Notes for the next agent",
              "Optional weekly snapshot",
            ],
          },
        ]}
      />

      <FeatureMedia
        label="Product UI · sample"
        title="One inbox for brokerage enquiries — not five WhatsApp groups"
        body="Pipeline statuses match brokerage reality: new, contacted, viewing, follow-up. Sample layout below — not live client case numbers."
        image="/assets/img/property/crm-pipeline.webp"
        imageAlt="Deals kanban pipeline — sample property CRM UI"
        bullets={[
          "First-response visibility for agents",
          "Source tags (listing, ads, WhatsApp, portal)",
          "Clear next action on every open lead",
        ]}
      />

      <FeatureMedia
        label="Listings · sample"
        title="Offer pages that send buyers into your system"
        body="Owned listing layouts with Enquire / WhatsApp CTAs — so interest doesn’t only live behind portal rent. Sample UI structure only."
        image="/assets/img/property/mobile.webp"
        imageAlt="Mobile listing app — sample property enquiry UI"
        reverse
        bullets={[
          "Mobile-first buyer experience",
          "CTA wired into inbox capture",
          "UTM clarity when you run ads",
        ]}
      />

      <ShowcaseGrid
        label="Showcase"
        title="What the Property system looks like"
        body="CRM dashboards, deals pipeline, mobile listings, and buyer browse — sample product UIs, not live client screens."
        note="Illustrative mockups for scope. Your build is scoped on the fit call."
        items={[
          {
            src: "/assets/img/property/dashboard.webp",
            alt: "Homie CRM dashboard",
            t: "Desk dashboard",
            d: "Brokerage inbox and ops in one view.",
            w: 1000,
            h: 750,
          },
          {
            src: "/assets/img/property/crm-pipeline.webp",
            alt: "Deals kanban pipeline",
            t: "Deals pipeline",
            d: "New → contacted → viewing → follow-up.",
            w: 1200,
            h: 900,
          },
          {
            src: "/assets/img/property/dashboard-alt.webp",
            alt: "Verve brokerage dashboard",
            t: "Brokerage ops",
            d: "Alternate desk view for multi-agent teams.",
            w: 1200,
            h: 900,
          },
          {
            src: "/assets/img/property/mobile.webp",
            alt: "Mobile listing app on two phones",
            t: "Mobile listings",
            d: "Buyers browse and enquire on the phone.",
            w: 1179,
            h: 1171,
          },
          {
            src: "/assets/img/property/ops.webp",
            alt: "Aurex mobile discover and browse",
            t: "Discover / browse",
            d: "Stock discovery on mobile for field agents.",
            w: 736,
            h: 552,
          },
          {
            src: "/assets/img/property/landing-crm.webp",
            alt: "AI-powered real estate CRM marketing page",
            t: "AI CRM landing",
            d: "Marketing page for an AI-assisted RE CRM.",
            w: 736,
            h: 1104,
          },
        ]}
      />

      <ShowcaseGrid
        label="Landing demos"
        title="Property landing pages we can ship"
        body="Full-page enquiry landers — residential, commercial, and stock offer layouts. Your Pilot scopes one clear page wired to the inbox."
        note="Sample marketing layouts only — not live client sites. Branding on mocks is illustrative."
        items={[
          {
            src: "/assets/img/property/landing.webp",
            alt: "Homeluxe residential agency landing",
            t: "Residential agency",
            d: "Full landing with enquire / WhatsApp CTAs.",
            w: 736,
            h: 1104,
          },
          {
            src: "/assets/img/property/landing-commercial.webp",
            alt: "Commercial property landing",
            t: "Commercial",
            d: "Tall commercial offer page for office / retail stock.",
            w: 736,
            h: 1472,
          },
          {
            src: "/assets/img/property/landing-1.webp",
            alt: "Property landing demo 1",
            t: "Offer lander",
            d: "Hero + stock framing + enquiry CTA.",
            w: 736,
            h: 1104,
          },
          {
            src: "/assets/img/property/landing-2.webp",
            alt: "Property landing demo 2",
            t: "Community push",
            d: "Community-led stock page for hot inventory.",
            w: 736,
            h: 1307,
          },
          {
            src: "/assets/img/property/landing-3.webp",
            alt: "Property landing demo 3",
            t: "Listing showcase",
            d: "Unit-first layout with clear next step.",
            w: 736,
            h: 1075,
          },
          {
            src: "/assets/img/property/landing-4.webp",
            alt: "Property landing demo 4",
            t: "Developer-style",
            d: "Project / off-plan style enquiry page.",
            w: 736,
            h: 1075,
          },
          {
            src: "/assets/img/property/landing-5.webp",
            alt: "Property landing demo 5",
            t: "Boutique agency",
            d: "Premium residential capture page.",
            w: 736,
            h: 1075,
          },
          {
            src: "/assets/img/property/landing-6.webp",
            alt: "Property landing demo 6",
            t: "Stock campaign",
            d: "Campaign lander ready for Meta / Google.",
            w: 736,
            h: 1104,
          },
          {
            src: "/assets/img/property/landing-tall.webp",
            alt: "Tall property landing demo",
            t: "Long-scroll lander",
            d: "Full story + amenities + enquire path.",
            w: 1200,
            h: 2133,
          },
        ]}
      />

      <WhyGrid
        label="Why Wekex"
        title="Product depth. DFY delivery. No SaaS lock-in."
        items={[
          {
            t: "Journey-first design",
            d: "Stages map to how buyers move — enquiry, reply, viewing, follow-up — not generic B2B opportunity stages.",
          },
          {
            t: "Fixed USD packages",
            d: "Pilot $1,500 · Install $2,500–3,500 · optional Retainer $1,500–2,500/mo. Clear scope on the fit call.",
          },
          {
            t: "Live in weeks",
            d: "14–21 days to a working system. Two founder-led Pilot slots per month.",
          },
          {
            t: "You own the build",
            d: "No endless platform rent to keep your listing pages and inbox alive.",
          },
          {
            t: "Honest permits stance",
            d: "Brokerages own Trakheesi / advertising permits and portal subscriptions. We build the enquiry system.",
          },
          {
            t: "UAE-focused fit",
            d: "Dubai and Abu Dhabi teams of roughly 5–20 agents who will actually reply fast.",
          },
        ]}
      />

      <AudienceGrid
        label="Best suited for"
        title="Brokerages ready to own follow-up"
        body="We say yes to a small number of Pilots so delivery stays founder-led."
        audiences={[
          {
            t: "Dubai brokerages",
            d: "Teams tired of portal-only capture and WhatsApp group chaos on hot listings.",
          },
          {
            t: "Abu Dhabi teams",
            d: "Want owned landers and a clear first-response path for serious buyers.",
          },
          {
            t: "5–20 agent desks",
            d: "Big enough to need routing — small enough that founder-led install still fits.",
          },
          {
            t: "Ops-ready principals",
            d: "Can approve a Pilot this month and have agents who will reply within the hour.",
          },
        ]}
      />

      <DeepLinkGrid
        label="Explore the Property site"
        title="Every module has its own page — go as deep as you need"
        links={[
          {
            href: "/property/crm",
            t: "CRM",
            d: "Inbox, routing, and first-response visibility.",
          },
          {
            href: "/property/listings",
            t: "Listings",
            d: "Owned offer pages for your stock.",
          },
          {
            href: "/property/workflows",
            t: "Workflows",
            d: "Enquiry → WhatsApp → viewing → follow-up.",
          },
          {
            href: "/property/integrations",
            t: "Integrations",
            d: "WhatsApp, Meta/Google — permits stay yours.",
          },
          {
            href: "/property/pricing",
            t: "Pricing",
            d: "Pilot · Full Install · Retainer in USD.",
          },
          {
            href: "/property/fit",
            t: "Fit",
            d: "Who we say yes to — and who we don’t.",
          },
        ]}
      />

      <FaqSection title="Property FAQ" items={PROPERTY_FAQS} />

      <AiDfySection {...PROPERTY_AI.hub} />

      <ShowcaseGrid
        label="AI options"
        title="Concept directions — you pick what to integrate"
        body="Illustrative inspiration only. DFY means we build the pieces you approve into your Pilot / Install — not every futuristic panel on this wall."
        note="Sample concepts for scoping. Not live product claims or unsupervised chatbot agents."
        items={[
          {
            src: "/assets/img/property/ai-agent.webp",
            alt: "AI agent for real estate concept",
            t: "AI agent",
            d: "Reply drafts and nudges — agents stay in control.",
            w: 735,
            h: 490,
          },
          {
            src: "/assets/img/property/ai-square-1.webp",
            alt: "AI property concept square 1",
            t: "Desk assist",
            d: "Tasks and follow-up help beside the inbox.",
            w: 736,
            h: 736,
          },
          {
            src: "/assets/img/property/ai-square-2.webp",
            alt: "AI property concept square 2",
            t: "Buyer assist",
            d: "Optional buyer-facing AI — only if you ask.",
            w: 736,
            h: 736,
          },
          {
            src: "/assets/img/property/ai-hub.webp",
            alt: "AI property hub concept",
            t: "System vision",
            d: "How AI can sit beside the enquiry stack.",
            w: 1200,
            h: 1200,
          },
          {
            src: "/assets/img/property/landing-crm.webp",
            alt: "AI-powered real estate CRM landing",
            t: "AI CRM landing",
            d: "Marketing framing for an AI-assisted RE CRM.",
            w: 736,
            h: 1104,
          },
        ]}
      />

      <CtaBand
        title="See how Wekex fits your brokerage"
        body="15-minute fit call. We reply within 24 hours with a one-page scope and a clear yes/no."
        note="Brokerages own Trakheesi / ad permits. We build the enquiry system. When both monthly slots are taken, the next start moves 3–4 weeks out."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Email to book"
        secondaryHref="/property/pricing"
        secondaryLabel="See packages"
      />
    </>
  );
}
