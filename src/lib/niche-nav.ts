export type NicheLink = { href: string; label: string };

export const CLINIC_NAV: NicheLink[] = [
  { href: "/clinic", label: "Overview" },
  { href: "/clinic/crm", label: "CRM" },
  { href: "/clinic/booking", label: "Booking" },
  { href: "/clinic/workflows", label: "Workflows" },
  { href: "/clinic/analytics", label: "Analytics" },
  { href: "/clinic/integrations", label: "Integrations" },
  { href: "/clinic/pricing", label: "Pricing" },
  { href: "/clinic/fit", label: "Fit" },
];

export const PROPERTY_NAV: NicheLink[] = [
  { href: "/property", label: "Overview" },
  { href: "/property/crm", label: "CRM" },
  { href: "/property/listings", label: "Listings" },
  { href: "/property/workflows", label: "Workflows" },
  { href: "/property/integrations", label: "Integrations" },
  { href: "/property/pricing", label: "Pricing" },
  { href: "/property/fit", label: "Fit" },
];

/** Opens BookFit dialog via BookFitProvider click interceptor */
export const CLINIC_BOOK = "#book-clinic";
export const PROPERTY_BOOK = "#book-property";

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const CLINIC_PRICING: PricingTier[] = [
  {
    name: "Pilot",
    price: "$1,200",
    period: "one-time",
    desc: "Prove the system works before a larger install.",
    features: ["Enquiry audit", "1 landing page", "Booking / enquiry setup", "1 channel setup"],
    cta: "Start with Pilot",
  },
  {
    name: "Full Install",
    price: "$2,500–3,500",
    desc: "Full system + 2 weeks of optimization after go-live.",
    features: ["Everything in Pilot", "Full build & QA", "2 weeks optimize", "Handover docs"],
    cta: "Discuss Install",
    featured: true,
  },
  {
    name: "Retainer",
    price: "$1,500–2,500",
    period: "/ month",
    desc: "Keep enquiries coming after install.",
    features: ["Channel management", "Creative refresh", "Weekly report", "Priority support"],
    cta: "Ask about retainer",
  },
];

export const PROPERTY_PRICING: PricingTier[] = [
  {
    name: "Pilot",
    price: "$1,500",
    period: "one-time",
    desc: "Prove owned enquiries before a larger install.",
    features: [
      "Lead-flow audit",
      "1–2 listing/offer pages",
      "WhatsApp / form capture",
      "1 channel setup",
    ],
    cta: "Start with Pilot",
  },
  {
    name: "Full Install",
    price: "$2,500–3,500",
    desc: "Full system + 2 weeks optimization after go-live.",
    features: [
      "Everything in Pilot",
      "CRM handoff notes",
      "2 weeks optimize",
      "Agent response checklist",
    ],
    cta: "Discuss Install",
    featured: true,
  },
  {
    name: "Retainer",
    price: "$1,500–2,500",
    period: "/ month",
    desc: "Keep the channel live with weekly reporting.",
    features: ["Channel management", "Creative refresh", "Weekly report", "Priority support"],
    cta: "Ask about retainer",
  },
];
