"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { ANNOUNCEMENT } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-blue/30 bg-dark/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <Link
        href={ANNOUNCEMENT.href}
        className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-brand-blue/10"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue-light">
          <MapPin className="h-4 w-4" aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold uppercase tracking-wide text-brand-gold-light">
            {ANNOUNCEMENT.label}
          </span>
          <span className="block truncate text-[11px] text-muted-light">{ANNOUNCEMENT.detail}</span>
        </span>
      </Link>
    </div>
  );
}
