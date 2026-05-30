"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  speed?: number;
  overlay?: "bottom" | "side" | "none";
};

export function ParallaxImage({
  src,
  alt,
  className,
  priority = false,
  speed = 0.15,
  overlay = "bottom",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        overlay === "bottom" && "img-vignette",
        overlay === "side" && "img-vignette-side",
        className
      )}
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
}
