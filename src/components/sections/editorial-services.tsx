"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SECTION } from "@/lib/layout";
import { EDITORIAL_SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function EditorialServices() {
  return (
    <section id="supply" className="bg-dark">
      <div
        className={cn(
          SECTION.container,
          "pb-16 pt-20 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-44"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-6">Capabilities</p>
          <h2 className="display-lg text-white">
            Engineering for environments that cannot fail.
          </h2>
        </motion.div>
      </div>

      {EDITORIAL_SERVICES.map((service, index) => {
        const isReversed = service.align === "right";

        return (
          <article key={service.id} className="border-t border-white/[0.04]">
            <div className={cn(SECTION.container, "py-16 sm:py-24 lg:py-36")}>
              <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-12 lg:gap-20">
                <motion.div
                  className={cn(
                    "relative lg:col-span-7",
                    isReversed && "lg:order-2 lg:col-start-6"
                  )}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      index === 1 ? "aspect-[4/5] lg:aspect-[3/4]" : "aspect-[4/3] lg:aspect-[16/11]"
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/25 to-transparent" />
                  </div>
                  <div
                    className={cn(
                      "absolute -bottom-4 h-px w-24 bg-brand-gold/40 sm:-bottom-6 sm:w-32",
                      isReversed ? "right-0" : "left-0"
                    )}
                  />
                </motion.div>

                <motion.div
                  className={cn(
                    "lg:col-span-5",
                    isReversed && "lg:order-1 lg:col-start-1 lg:row-start-1"
                  )}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  <p className="eyebrow mb-4 text-brand-gold sm:mb-5">{service.eyebrow}</p>
                  <h3 className="text-2xl font-light leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="text-body mt-5 text-base leading-[1.85] sm:mt-6 lg:text-lg lg:leading-[1.85]">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-body flex items-start gap-3 text-sm sm:gap-4 lg:text-[15px]"
                      >
                        <span className="mt-2 h-px w-6 shrink-0 bg-brand-gold/60 sm:w-8" />
                        <span className="min-w-0 flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
