import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TechStrip } from "@/components/tech-strip";
import { FeaturedWork } from "@/components/featured-work";
import { About } from "@/components/about";
import { ComparisonTable } from "@/components/comparison-table";
import { Services } from "@/components/services";
import { Impact } from "@/components/impact";
import { IntegrationsCarousel } from "@/components/integrations-carousel";
// import { Insights } from "@/components/insights"; // hidden for now
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
        <About />
        <ComparisonTable />
        <Services />
        <Impact />
        <IntegrationsCarousel />
        {/* <Insights /> hidden for now */}
        <FooterCta />
      </main>
      <Footer />
    </>
  );
}
