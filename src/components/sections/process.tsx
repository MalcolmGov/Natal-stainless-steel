"use client";

import { motion } from "framer-motion";
import { SECTION } from "@/lib/layout";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section className="border-t border-white/[0.04]">
      <div className={cn(SECTION.container, SECTION.pad)}>
        <motion.div
          className="mb-12 max-w-xl sm:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-6">Our Process</p>
          <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-4xl">
            From enquiry to delivery — a straightforward supply process.
          </h2>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="mb-6 flex items-center gap-4 sm:mb-8">
                <span className="text-[13px] font-medium tracking-[0.15em] text-brand-gold">
                  {step.step}
                </span>
                <div className="h-px flex-1 bg-white/[0.06] transition-colors group-hover:bg-brand-gold/30" />
              </div>
              <h3 className="text-lg font-light tracking-tight text-white sm:text-xl">
                {step.title}
              </h3>
              <p className="text-body mt-3 text-sm leading-[1.85] sm:mt-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
