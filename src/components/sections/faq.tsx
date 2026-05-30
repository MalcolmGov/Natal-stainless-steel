"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SECTION } from "@/lib/layout";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-white/[0.04] bg-dark">
      <div className={cn(SECTION.container, SECTION.pad)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow mb-6">FAQ</p>
          <h2 className="display-lg text-white">Common questions</h2>
          <p className="text-body mt-6 text-lg leading-relaxed">
            Everything you need to know about working with our engineering team — from
            compliance to emergency response.
          </p>
        </motion.div>

        <div className="divide-y divide-white/[0.1] border-y border-white/[0.1]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-3 py-5 text-left transition-colors hover:text-white sm:gap-6 sm:py-7"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 flex-1 pr-2 text-base font-medium text-white sm:pr-0 lg:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "mt-1 h-5 w-5 shrink-0 text-brand-gold transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-body pb-5 pr-2 text-sm leading-relaxed sm:pb-7 sm:pr-12 lg:text-base lg:leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
