"use client";

import { motion } from "framer-motion";
import { SECTION } from "@/lib/layout";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function IntroStatement() {
  return (
    <section id="about" className="bg-dark">
      <div className={cn(SECTION.container, SECTION.pad)}>
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl font-light leading-[1.55] tracking-tight text-white sm:text-2xl lg:text-4xl lg:leading-[1.45]">
              Since 1992, quality and affordability have been our credo. In
              today&apos;s market, few offer the same high-level service and savings
              that Natal Stainless Steel delivers.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col justify-end gap-8 sm:gap-10 lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="border-t border-white/[0.06] pt-6 sm:pt-8">
                <p className="text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="text-body-muted mt-2 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
