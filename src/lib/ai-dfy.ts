import { CLINIC_BOOK, PROPERTY_BOOK } from "@/lib/niche-nav";

export type AiDfyCopy = {
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bookHref: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/** Clinic — one dedicated AI band per page */
export const CLINIC_AI: Record<string, AiDfyCopy> = {
  hub: {
    title: "We integrate AI where you want",
    body: "Done-for-you doesn’t mean an AI product bolted on. You pick the hooks — reply drafts, nudges, routing, patient apps — and we wire them into the enquiry system. Or skip AI entirely. Scoped on the fit call.",
    bullets: [
      "You choose which AI pieces matter for your desk",
      "Integrated into landing, board, booking, and WhatsApp — not a separate chatbot island",
      "Desk stays in control; no unsupervised “AI doctor”",
    ],
    image: "/assets/img/clinic/ai-clinic.jpg",
    imageAlt: "AI in clinic operations — illustrative concept",
    bookHref: CLINIC_BOOK,
    secondaryHref: "/clinic/pricing",
    secondaryLabel: "See packages",
  },
  crm: {
    title: "AI on the enquiry board — if you ask for it",
    body: "CRM stays new → contacted → booked → showed. Optional AI can draft first replies, flag cold cards, and suggest routing. Your desk still owns every send.",
    bullets: [
      "Reply drafts on open leads (WhatsApp / email)",
      "Cold-lead nudges when a card stalls",
      "Light treatment / urgency tags for routing",
      "Never auto-messages patients without your process",
    ],
    image: "/assets/img/clinic/ai-hospital.jpg",
    imageAlt: "AI desk assistant concept — illustrative",
    reverse: true,
    bookHref: CLINIC_BOOK,
    secondaryHref: "/clinic/workflows",
    secondaryLabel: "See workflows",
  },
  booking: {
    title: "AI around booking — optional, scoped",
    body: "Booking is calendar + showed status first. Want reminder drafts, no-show follow-ups, or a light patient app? We integrate those AI pieces only where you want.",
    bullets: [
      "Reminder / confirm wording the desk approves",
      "No-show follow-up suggestions after a missed slot",
      "Optional telehealth or patient-app hooks",
      "Core booking works fully without AI",
    ],
    image: "/assets/img/clinic/ai-telehealth.jpg",
    imageAlt: "Telehealth and booking AI concept — illustrative",
    bookHref: CLINIC_BOOK,
    secondaryHref: "/clinic/crm",
    secondaryLabel: "See CRM",
  },
  workflows: {
    title: "AI inside workflows — your choice of steps",
    body: "Operating flows stay human: enquiry → contact → book → visit. AI can sit on the steps you pick (nudges, drafts, routing) — never as a black-box that replaces the desk.",
    bullets: [
      "Pick which of the four flows get AI assists",
      "Missed-contact nudges and draft follow-ups",
      "Post-visit reminder wording — optional",
      "Rules first; AI second",
    ],
    image: "/assets/img/clinic/ai-smart-hospital.jpg",
    imageAlt: "Smart hospital AI workflow concept — illustrative",
    reverse: true,
    bookHref: CLINIC_BOOK,
    secondaryHref: "/clinic/integrations",
    secondaryLabel: "Integrations",
  },
  analytics: {
    title: "AI analytics — only if you want it",
    body: "Core analytics is source tags, funnel stages, and a weekly snapshot. Want AI on top — pattern hints, plain-language summaries, cold-lead flags? We integrate it where you ask.",
    bullets: [
      "Optional summaries of weak sources this week",
      "Nudge when booked→showed drops — you decide the action",
      "Never invented ROI or unsupervised clinical predictions",
      "Scoped on the fit call with Pilot / Install",
    ],
    image: "/assets/img/clinic/ai-clinic.jpg",
    imageAlt: "AI analytics and clinic ops concept — illustrative",
    reverse: true,
    bookHref: CLINIC_BOOK,
    secondaryHref: "/clinic/pricing",
    secondaryLabel: "Packages",
  },
  integrations: {
    title: "AI wired into the tools you already use",
    body: "We connect Meta/Google, WhatsApp, and calendar first. AI sits on those pipes only where you want — drafts, alerts, summaries — not a new vendor maze.",
    bullets: [
      "WhatsApp / email draft assists tied to capture",
      "Optional summary hooks for weekly channel notes",
      "You keep accounts, spend, and clinical systems",
      "Honest scope: we wire; you approve every AI surface",
    ],
    image: "/assets/img/clinic/ai-pharma.jpg",
    imageAlt: "AI assistant with cited sources — illustrative",
    bookHref: CLINIC_BOOK,
    secondaryHref: "/clinic/fit",
    secondaryLabel: "Who it's for",
  },
  pricing: {
    title: "AI is scoped in DFY — not a surprise SaaS line",
    body: "Pilot and Install prices cover the enquiry system. Optional AI hooks are agreed on the fit call — included or lightly extended, never an endless AI subscription story.",
    bullets: [
      "Tell us which AI pieces you want before we quote Install",
      "Skip AI entirely and still get a full Pilot",
      "Retainer can include AI-assisted weekly notes if useful",
      "No fake “AI credits” nickel-and-diming",
    ],
    image: "/assets/img/clinic/ai-personalize.jpg",
    imageAlt: "Personalized care AI concept — illustrative",
    reverse: true,
    bookHref: CLINIC_BOOK,
    secondaryHref: "/clinic",
    secondaryLabel: "← Clinic home",
  },
  fit: {
    title: "AI when it fits your clinic — not by default",
    body: "Good fit clinics want clearer enquiries and follow-up. AI is an option on top: helpful for busy desks, unnecessary for some. We say yes when scope is clear.",
    bullets: [
      "Dental / physio teams that will still own patient contact",
      "Owners who can decide which AI hooks are worth it",
      "Not a fit if you want unsupervised chatbot “patients”",
      "Not a fit if you need a full clinical AI diagnostic product",
    ],
    image: "/assets/img/clinic/ai-health-app.jpg",
    imageAlt: "Optional patient AI app concept — illustrative",
    bookHref: CLINIC_BOOK,
    secondaryHref: "/property",
    secondaryLabel: "Looking for Property?",
  },
};

/** Property — DFY AI with RE-specific visuals */
export const PROPERTY_AI: Record<string, AiDfyCopy> = {
  hub: {
    title: "We integrate AI where you want",
    body: "Brokerage DFY first: listings, inbox, channel. AI for first-reply drafts, lead qualification, or viewing booking assists is optional — you choose on the fit call.",
    bullets: [
      "Optional first-reply drafts for WhatsApp enquiries",
      "Qualify & schedule assists — agents still approve",
      "CRM logging / human handover when needed",
      "Skip AI entirely if your team is already fast",
    ],
    image: "/assets/img/property/ai-agent.jpg",
    imageAlt: "AI agent for real estate concept — illustrative",
    bookHref: PROPERTY_BOOK,
    secondaryHref: "/property/pricing",
    secondaryLabel: "See packages",
  },
  crm: {
    title: "AI on the lead inbox — optional",
    body: "Inbox and pipeline stay first. AI can draft first replies, flag hot leads, and nudge stalls — agents still win the viewing by responding.",
    bullets: [
      "Draft first replies in your tone",
      "Hot-lead / cold-lead flags on the board",
      "No unsupervised chatbot buyers",
      "Scoped in Pilot / Install only if you want it",
    ],
    image: "/assets/img/property/landing-crm.jpg",
    imageAlt: "AI-powered real estate CRM concept — illustrative",
    reverse: true,
    bookHref: PROPERTY_BOOK,
    secondaryHref: "/property/workflows",
    secondaryLabel: "Workflows",
  },
  listings: {
    title: "AI on listing pages — only if useful",
    body: "Owned listing pages convert with clear CTAs. Optional AI can summarize enquiries or draft FAQ answers — never fake inventory claims.",
    bullets: [
      "Optional enquiry summary into the inbox",
      "FAQ / reply drafts for common buyer questions",
      "Listings stay yours; AI is a helper layer",
      "Skip if you only need capture + WhatsApp",
    ],
    image: "/assets/img/property/mobile.jpg",
    imageAlt: "Property listing mobile app — sample UI",
    bookHref: PROPERTY_BOOK,
    secondaryHref: "/property/crm",
    secondaryLabel: "CRM",
  },
  workflows: {
    title: "AI on the steps you pick",
    body: "Enquiry → WhatsApp → viewing → follow-up stays the spine. AI assists only on the steps you approve — reply, qualify, schedule, CRM update.",
    bullets: [
      "Nudges when viewing follow-up stalls",
      "Draft bumps after a missed reply",
      "Optional schedule / availability assists",
      "Trakheesi / permits stay with you",
    ],
    image: "/assets/img/property/ai-agent.jpg",
    imageAlt: "Real estate AI agent workflow concept — illustrative",
    reverse: true,
    bookHref: PROPERTY_BOOK,
    secondaryHref: "/property/integrations",
    secondaryLabel: "Integrations",
  },
  integrations: {
    title: "AI on the wires you already have",
    body: "WhatsApp, Meta/Google, listing CTAs first. AI sits on those pipes only where you want — drafts, qualify, CRM log.",
    bullets: [
      "Draft assists tied to WhatsApp capture",
      "Optional CRM update from conversation",
      "You keep portals, permits, and ad accounts",
      "Honest DFY scope on the fit call",
    ],
    image: "/assets/img/property/ai-square-1.jpg",
    imageAlt: "Growth and analytics AI workspace concept — illustrative",
    bookHref: PROPERTY_BOOK,
    secondaryHref: "/property/fit",
    secondaryLabel: "Fit",
  },
  pricing: {
    title: "AI scoped in DFY pricing — not a surprise line",
    body: "Pilot $1,500 and Install cover the enquiry system. Optional AI is agreed up front — included or lightly extended.",
    bullets: [
      "Say which AI hooks you want before Install quote",
      "Full Pilot works with zero AI",
      "Retainer can include AI-assisted weekly notes",
      "No endless AI SaaS metering",
    ],
    image: "/assets/img/property/ai-hub.jpg",
    imageAlt: "Property AI mobile concept — illustrative",
    reverse: true,
    bookHref: PROPERTY_BOOK,
    secondaryHref: "/property",
    secondaryLabel: "← Property home",
  },
  fit: {
    title: "AI when your team will use it",
    body: "Good fit: 5–20 agents who reply fast. AI helps drafts and nudges if you want — it doesn’t replace agents who won’t follow up.",
    bullets: [
      "Teams that will approve AI drafts quickly",
      "Not a fit for “send 500 leads” buyers",
      "Not a fit for unsupervised AI sales bots",
      "Clear yes/no on AI scope in 15 minutes",
    ],
    image: "/assets/img/property/ai-square-2.jpg",
    imageAlt: "Real estate AI concept — illustrative",
    bookHref: PROPERTY_BOOK,
    secondaryHref: "/clinic",
    secondaryLabel: "Looking for Clinic?",
  },
};
