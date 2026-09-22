import type { Metadata } from "next";
import {
  PageHero,
  FeatureMedia,
  ProblemSolution,
  CtaBand,
} from "@/app/components/niche/sections";
import {
  TrustChips,
  ProcessList,
  FaqSection,
  WhyGrid,
} from "@/app/components/niche/rich";
import AiDfySection from "@/app/components/niche/AiDfySection";
import { PROPERTY_BOOK } from "@/lib/niche-nav";
import { PROPERTY_AI } from "@/lib/ai-dfy";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "UAE Property Listing Enquiry Pages | Dubai & Abu Dhabi",
  description:
    "Owned listing and offer pages for UAE brokerages in Dubai and Abu Dhabi — capture enquiries on your domain, not only Bayut / Property Finder traffic.",
  path: "/property/listings",
  keywords: [
    "Dubai property listing pages",
    "Abu Dhabi real estate landing pages",
    "UAE brokerage website enquiries",
    "Bayut Property Finder owned traffic",
  ],
});

export default function PropertyListingsPage() {
  return (
    <>
      <PageHero
        label="Property · Listings"
        title="Listing pages you own"
        titleAccent="Enquiries that don’t rent forever."
        body={`Landing and offer pages for your Dubai and Abu Dhabi stock with clear Enquire / WhatsApp CTAs — so UAE buyers can act without another portal middleman. Fixed Pilot scope. You keep the pages.`}
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property/workflows"
        secondaryLabel="Workflows"
        image="/assets/img/property/mobile.jpg"
        imageAlt="Mobile listing app — sample UAE listing enquiry UI"
      />

      <section className="border-b border-ink-line bg-white py-8">
        <div className="site-shell">
          <TrustChips
            items={[
              "Owned landers",
              "WhatsApp + form CTAs",
              "1–2 pages in Pilot",
              "Dubai · Abu Dhabi stock",
            ]}
          />
        </div>
      </section>

      <ProblemSolution
        label="Why owned pages"
        title="Portal detail pages don’t build your brand equity"
        problemTitle="The usual setup"
        problemItems={[
          "Buyers only see your stock inside rented portal templates",
          "CTA sends interest into a portal inbox you don’t control",
          "Hard to run Meta/Google creatives to a page you own",
          "Brochures and PDFs that don’t capture structured enquiries",
          "No source tag when someone asks “where did this lead come from?”",
        ]}
        solutionTitle="What Wekex builds"
        solutionItems={[
          "Offer / listing pages on a path you own",
          "Clear Enquire and WhatsApp CTAs into your inbox",
          "UTM-ready landers when you run a Pilot channel",
          "Mobile-first layouts for how UAE buyers actually browse",
          "Copy and structure you approve before go-live",
        ]}
      />

      <FeatureMedia
        label="Offer pages · sample"
        title="Stock that converts on your domain"
        body="Premium listing layouts with enquiry capture wired into your inbox — not a PDF brochure dump. Sample UI structure only."
        image="/assets/img/property/landing.jpg"
        imageAlt="Homeluxe residential landing — sample listing enquiry layout"
        bullets={[
          "Clear CTA to WhatsApp or form",
          "Source tagging for ads and campaigns",
          "Mobile-first buyer experience",
          "Community, price, and next-step framing",
        ]}
      />

      <FeatureMedia
        label="Hero visual · sample"
        title="Atmosphere that matches UAE inventory"
        body="Strong property visuals and enquiry UI so the page feels like a product — not a generic template. Sample imagery for structure, not a fake case study."
        image="/assets/img/property/ops.jpg"
        imageAlt="Aurex mobile discover / browse — sample property marketing visual"
        reverse
        bullets={[
          "1–2 pages in Pilot",
          "More pages available in Full Install",
          "Copy you approve before go-live",
          "Wired to the same CRM capture path",
        ]}
      />

      <ProcessList
        label="How we ship listings"
        title="From inventory brief to live enquiry page"
        body="A fixed sequence so Pilot stays on the 14–21 day track."
        steps={[
          {
            t: "Stock & priority brief",
            d: "You pick 1–2 units or offers that deserve an owned lander — community, price band, and the CTA you want (WhatsApp vs form).",
          },
          {
            t: "Structure & copy draft",
            d: "We draft the page sections and enquiry path. You approve tone, claims, and what buyers should do next.",
          },
          {
            t: "Build & wire capture",
            d: "Page goes live with Enquire / WhatsApp CTAs feeding your inbox and source tags for the Pilot channel.",
          },
          {
            t: "QA & go-live",
            d: "Mobile check, CTA test, and agent notification path — then we hand over how to request more pages later.",
          },
        ]}
      />

      <WhyGrid
        label="Listing principles"
        title="Pages built to start conversations — not impress other agencies"
        items={[
          {
            t: "One job per page",
            d: "Get a serious buyer to enquire or WhatsApp — not a brochure museum of every amenity.",
          },
          {
            t: "Owned capture",
            d: "Interest lands in your system with a source tag, not only in a rented portal thread.",
          },
          {
            t: "Honest visuals",
            d: "We use strong property imagery and sample UI labels — never fake occupancy or invented deal counts.",
          },
          {
            t: "Pilot-sized scope",
            d: "1–2 pages prove the path. Full Install expands stock coverage once the desk is responding.",
          },
          {
            t: "Channel-ready",
            d: "Landers are ready for the one Meta/Google (or LinkedIn) channel included in Pilot.",
          },
          {
            t: "Permits stay yours",
            d: "Trakheesi and advertising permits remain with the brokerage. We build pages and enquiry wiring.",
          },
        ]}
      />

      <FaqSection
        title="Listings FAQ"
        items={[
          {
            q: "How many listing pages are in Pilot?",
            a: "Typically 1–2 listing or offer pages. Full Install can expand coverage once the capture path is proven.",
          },
          {
            q: "Do you replace our portal listings?",
            a: "No. Owned pages sit alongside portals. The point is a capture path you control when you run ads or share links directly.",
          },
          {
            q: "Who writes the copy?",
            a: "We draft; you approve. We don’t invent inventory claims, pricing, or permit status — that stays with your brokerage.",
          },
          {
            q: "Can pages go to WhatsApp only?",
            a: "Yes. Many UAE teams prefer WhatsApp CTAs. We can also use a short form — confirmed on the fit call.",
          },
          {
            q: "Are the screenshots real client results?",
            a: "No. Visuals are sample layouts to show structure. We don’t publish fake enquiry counts or revenue claims.",
          },
          {
            q: "Do you host and maintain forever?",
            a: "You own the build. Optional Retainer covers ongoing channel and creative help; hosting/domain details are scoped on the fit call.",
          },
        ]}
      />

      <AiDfySection {...PROPERTY_AI.listings} />

      <CtaBand
        title="Own the landing, own the lead"
        body="Pilot includes 1–2 listing/offer pages plus capture into your system."
        note="Brokerages own Trakheesi / ad permits. We build the enquiry pages and wiring."
        primaryHref={PROPERTY_BOOK}
        primaryLabel="Book fit call"
        secondaryHref="/property/pricing"
        secondaryLabel="Packages"
      />
    </>
  );
}
