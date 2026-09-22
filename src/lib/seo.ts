import type { Metadata } from "next";

export const SITE_URL = "https://wekex.com";
export const SITE_NAME = "Wekex";

/** Default share image — LinkedIn, Twitter/X, Facebook, iMessage, etc. */
export const OG_IMAGE = `${SITE_URL}/assets/img/og_image.png`;
/** Square share — Pinterest, some LinkedIn/profile contexts */
export const OG_SQUARE = `${SITE_URL}/assets/img/og_square.png`;

export const OG_IMAGE_ALT =
  "Wekex — clinic and UAE property enquiry systems";

/** Clinic focus markets — Netherlands (NL), Australia, Canada, Nordics */
export const CLINIC_MARKETS = {
  label: "NL · Australia · Canada · Nordics",
  phrase: "the Netherlands, Australia, Canada, and the Nordics",
  citiesHint: "Amsterdam, Sydney, Toronto, Stockholm, Oslo, Copenhagen",
  keywords: [
    "clinic patient enquiry system",
    "dental clinic CRM Netherlands",
    "physio booking system Australia",
    "dental marketing Canada",
    "clinic lead generation Nordics",
    "patient booking system NL",
    "done for you clinic CRM",
    "dental enquiry system",
  ],
} as const;

/** Property focus markets — UAE */
export const PROPERTY_MARKETS = {
  label: "Dubai · Abu Dhabi · UAE",
  phrase: "Dubai and Abu Dhabi brokerages across the UAE",
  keywords: [
    "UAE property CRM",
    "Dubai real estate lead management",
    "Abu Dhabi brokerage enquiry system",
    "Bayut Property Finder alternative CRM",
    "WhatsApp property leads Dubai",
    "UAE real estate lead inbox",
    "done for you property CRM Dubai",
  ],
} as const;

type PageSeoInput = {
  /** Page title without brand suffix — layout template appends "| Wekex" */
  title: string;
  description: string;
  path: string;
  keywords?: string | readonly string[];
  ogImage?: string;
  noIndex?: boolean;
  /** Use full title as-is (no "| Wekex" template). For homepage. */
  absoluteTitle?: boolean;
};

export function pageSeo({
  title,
  description,
  path,
  keywords,
  ogImage = OG_IMAGE,
  noIndex = false,
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  let keywordList: string | undefined;
  if (keywords == null) {
    keywordList = undefined;
  } else if (typeof keywords === "string") {
    keywordList = keywords;
  } else {
    keywordList = Array.from(keywords).join(", ");
  }
  const displayTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywordList,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: displayTitle,
      description,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          secureUrl: ogImage,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: OG_IMAGE_ALT,
        },
        {
          url: OG_SQUARE,
          secureUrl: OG_SQUARE,
          width: 1200,
          height: 1200,
          type: "image/png",
          alt: OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [
        {
          url: ogImage,
          alt: OG_IMAGE_ALT,
          width: 1200,
          height: 630,
        },
      ],
    },
    other: {
      "pinterest-rich-pin": "true",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wekex Technologies",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/img/logo.png`,
    image: [`${SITE_URL}/assets/img/og_image.png`, `${SITE_URL}/assets/img/og_square.png`],
    description:
      "Done-for-you client enquiry systems for clinics in the Netherlands, Australia, Canada, and the Nordics, and for UAE property brokerages — plus custom software.",
    foundingDate: "2016",
    areaServed: [
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Sweden" },
      { "@type": "Country", name: "Norway" },
      { "@type": "Country", name: "Denmark" },
      { "@type": "Country", name: "Finland" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-848-403-4341",
      contactType: "sales",
      email: "client@wekex.com",
      availableLanguage: ["English"],
    },
    sameAs: ["https://www.linkedin.com/company/71327414"],
  };
}

export function clinicServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Wekex Clinic Enquiry Systems",
    url: `${SITE_URL}/clinic`,
    provider: {
      "@type": "Organization",
      name: "Wekex Technologies",
      url: SITE_URL,
    },
    description:
      "Done-for-you patient enquiry systems for dental and physio clinics — CRM, online booking, workflows, and channel wiring. Fixed USD pricing. Live in 14–21 days.",
    areaServed: [
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Sweden" },
      { "@type": "Country", name: "Norway" },
      { "@type": "Country", name: "Denmark" },
      { "@type": "Country", name: "Finland" },
    ],
    serviceType: [
      "Clinic CRM",
      "Patient booking system",
      "Clinic lead generation",
      "Enquiry workflows",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "1200",
      name: "Clinic Pilot",
      description: "Enquiry audit, landing page, booking setup, one channel",
    },
  };
}

export function propertyServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Wekex UAE Property Enquiry Systems",
    url: `${SITE_URL}/property`,
    provider: {
      "@type": "Organization",
      name: "Wekex Technologies",
      url: SITE_URL,
    },
    description:
      "Done-for-you property enquiry systems for Dubai and Abu Dhabi brokerages — lead inbox, listing pages, WhatsApp capture, and workflows. Fixed USD pricing. Live in 14–21 days.",
    areaServed: [
      {
        "@type": "City",
        name: "Dubai",
        containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
      },
      {
        "@type": "City",
        name: "Abu Dhabi",
        containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
      },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    serviceType: [
      "Real estate CRM",
      "Property lead management",
      "Listing enquiry pages",
      "Brokerage workflows",
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "1500",
      name: "Property Pilot",
      description: "Lead-flow audit, listing pages, WhatsApp capture, one channel",
    },
  };
}

export function faqJsonLd(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}
