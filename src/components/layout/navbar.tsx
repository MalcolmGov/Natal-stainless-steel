"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { CtaButton } from "@/components/ui/cta-button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  onClick,
  className,
  accent = "green",
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  accent?: "green" | "gold";
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "nav-link relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
        accent === "gold" && "nav-link--gold",
        className
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4 lg:px-8 lg:pt-5">
        <nav
          className={cn(
            "mx-auto flex max-w-[1440px] items-center justify-between gap-2 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:gap-4 sm:px-5 sm:py-3 lg:px-6 lg:py-3.5",
            scrolled
              ? "nav-glass border border-brand-green/20"
              : "border border-white/[0.04] bg-white/[0.02]"
          )}
        >
          {/* Logo */}
          <BrandLockup size="nav" />

          {/* Desktop nav pill */}
          <div className="nav-pill hidden items-center rounded-full p-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                accent={link.label === "Contact" ? "gold" : "green"}
              />
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center lg:flex">
            <CtaButton href="#contact" variant="primary" size="sm">
              Contact Us
            </CtaButton>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-green/25 bg-brand-green/[0.08] text-brand-green transition-colors hover:border-brand-green/50 hover:bg-brand-green/15 hover:text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Accent line when scrolled */}
        <motion.div
          className="mx-auto mt-0 h-px max-w-[1440px] bg-gradient-to-r from-transparent via-brand-green/40 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: scrolled ? 1 : 0, scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-dark/75 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              className="nav-glass absolute inset-x-4 top-24 rounded-2xl border border-brand-blue/20 p-8 shadow-[0_24px_80px_rgb(58_62_196/0.16)]"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3.5 text-lg font-light tracking-tight transition-colors",
                        link.label === "Contact"
                          ? "text-brand-gold/90 hover:bg-brand-gold/10 hover:text-brand-gold"
                          : "text-white/90 hover:bg-brand-green/10 hover:text-brand-green"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-8">
                <CtaButton
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </CtaButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
