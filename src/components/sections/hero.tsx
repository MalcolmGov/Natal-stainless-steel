"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { HeroBackground } from "@/components/sections/hero-background";
import { HeroVisual, HeroVisualMobile } from "@/components/sections/hero-visual";
import { CtaButton } from "@/components/ui/cta-button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SECTION } from "@/lib/layout";
import { BRANCHES, HERO, STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const primaryBranch = BRANCHES.find((b) => "isPrimary" in b && b.isPrimary) ?? BRANCHES[0];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-dark"
    >
      <HeroBackground />

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <HeroVisual variant="desktop" scrollProgress={scrollYProgress} />
      </div>

      <div
        className={cn(
          SECTION.heroContainer,
          "relative flex min-h-[100svh] flex-col pt-24 sm:pt-28 lg:pt-32"
        )}
      >
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col justify-center"
          >
            <h1 className="hero-display">
              <span className="hero-headline-white block">
                Africa&apos;s{" "}
                <span className="hero-headline-accent">largest</span>
              </span>
              <span className="hero-headline-white mt-1 block sm:mt-2">
                stainless steel supplier.
              </span>
            </h1>

            <h2 className="hero-subhead mt-8 max-w-lg lg:mt-10">{HERO.subheadline}</h2>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:mt-12">
              <CtaButton href="#contact" variant="primary" size="lg" icon={ArrowRight}>
                Request a Quote
              </CtaButton>
              <CtaButton href="#products" variant="secondary" size="lg">
                View Products
              </CtaButton>
              <CtaButton
                href={`tel:${primaryBranch.phoneHref}`}
                variant="ghost"
                size="lg"
                icon={Phone}
                iconPosition="left"
                className="hidden w-full sm:inline-flex sm:w-auto"
              >
                {primaryBranch.phone}
              </CtaButton>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 h-[300px] w-full min-[400px]:h-[360px] sm:h-[420px] lg:h-[560px]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 lg:hidden">
              <HeroVisualMobile />
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20">
              <GlassPanel className="grid grid-cols-2 divide-x divide-white/[0.08] sm:grid-cols-4">
                {STATS.map((m) => (
                  <div
                    key={m.label}
                    className="px-2 py-4 text-center min-[400px]:px-4 min-[400px]:py-5 sm:px-6 lg:px-8 lg:py-6"
                  >
                    <p className="text-lg font-light tracking-tight text-white min-[400px]:text-xl lg:text-2xl">
                      {m.value}
                    </p>
                    <p className="text-body-muted mt-1 text-[8px] uppercase leading-snug tracking-[0.08em] min-[400px]:text-[9px] lg:text-[10px]">
                      {m.label}
                    </p>
                  </div>
                ))}
              </GlassPanel>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
