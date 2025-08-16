import AboutUs from "./lib/ui/AboutUs";
import ContactSection from "./lib/ui/ContactSection";
import GallerySection from "./lib/ui/GallerySection";
import Header from "./lib/ui/Header";
import HeroSection from "./lib/ui/HeroSection";
import MarketingSection from "./lib/ui/MarketingSection";
import PartnerSections from "./lib/ui/ParnetsSections";
import ParnetsSections from "./lib/ui/ParnetsSections";
import SearchSection from "./lib/ui/SearchSection";
import ServicesSection from "./lib/ui/ServicesSection";

export default function Home() {
  return (
    <div className="w-screen h-auto bg-[var(--background)] overflow-hidden">

      <div className="w-screen h-screen bg-linear-to-t from-[#E5E4E2]/15 via-[var(--background)] to-[#E5E4E2]/15 fixed" />

      <div className=" fixed w-screen h-screen bg-black/20 backdrop-blur-[80px]" />

      <div className="w-full h-full fixed overflow-auto scroll-smooth antialiased overflow-x-hidden bg-transparent">
        <HeroSection />
        <PartnerSections />
        <AboutUs />
        <MarketingSection />
        <SearchSection />
        <GallerySection />
        <ServicesSection />
        <ContactSection />
      </div>
      <Header />
    </div>

  );
}
