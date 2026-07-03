import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TechStrip } from "@/components/tech-strip";
import { FeaturedWork } from "@/components/featured-work";
import { ComparisonTable } from "@/components/comparison-table";
import { Services } from "@/components/services";
import { Impact } from "@/components/impact";
import { IntegrationsCarousel } from "@/components/integrations-carousel";
import { Insights } from "@/components/insights";
import { FooterCta } from "@/components/footer-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechStrip />
        <FeaturedWork />
        <ComparisonTable />
        <Services />
        <Impact />
        <IntegrationsCarousel />
        <Insights />
        <FooterCta />
      </main>
      <Footer />
    </>
  );
}
