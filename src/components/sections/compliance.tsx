"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SECTION } from "@/lib/layout";
import { CERTIFICATIONS, IMAGES } from "@/lib/constants";
import { NATAL_WIX } from "@/lib/natal-media";
import { cn } from "@/lib/utils";

export function Compliance() {
  return (
    <section id="accreditation" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.accreditation}
          alt="Quality and accreditation standards"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-dark/35" />
      </div>

      <div className={cn(SECTION.container, SECTION.pad, "relative")}>
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow mb-6">Accreditation</p>
            <h2 className="display-lg text-white">
              Quality you can measure.
              <br />
              <span className="text-white/75">Supply you can trust.</span>
            </h2>
            <p className="text-body mt-6 text-base leading-[1.85] sm:mt-8 sm:text-lg">
              As one of Africa&apos;s largest stainless steel suppliers, we ensure
              our products, prices, and delivery remain benchmarks of our company
              credo — with documentation to support your project requirements.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
            <motion.div
              className="sm:col-span-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassPanel className="overflow-hidden p-4 sm:p-6">
                <Image
                  src={NATAL_WIX.beeCertificate}
                  alt="Natal Stainless Steel BEE certificate 2026"
                  width={420}
                  height={596}
                  className="mx-auto h-auto w-full max-w-sm rounded-lg"
                />
              </GlassPanel>
            </motion.div>
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <GlassPanel className="group h-full p-5 transition-all duration-500 hover:border-brand-gold/20 sm:p-8 lg:p-10">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-gold">
                    {cert.code}
                  </p>
                  <h3 className="mt-3 text-lg font-light tracking-tight text-white sm:mt-4 sm:text-xl">
                    {cert.title}
                  </h3>
                  <p className="text-body-muted mt-2 text-sm leading-relaxed sm:mt-3">
                    {cert.description}
                  </p>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
