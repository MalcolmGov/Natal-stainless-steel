"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { IMAGES } from "@/lib/constants";

type HeroVisualProps = {
  variant: "desktop" | "mobile";
  scrollProgress?: MotionValue<number>;
};

export function HeroVisual({ variant, scrollProgress }: HeroVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 28 });
  const imgX = useTransform(springX, [-0.5, 0.5], [6, -6]);
  const imgY = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = variant === "desktop";

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY, reducedMotion]);

  const fallbackProgress = useMotionValue(0);
  const progress = scrollProgress ?? fallbackProgress;
  const parallaxY = useTransform(progress, [0, 1], [0, isDesktop ? 56 : 32]);

  const containerClass = isDesktop
    ? "absolute inset-y-0 right-0 w-[58%]"
    : "absolute inset-0";

  return (
    <div ref={ref} className={containerClass}>
      <div className="hero-visual-halo-primary pointer-events-none absolute right-[5%] top-[18%] h-[55%] w-[70%] rounded-full" />
      <div className="hero-visual-halo-secondary pointer-events-none absolute right-[15%] top-[30%] h-[40%] w-[45%] rounded-full" />

      <div className="hero-visual-floor pointer-events-none absolute inset-x-[8%] bottom-[8%] h-px lg:bottom-[10%]" />
      <div className="hero-visual-reflection pointer-events-none absolute inset-x-[12%] bottom-0 h-[18%] lg:h-[22%]" />

      {!reducedMotion && (
        <div className="hero-light-sweep pointer-events-none absolute inset-0 overflow-hidden" />
      )}

      <motion.div
        className="absolute inset-[6%] overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:inset-[8%] lg:inset-[10%_4%_14%_2%]"
        style={reducedMotion ? {} : { y: parallaxY }}
      >
        <motion.div
          className="absolute inset-0"
          style={reducedMotion ? {} : { x: imgX, y: imgY, scale: 1.06 }}
        >
          <Image
            src={IMAGES.heroVisual}
            alt="Premium stainless steel piping and industrial stock"
            fill
            priority
            className="object-cover object-center"
            sizes={isDesktop ? "58vw" : "(max-width: 1024px) 100vw, 55vw"}
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-dark/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-dark/40 via-transparent to-transparent" />
      </motion.div>

      <div
        className={
          isDesktop
            ? "pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-dark/80 via-dark/35 to-transparent"
            : "pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-dark/90 to-transparent"
        }
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark to-transparent lg:h-40" />
    </div>
  );
}

export function HeroVisualMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={sectionRef} className="absolute inset-0">
      <HeroVisual variant="mobile" scrollProgress={scrollYProgress} />
    </div>
  );
}
