"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SECTION } from "@/lib/layout";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const accentHover: Record<
  (typeof PRODUCT_CATEGORIES)[number]["accent"],
  string
> = {
  blue: "hover:border-brand-blue/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_32px_rgb(19_104_168/0.14)]",
  steel:
    "hover:border-brand-gold/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_32px_rgb(197_212_224/0.12)]",
};

const accentLine: Record<(typeof PRODUCT_CATEGORIES)[number]["accent"], string> = {
  blue: "from-brand-blue-light/90",
  steel: "from-brand-gold/90",
};

export function ProductsGrid() {
  return (
    <section id="products" className="relative overflow-hidden border-y border-white/[0.04] bg-dark">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgb(var(--brand-blue-rgb)/0.08),transparent_60%)]"
        aria-hidden
      />

      <div className={cn(SECTION.container, SECTION.padCompact, "relative")}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <p className="eyebrow mb-4">Product range</p>
          <h2 className="display-lg text-white">Stainless steel supply, end to end.</h2>
          <p className="text-body mt-4 text-sm leading-relaxed sm:text-base">
            Piping, fittings, flanges, valves, bar, plate, dairy fittings, handrail systems, and
            more — stocked for immediate supply.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <motion.article
              key={category.slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative"
            >
              <div
                className={cn(
                  "sector-card relative aspect-[3/4] overflow-hidden rounded-xl border border-white/[0.12] bg-dark-surface",
                  "shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
                  "transition-[transform,box-shadow,border-color] duration-500 ease-out",
                  "hover:-translate-y-1",
                  accentHover[category.accent]
                )}
              >
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  className="sector-card-image object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                />
                <div className="sector-card-tint absolute inset-0" aria-hidden />
                <div className="sector-card-overlay absolute inset-0" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4">
                  <div
                    className={cn(
                      "mb-2 h-px w-6 bg-gradient-to-r to-transparent opacity-70 transition-all duration-500 group-hover:w-10 group-hover:opacity-100",
                      accentLine[category.accent]
                    )}
                    aria-hidden
                  />
                  <h3 className="text-[10px] font-medium uppercase leading-snug tracking-[0.1em] text-white sm:text-[11px] lg:text-xs">
                    {category.name}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
