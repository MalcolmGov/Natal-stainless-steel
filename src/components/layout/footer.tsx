import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Shield } from "lucide-react";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { CtaButton } from "@/components/ui/cta-button";
import { SECTION } from "@/lib/layout";
import {
  BRAND,
  BRANCHES,
  BUSINESS_HOURS,
  FOOTER_SERVICES,
  NAV_LINKS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const FOOTER_QUICK_LINKS = [...NAV_LINKS] as const;

const primaryBranch = BRANCHES.find((b) => "isPrimary" in b && b.isPrimary) ?? BRANCHES[0];

function FooterContactRow({
  icon: Icon,
  children,
  href,
}: {
  icon: typeof MapPin;
  children: ReactNode;
  href?: string;
}) {
  const content = (
    <>
      <span className="footer-contact-icon" aria-hidden>
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 text-sm leading-relaxed text-muted-light transition-colors group-hover:text-white">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <div>
        <Link href={href} className="group flex items-start gap-3 sm:items-center">
          {content}
        </Link>
      </div>
    );
  }

  return <div className="group flex items-start gap-3">{content}</div>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-surface relative overflow-hidden border-t border-white/[0.08] pb-[env(safe-area-inset-bottom)]">
      <div className="footer-top-accent" aria-hidden />

      <div className={cn(SECTION.container, "relative py-16 sm:py-20 lg:py-24")}>
        {/* CTA strip */}
        <div className="footer-cta-panel mb-14 flex flex-col gap-6 rounded-2xl p-6 sm:mb-16 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8 lg:mb-20">
          <div className="max-w-xl">
            <p className="eyebrow mb-3 text-brand-gold">Get in touch</p>
            <p className="text-lg font-medium tracking-tight text-white sm:text-xl">
              Need a quote or product availability?
            </p>
            <p className="text-body-muted mt-2 text-sm leading-relaxed">
              Call your nearest branch — Durban, Gauteng, or Cape Town.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:shrink-0 sm:items-end">
            <a
              href={`tel:${primaryBranch.phoneHref}`}
              className="text-2xl font-light tracking-tight text-white transition-colors hover:text-brand-gold sm:text-3xl"
            >
              {primaryBranch.phone}
            </a>
            <CtaButton href="#contact" variant="primary" size="sm" icon={ArrowUpRight}>
              Request a quote
            </CtaButton>
          </div>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <BrandLockup size="footer" className="inline-flex" />
            <p className="text-body mt-6 max-w-sm text-sm leading-relaxed">
              {BRAND.tagline}. Supplying stainless steel piping, fittings, flanges,
              valves, and structural products across South Africa since 1992.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-light">
                <Shield className="h-3 w-3 text-brand-blue-light" aria-hidden />
                Since 1992
              </span>
              <span className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-light">
                Large stock
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-brand-blue-pale">Navigate</p>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-brand-blue-pale">Services</p>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <Link href="#products" className="footer-link text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-brand-blue-pale">Contact</p>
            <ul className="space-y-4">
              {BRANCHES.map((branch) => (
                <li key={branch.id} className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-blue-pale">
                    {branch.name}
                  </p>
                  <FooterContactRow icon={Phone} href={`tel:${branch.phoneHref}`}>
                    {branch.phone}
                  </FooterContactRow>
                  {"address" in branch && branch.address && (
                    <FooterContactRow icon={MapPin}>{branch.address}</FooterContactRow>
                  )}
                </li>
              ))}
              <li>
                <FooterContactRow icon={Mail} href={`mailto:${BRAND.email}`}>
                  {BRAND.email}
                </FooterContactRow>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="eyebrow mb-5 text-brand-blue-pale">Hours</p>
            <ul className="space-y-2">
              {BUSINESS_HOURS.map((item) => (
                <li key={item.day} className="flex justify-between gap-3 text-sm">
                  <span className="shrink-0 text-muted">{item.day}</span>
                  <span className="min-w-0 text-right text-muted-light">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-divider mt-12 sm:mt-16 lg:mt-20" aria-hidden />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            &copy; {year} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-light">
            Head office · {BRAND.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
