"use client";

import { motion } from "framer-motion";
import { SECTION } from "@/lib/layout";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [featured, secondary] = TESTIMONIALS.items;

  return (
    <section className="bg-dark-elevated">
      <div className={cn(SECTION.container, SECTION.pad)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="eyebrow mb-6">Client Perspectives</p>
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            {TESTIMONIALS.disclaimer}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.blockquote
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl font-light leading-[1.6] tracking-tight text-white sm:text-2xl lg:text-4xl lg:leading-[1.5]">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-8 sm:mt-10">
              <p className="text-base text-white">{featured.author}</p>
              <p className="mt-1 text-sm text-muted">
                {featured.company}
              </p>
            </footer>
          </motion.blockquote>

          <motion.blockquote
            className="flex flex-col justify-end lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="border-l border-brand-gold/30 pl-5 sm:pl-8">
              <p className="text-body text-base leading-[1.85] lg:text-lg">
                &ldquo;{secondary.quote}&rdquo;
              </p>
              <footer className="mt-5 sm:mt-6">
                <p className="text-sm text-white">{secondary.author}</p>
                <p className="mt-1 text-xs text-muted">
                  {secondary.company}
                </p>
              </footer>
            </div>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
