import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  onClick,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("btn", `btn-${variant}`, `btn-${size}`, className)}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="btn-icon shrink-0" aria-hidden />
      )}
      <span className="relative z-[1]">{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="btn-icon btn-icon-arrow shrink-0" aria-hidden />
      )}
    </Link>
  );
}

type CtaTextLinkProps = {
  href?: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  asSpan?: boolean;
};

export function CtaTextLink({
  href,
  children,
  icon: Icon,
  className,
  asSpan,
}: CtaTextLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="btn-text-icon shrink-0" aria-hidden />}
    </>
  );

  if (asSpan || !href) {
    return <span className={cn("btn-text", className)}>{content}</span>;
  }

  return (
    <Link href={href} className={cn("btn-text", className)}>
      {content}
    </Link>
  );
}
