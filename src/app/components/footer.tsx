import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-white">
      <div className="site-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <img
              src="/assets/img/brand-mark.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-md object-contain"
            />
            <span className="font-display text-2xl font-bold tracking-tight text-ink">
              Wekex
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            Enquiry systems for clinics in NL, Australia, Canada & Nordics —
            and UAE brokerages in Dubai & Abu Dhabi. Online since 2016.
            Founder-led builds.
          </p>
        </div>
        <div>
          <p className="section-label !mb-4">Clinic</p>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li>
              <Link href="/clinic" className="hover:text-ink">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/clinic/crm" className="hover:text-ink">
                CRM
              </Link>
            </li>
            <li>
              <Link href="/clinic/pricing" className="hover:text-ink">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/clinic/fit" className="hover:text-ink">
                Fit
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="section-label !mb-4">Property</p>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li>
              <Link href="/property" className="hover:text-ink">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/property/crm" className="hover:text-ink">
                CRM
              </Link>
            </li>
            <li>
              <Link href="/property/pricing" className="hover:text-ink">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/property/fit" className="hover:text-ink">
                Fit
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="section-label !mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li>
              <a href="mailto:client@wekex.com" className="hover:text-ink">
                client@wekex.com
              </a>
            </li>
            <li>
              <a href="tel:+918484034341" className="hover:text-ink">
                +91 848 403 4341
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/71327414"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/#work" className="hover:text-ink">
                Selected work
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-shell border-t border-ink-line py-6 text-xs text-ink-muted/70">
        © {new Date().getFullYear()} Wekex Technologies. All rights reserved.
      </div>
    </footer>
  );
}
