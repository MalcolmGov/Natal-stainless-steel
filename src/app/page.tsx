import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProductsGrid } from "@/components/sections/sectors-served";
import { FAQ } from "@/components/sections/faq";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { IntroStatement } from "@/components/sections/intro-statement";
import { FlagshipShowcase } from "@/components/sections/flagship-showcase";
import { EditorialServices } from "@/components/sections/editorial-services";
import { Compliance } from "@/components/sections/compliance";
import { LatestProjectsCarousel } from "@/components/sections/latest-projects-carousel";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { BRAND, BRANCHES } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  description:
    "One of Africa's largest suppliers of stainless steel piping, fittings, flanges, valves, and related products.",
  url: BRAND.website,
  email: BRAND.email,
  telephone: BRANCHES.map((b) => b.phone),
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <AnnouncementBar />
      <main className="pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <Hero />
        <ProductsGrid />
        <IntroStatement />
        <FlagshipShowcase />
        <EditorialServices />
        <Compliance />
        <LatestProjectsCarousel />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
