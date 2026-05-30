import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light";
};

export function GlassPanel({ children, className, variant = "dark" }: GlassPanelProps) {
  return (
    <div
      className={cn(
        variant === "dark" ? "glass-panel" : "glass-panel-light",
        className
      )}
    >
      {children}
    </div>
  );
}
