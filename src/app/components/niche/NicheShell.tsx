import Link from "next/link";
import NicheNav from "./NicheNav";
import type { NicheLink } from "@/lib/niche-nav";

export default function NicheShell({
  children,
  links,
  ctaHref,
  ctaLabel,
  brandLabel,
}: {
  children: React.ReactNode;
  links: NicheLink[];
  ctaHref: string;
  ctaLabel?: string;
  brandLabel: string;
}) {
  return (
    <div className="bg-paper text-ink">
      <NicheNav
        links={links}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        brandLabel={brandLabel}
      />
      <div className="pt-20 md:pt-24">{children}</div>
    </div>
  );
}

export function NicheBreadcrumb({ niche, page }: { niche: string; page?: string }) {
  return (
    <p className="mb-3 text-xs text-ink-muted">
      <Link href="/" className="hover:text-ink">
        Wekex
      </Link>
      <span className="mx-1.5">/</span>
      <span className={page ? "" : "text-ink"}>{niche}</span>
      {page && (
        <>
          <span className="mx-1.5">/</span>
          <span className="text-ink">{page}</span>
        </>
      )}
    </p>
  );
}
