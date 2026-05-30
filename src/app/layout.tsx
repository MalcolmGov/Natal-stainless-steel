import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3003");

const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Natal Stainless Steel",
  type: "image/jpeg" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Natal Stainless Steel — one of Africa's largest suppliers of stainless steel piping, fittings, flanges, valves, and related products. Branches in Durban, Gauteng, and Cape Town.",
  keywords: [
    "stainless steel supplier South Africa",
    "stainless steel piping",
    "butt weld fittings",
    "stainless flanges",
    "Natal Stainless Steel",
    "Durban stainless steel",
    "Gauteng stainless steel",
  ],
  authors: [{ name: BRAND.name }],
  openGraph: {
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description:
      "Quality stainless steel supply with large stock on hand. Serving South Africa since 1992.",
    type: "website",
    locale: "en_ZA",
    siteName: BRAND.name,
    url: siteUrl,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description:
      "Quality stainless steel supply with large stock on hand. Serving South Africa since 1992.",
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c4d7f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-dark text-white">{children}</body>
    </html>
  );
}
