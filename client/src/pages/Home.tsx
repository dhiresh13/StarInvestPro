import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import GlobalPresence from "@/components/GlobalPresence";
import BrandPartners from "@/components/BrandPartners";
import Pricing from "@/components/Pricing";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Press from "@/components/Press";
import DeveloperResources from "@/components/DeveloperResources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Products />
      <GlobalPresence />
      <BrandPartners />
      <Pricing />
      <Industries />
      <Testimonials />
      <FAQ />
      <Press />
      <Team />
      <DeveloperResources />
      <Contact />
      <Footer />
    </div>
  );
}
