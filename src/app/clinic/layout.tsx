import type { Metadata } from "next";
import NicheShell from "@/app/components/niche/NicheShell";
import { CLINIC_BOOK, CLINIC_NAV } from "@/lib/niche-nav";
import { CLINIC_MARKETS, clinicServiceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  keywords: [...CLINIC_MARKETS.keywords],
};

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clinicServiceJsonLd()),
        }}
      />
      <NicheShell
        links={CLINIC_NAV}
        ctaHref={CLINIC_BOOK}
        ctaLabel="Book fit call"
        brandLabel="Clinic"
      >
        {children}
      </NicheShell>
    </>
  );
}
