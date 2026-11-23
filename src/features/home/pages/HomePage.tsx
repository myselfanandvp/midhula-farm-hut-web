import HeroSection from "../components/HeroSection";
import EditorialIntroSection from "../components/EditorialIntoSection";
import AquaticPortfolioSection from "../components/AquaticPortfolioSection";
import FarmStorySection from "../components/FarmStorySection";
import LivingGallerySection from "../components/LivingGallerySection";
import ConnectCtaSection from "../components/ConnectCtaSection";
import YouTubeShowcasePage from "../components/YoutubeShowcasePage";
export function HomePage() {
  return (
    <main className="min-h-screen bg-[#141414]">
      <HeroSection />
      <EditorialIntroSection />
      <AquaticPortfolioSection />
      <FarmStorySection />
      <YouTubeShowcasePage />
      <LivingGallerySection />
      <ConnectCtaSection />
    </main>
  );
}
