import type { Metadata } from "next";
import {
  PageHero,
  IntegrationGrid,
  FeatureMedia,
  ProblemSolution,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  FaqSection,
  WhyGrid,
  CapabilityBlocks,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { PROPERTY_BOOK } from "@/lib/niche-nav";
import { PROPERTY_AI } from "@/lib/ai-dfy";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "UAE Property Integrations | WhatsApp, Meta, Google",
  description:
    "WhatsApp, Meta/Google, and capture wiring for Dubai and Abu Dhabi brokerages. Trakheesi and ad permits stay with you — we wire the enquiry path.",
  path: "/property/integrations",
  keywords: [
    "Dubai property WhatsApp integration",
    "UAE real estate Meta ads leads",
    "Abu Dhabi Google Ads property",
    "Trakheesi compliant lead capture",
  ],
});

export default function PropertyIntegrationsPage() {
  return (
    <>
      <PageHero
        label="Property · Integrations"
        title="Connect how buyers already reach you"
        titleAccent="Honest scope — no fake portal magic."
        body="We wire WhatsApp capture, one Meta/Google or LinkedIn channel, and listing CTAs. Portal accounts and UAE permits stay yours."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property/pricing"
        secondaryLabel="Pricing"
        image="/assets/img/property/dashboard-alt.jpg"
        imageAlt="Verve brokerage dashboard — sample ops UI"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "WhatsApp CTAs",
              "Meta / Google (one Pilot channel)",
              "You own Trakheesi / permits",
              "Portals stay yours",
            ]}
          />
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="site-shell">
          <p className="section-label">Permits & compliance</p>
          <h2 className="display-lg max-w-3xl">
            Brokerages own Trakheesi and advertising permits
          </h2>
          <p className="mt-5 max-w-2xl body-lg">
            Wekex builds the enquiry system — listing pages, inbox capture, and
            channel wiring. We do not hold, renew, or replace your Trakheesi,
            advertising, or portal permits. Your brokerage remains responsible
            for UAE compliance on ads and listings.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Trakheesi / listing permits → your brokerage",
              "Ad account & spend → you keep ownership",
              "Portal subscriptions → you manage renewals",
              "Enquiry pages + inbox → what Wekex installs",
            ].map((item) => (
              <li
                key={item}
                className="rounded-3xl border border-ink-line bg-white px-6 py-5 text-sm text-ink-muted"
              >
                <span className="text-signal">·</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProblemSolution
        label="Integration reality"
        title="We wire what you use — we don’t pretend to be every vendor"
        problemTitle="Common frustration"
        problemItems={[
          "Agencies promise “full portal API sync” that never ships",
          "WhatsApp lives only on personal phones with no desk visibility",
          "Ads point at portal links you don’t control",
          "Nobody owns UTM hygiene when creatives change weekly",
          "Compliance and permits get blurred into the vendor pitch",
        ]}
        solutionTitle="What Wekex actually wires"
        solutionItems={[
          "WhatsApp enquiry CTAs into your capture path",
          "One Meta, Google, or LinkedIn channel in Pilot",
          "Owned landers as the destination when it fits",
          "Source tags so spend decisions aren’t guesswork",
          "Clear line: permits and portals stay with you",
        ]}
      />

      <IntegrationGrid
        label="Typical wiring"
        title="What we commonly connect"
        body="Confirmed on the fit call for your brokerage — stack varies by how you already run ads and messaging."
        groups={[
          {
            t: "Messaging",
            items: [
              "WhatsApp enquiry CTAs",
              "Form → inbox capture",
              "Agent notifications",
            ],
          },
          {
            t: "Acquisition",
            items: ["Meta ads", "Google Ads", "LinkedIn (when it fits)"],
            note: "Pilot includes one channel setup. You keep ad accounts and spend.",
          },
          {
            t: "Listings",
            items: ["Owned offer pages", "UTM / source tags", "Mobile CTAs"],
          },
        ]}
        disclaimer="We build the enquiry system. Brokerages own Trakheesi / advertising permits and portal subscriptions."
      />

      <CapabilityBlocks
        label="Channel depth"
        title="WhatsApp · Meta · Google — scoped clearly"
        body="Pilot proves one path. Retainer keeps creatives and reporting alive if you want ongoing help."
        blocks={[
          {
            t: "WhatsApp",
            d: "The default buyer channel in UAE. We make CTAs and ownership clear — not a bot that pretends to be an agent.",
            items: [
              "Enquire / WhatsApp buttons on landers",
              "Capture into the brokerage inbox",
              "Notes so handoffs don’t lose context",
              "No claim that we replace your Business API setup unless scoped",
            ],
          },
          {
            t: "Meta & Google",
            d: "One paid or organic channel in Pilot — lander, tracking, and creative framing you approve.",
            items: [
              "Landing destination you own when appropriate",
              "UTM / source clarity",
              "Creative refresh available on Retainer",
              "You approve claims and inventory messaging",
            ],
          },
        ]}
      />

      <FeatureMedia
        label="Stack · sample"
        title="A clear system diagram — not a vendor logo wall"
        body="Sample stack visual for how capture, inbox, and channel fit together. Illustrative only."
        image="/assets/img/property/ops.jpg"
        imageAlt="Aurex mobile discover / browse — sample stack visual"
        bullets={[
          "Listings → capture → inbox",
          "One Pilot channel wired",
          "Permits and portals outside our install",
        ]}
      />

      <WhyGrid
        label="Honest boundaries"
        title="What we won’t oversell"
        items={[
          {
            t: "No fake portal APIs",
            d: "If a deep portal sync isn’t in scope, we say so on the fit call.",
          },
          {
            t: "No permit holding",
            d: "Trakheesi and ad permits stay with your brokerage — always.",
          },
          {
            t: "No invented ROI",
            d: "We don’t publish fake 3x sales or revenue percentage claims.",
          },
          {
            t: "You keep accounts",
            d: "Ad accounts, WhatsApp numbers, and domains remain yours.",
          },
          {
            t: "Fixed Pilot channel",
            d: "One channel in Pilot keeps delivery focused and founder-led.",
          },
          {
            t: "Retainer is optional",
            d: "Ongoing channel management only if you want it after Install.",
          },
        ]}
      />

      <FaqSection
        title="Integrations FAQ"
        items={[
          {
            q: "Do you hold Trakheesi or advertising permits?",
            a: "No. Brokerages own Trakheesi / advertising permits and portal subscriptions. Wekex builds the enquiry system and channel wiring only.",
          },
          {
            q: "Which ad platforms are in Pilot?",
            a: "Typically one of Meta, Google, or LinkedIn — chosen on the fit call based on where your buyers actually come from.",
          },
          {
            q: "Do you sync Bayut / Property Finder automatically?",
            a: "Default Pilot does not include full portal API sync. Portals can still be part of your mix; we focus on owned capture and follow-up.",
          },
          {
            q: "Who pays for ads?",
            a: "You do. We help set up and wire the channel; media spend stays on your accounts.",
          },
          {
            q: "Can you connect an existing CRM?",
            a: "Sometimes — scoped on the fit call. Pilot is designed as a working enquiry path; deep CRM migrations may be Install or custom.",
          },
          {
            q: "What’s out of scope?",
            a: "Holding permits, inventing inventory claims, unlimited creative without Retainer, and promising deal volume guarantees.",
          },
        ]}
      />

      <AiDfySection {...PROPERTY_AI.integrations} />

      <CtaBand
        title="Bring your current lead sources"
        body="WhatsApp groups, portals, ads — we’ll say what’s in Pilot vs Install."
        note="Brokerages own Trakheesi / ad permits. We build the enquiry system."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property"
        secondaryLabel="Property overview"
      />
    </>
  );
}
