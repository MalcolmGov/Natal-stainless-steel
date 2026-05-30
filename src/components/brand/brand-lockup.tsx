import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  className?: string;
  showText?: boolean;
  size?: "nav" | "footer";
};

export function BrandLockup({
  className,
  showText = true,
  size = "nav",
}: BrandLockupProps) {
  const isNav = size === "nav";

  return (
    <Link
      href="/"
      className={cn("group flex shrink-0 items-center gap-3.5 sm:gap-4", className)}
    >
      <div
        className={cn(
          "relative shrink-0 transition-transform duration-300 group-hover:scale-105",
          isNav ? "h-11 w-11 lg:h-12 lg:w-12" : "h-11 w-11"
        )}
      >
        <Image
          src={BRAND.logo}
          alt={BRAND.name}
          width={48}
          height={48}
          unoptimized
          className="h-full w-full object-contain"
          priority={isNav}
        />
      </div>

      {showText && (
        <div className="hidden sm:block">
          <p
            className={cn(
              "brand-wordmark leading-none",
              isNav ? "text-[13px] lg:text-[15px]" : "text-base"
            )}
          >
            <span className="brand-wordmark-natal">NATAL</span>
            <span className="brand-wordmark-steel"> STAINLESS STEEL</span>
          </p>
        </div>
      )}
    </Link>
  );
}
