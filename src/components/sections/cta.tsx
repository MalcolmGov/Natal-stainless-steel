"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { CtaButton } from "@/components/ui/cta-button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SECTION } from "@/lib/layout";
import { BRAND, BRANCHES, IMAGES, SERVICE_AREA } from "@/lib/constants";
import { cn } from "@/lib/utils";

const primaryBranch = BRANCHES.find((b) => "isPrimary" in b && b.isPrimary) ?? BRANCHES[0];

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-[calc(6rem+env(safe-area-inset-bottom))] lg:pb-0"
    >
      <div className="absolute inset-0">
        <Image
          src={IMAGES.cta}
          alt="Stainless steel warehouse and supply"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/40 to-dark/20" />
      </div>

      <div className={cn(SECTION.container, SECTION.pad, "relative")}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow mb-6 text-brand-gold">Contact</p>
          <h2 className="display-lg text-white">Get a quote or check stock.</h2>
          <p className="text-body mt-6 text-lg leading-relaxed">
            Speak to our trained sales team at your nearest branch — Durban, Gauteng, or Cape
            Town. We&apos;ll respond with pricing, availability, and delivery options.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <GlassPanel className="p-5 sm:p-8 lg:p-10">
              <p className="eyebrow mb-6">Branches</p>
              <ul className="space-y-6">
                {BRANCHES.map((branch) => (
                  <li key={branch.id}>
                    <p className="text-xs font-medium uppercase tracking-wider text-brand-blue-pale">
                      {branch.name}
                      {"note" in branch && branch.note ? ` · ${branch.note}` : ""}
                    </p>
                    <a
                      href={`tel:${branch.phoneHref}`}
                      className="mt-1 flex items-center gap-2 text-sm text-white transition-colors hover:text-brand-gold"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
                      {branch.phone}
                    </a>
                    {"address" in branch && branch.address && (
                      <p className="text-body-muted mt-2 flex items-start gap-2 text-sm">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
                        {branch.address}
                      </p>
                    )}
                  </li>
                ))}
                <li className="border-t border-white/[0.08] pt-5">
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-2 text-sm text-white transition-colors hover:text-brand-gold"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
                    {BRAND.email}
                  </a>
                </li>
              </ul>

              <div className="mt-10 border-t border-white/[0.06] pt-8">
                <p className="text-sm font-medium text-white">{SERVICE_AREA.headline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {SERVICE_AREA.areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-xs text-body-muted"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted">{SERVICE_AREA.note}</p>
              </div>

              <div className="mt-8">
                <CtaButton
                  href={`tel:${primaryBranch.phoneHref}`}
                  variant="primary"
                  size="md"
                  icon={Phone}
                  iconPosition="left"
                  className="w-full justify-center"
                >
                  Call {primaryBranch.name}
                </CtaButton>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <GlassPanel className="p-5 sm:p-8 lg:p-10">
              <p className="eyebrow mb-6">Enquiry form</p>
              <ContactForm />
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
