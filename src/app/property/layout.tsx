import type { Metadata } from "next";
import NicheShell from "@/app/components/niche/NicheShell";
import { PROPERTY_BOOK, PROPERTY_NAV } from "@/lib/niche-nav";
import { PROPERTY_MARKETS, propertyServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  keywords: [...PROPERTY_MARKETS.keywords],
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(propertyServiceJsonLd()),
        }}
      />
      <NicheShell
        links={PROPERTY_NAV}
        ctaHref={PROPERTY_BOOK}
        ctaLabel="Book fit call"
        brandLabel="Property"
      >
        {children}
      </NicheShell>
    </>
  );
}
