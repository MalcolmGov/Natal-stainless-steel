"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SECTION } from "@/lib/layout";
import { FLAGSHIP_PROJECT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FlagshipShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section id="featured-project" ref={containerRef} className="relative overflow-hidden">
      <div className={cn(SECTION.container, SECTION.pad)}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-6">{FLAGSHIP_PROJECT.eyebrow}</p>
          <h2 className="display-lg text-white">{FLAGSHIP_PROJECT.title}</h2>
          <p className="text-body mt-5 text-lg leading-relaxed sm:mt-6 sm:text-xl lg:leading-relaxed">
            {FLAGSHIP_PROJECT.description}
          </p>
        </motion.div>
      </div>

      <div className="relative h-[50vh] min-h-[280px] overflow-hidden sm:h-[60vh] sm:min-h-[360px] lg:h-[85vh] lg:min-h-[500px]">
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
          <Image
            src={FLAGSHIP_PROJECT.image}
            alt={FLAGSHIP_PROJECT.imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-dark/15" />

        <motion.div
          style={{ opacity: textOpacity }}
          className={cn(SECTION.container, "absolute inset-x-0 bottom-0 pb-8 sm:pb-12 lg:pb-16")}
        >
          <div className="grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {FLAGSHIP_PROJECT.stats.map((stat) => (
              <GlassPanel
                key={stat.label}
                className="px-4 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
              >
                <p className="text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.12em] text-muted sm:mt-2 sm:text-[12px]">
                  {stat.label}
                </p>
              </GlassPanel>
            ))}
          </div>
        </motion.div>
      </div>

      <div className={cn(SECTION.container, SECTION.pad)}>
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-24">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-body text-base leading-[1.8] sm:text-lg lg:text-xl lg:leading-[1.8]">
              {FLAGSHIP_PROJECT.description}
            </p>
          </motion.div>
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={FLAGSHIP_PROJECT.image}
                alt={FLAGSHIP_PROJECT.imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
