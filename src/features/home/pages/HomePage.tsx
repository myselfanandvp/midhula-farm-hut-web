import HeroSection from "../components/HeroSection";
import EditorialIntroSection from "../components/EditorialIntoSection";
import AquaticPortfolioSection from "../components/AquaticPortfolioSection";
import FarmStorySection from "../components/FarmStorySection";
import LivingGallerySection from "../components/LivingGallerySection";
import ConnectCtaSection from "../components/ConnectCtaSection";
import YouTubeShowcasePage from "../components/YoutubeShowcasePage";
import MarqueeTicker from "../../../components/ui/MarqueeTicker";

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#141414]">
      <HeroSection />
      {/* Marquee after Hero */}
      <MarqueeTicker
        bgColor="#141414"
        textColor="#F7F7F5"
        accentColor="#C81D77"
        borderTop={true}
        borderBottom={true}
      />
      <EditorialIntroSection />
      {/* Marquee after Editorial Intro */}
      <MarqueeTicker
        bgColor="#141414"
        textColor="#F7F7F5"
        accentColor="#1E8E5A"
        borderTop={true}
        borderBottom={false}
        items={[
          "SHOW-GRADE SPECIMENS",
          "FRESHWATER LINEAGES",
          "KERALA AQUACULTURE",
          "BETTA SPLENDENS",
          "AQUATIC COLLECTORS",
          "ORNAMENTAL FISH",
          "HANDPICKED STRAINS",
          "FARM RAISED",
        ]}
      />
      <AquaticPortfolioSection />
      <FarmStorySection />
      <YouTubeShowcasePage />
      <LivingGallerySection />
      {/* Marquee before CTA */}
      <MarqueeTicker
        bgColor="#F7F7F5"
        textColor="#141414"
        accentColor="#C81D77"
        borderTop={true}
        borderBottom={false}
        items={[
          "CONNECT WITH US",
          "START YOUR AQUATIC JOURNEY",
          "COLLECTORS WELCOME",
          "FARM DIRECT",
          "KERALA INDIA",
          "ORDER ENQUIRY OPEN",
          "RARE LINEAGES AVAILABLE",
          "JOIN THE COMMUNITY",
        ]}
      />
      <ConnectCtaSection />
    </main>
  );
}

export default HomePage;
