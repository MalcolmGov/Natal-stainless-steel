"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ChevronLeft, ChevronRight, MapPin, Pause, Play } from "lucide-react";
import { SECTION } from "@/lib/layout";
import { LATEST_PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AUTO_MS = 6000;
const SWIPE_THRESHOLD = 48;

export function LatestProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const total = LATEST_PROJECTS.length;
  const active = LATEST_PROJECTS[activeIndex];

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (reducedMotion || isPaused) return;
    const timer = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, reducedMotion]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) goPrev();
    else if (delta < -SWIPE_THRESHOLD) goNext();
    touchStartX.current = null;
  };

  const marqueeItems = [...LATEST_PROJECTS, ...LATEST_PROJECTS];

  return (
    <section id="projects" className="relative overflow-hidden bg-dark-elevated">
      <div className="project-carousel-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className={cn(SECTION.container, "relative pb-8 pt-20 sm:pb-10 sm:pt-28 lg:pt-32")}>
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="eyebrow mb-4 text-brand-gold">Latest Projects</p>
          <h2 className="display-lg text-white">Supplying projects across Africa.</h2>
          <p className="text-body mt-4 text-base leading-relaxed sm:text-lg">
            From industrial plants to commercial developments — quality stock and delivery you
            can rely on.
          </p>
        </div>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-[min(72vh,780px)] min-h-[420px] w-full overflow-hidden bg-dark-surface sm:min-h-[500px] lg:min-h-[580px]">
          {LATEST_PROJECTS.map((project, i) => {
            const isActive = i === activeIndex;
            const zoom = "imageZoom" in project ? project.imageZoom : 1.06;
            const isBanner = "imageZoom" in project && project.imageZoom <= 1;
            return (
              <div
                key={project.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-out",
                  isActive ? "z-10 opacity-100" : "z-0 pointer-events-none opacity-0"
                )}
                aria-hidden={!isActive}
              >
                <div
                  className={cn(
                    "absolute inset-0",
                    isActive && !reducedMotion && "animate-project-ken-burns"
                  )}
                  style={
                    isActive && !reducedMotion
                      ? ({ "--ken-zoom-start": zoom, "--ken-zoom-end": zoom + 0.05 } as CSSProperties)
                      : undefined
                  }
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={isActive ? project.imageAlt : ""}
                    className={cn(
                      "h-full w-full object-cover",
                      isBanner ? "project-slide-img" : "project-slide-img--linkedin"
                    )}
                    style={{ objectPosition: project.imageFocus }}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              </div>
            );
          })}

          {/* Light scrim — text legibility without crushing the photo */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[38%] bg-gradient-to-t from-dark/75 via-dark/25 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-dark/35 to-transparent" />

          <div className={cn(SECTION.container, "absolute inset-x-0 bottom-0 z-30 pb-5 sm:pb-8")}>
            <div className="max-w-2xl rounded-2xl border border-white/15 bg-dark/55 p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider sm:text-xs",
                    active.statusType === "award"
                      ? "bg-brand-gold text-dark"
                      : "bg-brand-green text-dark"
                  )}
                >
                  {active.status}
                </span>
                <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] uppercase tracking-wider text-white sm:text-xs">
                  {active.sector}
                </span>
              </div>
              <h3 className="text-2xl font-light tracking-tight text-white sm:text-3xl lg:text-4xl">
                {active.title}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-white/90 sm:text-base">
                <MapPin className="h-4 w-4 shrink-0 text-brand-gold" aria-hidden />
                {active.location}
              </p>
            </div>
          </div>

          <div className="absolute right-4 top-4 z-30 flex items-center gap-2 sm:right-8 sm:top-6">
            <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs tabular-nums text-white backdrop-blur-md">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-brand-green/50 hover:text-brand-green"
              aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={goPrev}
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-brand-green/50 hover:text-brand-green sm:flex"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors hover:border-brand-green/50 hover:text-brand-green sm:flex"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {!reducedMotion && !isPaused && (
            <div className="absolute inset-x-0 top-0 z-30 h-1 overflow-hidden bg-white/10">
              <div
                key={activeIndex}
                className="h-full origin-left animate-project-progress bg-gradient-to-r from-brand-green to-brand-gold"
              />
            </div>
          )}
        </div>

        <div className="group/gallery relative overflow-hidden border-y border-white/[0.1] bg-dark-surface py-5 sm:py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#12151a] to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#12151a] to-transparent sm:w-20" />

          <div
            className={cn(
              "flex w-max gap-5 px-5",
              !reducedMotion && "animate-marquee-gallery"
            )}
          >
            {marqueeItems.map((project, i) => {
              const realIndex = i % total;
              const isActive = realIndex === activeIndex;
              return (
                <button
                  key={`${project.id}-${i}`}
                  type="button"
                  onClick={() => goTo(realIndex)}
                  className={cn(
                    "group relative aspect-[16/10] h-36 w-56 shrink-0 overflow-hidden rounded-2xl transition-all duration-300 sm:h-44 sm:w-72 lg:h-48 lg:w-80",
                    isActive
                      ? "ring-2 ring-brand-green shadow-[0_0_32px_rgb(69_160_65/0.5)]"
                      : "opacity-80 ring-1 ring-white/15 hover:opacity-100 hover:ring-brand-green/40"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover brightness-[1.15] saturate-[1.3]"
                    style={{ objectPosition: project.imageFocus }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-3 text-left text-xs font-medium leading-snug text-white sm:p-4 sm:text-sm">
                    {project.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={cn(SECTION.container, "relative py-8 sm:py-10")}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-light sm:text-base">
            {active.scope}
          </p>
          {active.partners.length > 0 && (
            <p className="shrink-0 text-xs text-muted sm:text-sm">
              <span className="text-brand-gold">Partners · </span>
              {active.partners.join(" · ")}
            </p>
          )}
        </div>

        <div className="mt-6 flex gap-2 sm:hidden">
          <button
            type="button"
            onClick={goPrev}
            className="btn btn-secondary btn-md flex flex-1 justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            className="btn btn-primary btn-md flex flex-1 justify-center"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
