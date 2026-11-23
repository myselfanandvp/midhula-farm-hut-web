import React, { useState } from "react";

export interface SpeciesItem {
  id: string;
  index: string;
  label: string;
  captionCode: string;
  description: string;
  accent: "magenta" | "green";
  imageSrc?: string;
}

const DEFAULT_SPECIES: SpeciesItem[] = [
  {
    id: "bettas",
    index: "01",
    label: "BETTAS",
    captionCode: "01 // BETTAS",
    description:
      "Sculpted Halfmoon and Koi Betta varieties celebrated for flowing finnage and bold colour.",
    accent: "magenta",
  },
  {
    id: "guppies",
    index: "02",
    label: "GUPPIES",
    captionCode: "02 // GUPPIES",
    description:
      "High-contrast ribbon and mosaic guppy strains selected for tail symmetry and vibrant iridescence.",
    accent: "green",
  },
  {
    id: "angel-fish",
    index: "03",
    label: "ANGEL FISH",
    captionCode: "03 // ANGEL FISH",
    description:
      "Graceful long-finned and marble angelfish lineages bred for poise, height, and clean banding.",
    accent: "magenta",
  },
  {
    id: "koi-ornamental",
    index: "04",
    label: "KOI & ORNAMENTAL FISH",
    captionCode: "04 // KOI & ORNAMENTAL FISH",
    description:
      "Striking colour-blocked koi and pond-ready ornamental fish raised under controlled conditions.",
    accent: "green",
  },
  {
    id: "cichlids-flowerhorn",
    index: "05",
    label: "CICHLIDS & FLOWERHORN",
    captionCode: "05 // CICHLIDS & FLOWERHORN",
    description:
      "Characterful cichlids and pearl-marked Flowerhorn specimens prized for presence and form.",
    accent: "magenta",
  },
  {
    id: "freshwater-species",
    index: "06",
    label: "FRESHWATER SPECIES",
    captionCode: "06 // FRESHWATER SPECIES",
    description:
      "Complementary schooling and bottom-dwelling freshwater species suited to balanced aquascapes.",
    accent: "green",
  },
];

interface AquaticPortfolioSectionProps {
  items?: SpeciesItem[];
  onSelectSpecies?: (item: SpeciesItem) => void;
}

export const AquaticPortfolioSection: React.FC<AquaticPortfolioSectionProps> = ({
  items = DEFAULT_SPECIES,
  onSelectSpecies,
}) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "bettas");

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  const handleInspect = (item: SpeciesItem) => {
    setActiveId(item.id);
  };

  const handleClick = (item: SpeciesItem) => {
    setActiveId(item.id);
    onSelectSpecies?.(item);
  };

  return (
    <section className="relative w-full bg-[#141414] text-white overflow-hidden select-none font-sans border-t border-[#262626]">
      {/* Main Content Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-14 py-16 sm:py-24">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            {/* Magenta Eyebrow Pill */}
            <div className="mb-5">
              <span className="inline-block bg-[#C81D77] text-white font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 leading-none">
                02 // CURATED PORTFOLIO
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="font-display text-[48px] sm:text-[68px] xl:text-[76px] leading-[0.94] tracking-[0.01em] uppercase text-white">
              MEET THE AQUATIC WORLD.
            </h2>
          </div>

          {/* Right Helper Prompt */}
          <p className="font-mono text-[10px] sm:text-[11px] leading-[1.6] tracking-[0.06em] text-[#9E9E9A] max-w-[270px] lg:pb-1">
            Hover or select any numbered variety to inspect our documented ornamental fish
            collection.
          </p>
        </div>

        {/* Lower Two-Column Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Numbered Species List (01 - 06) */}
          <div className="lg:col-span-6 flex flex-col border-t border-[#262626]">
            {items.map((item) => {
              const isActive = item.id === activeItem?.id;
              const numberColorClass =
                item.accent === "magenta" ? "text-[#C81D77]" : "text-[#1E8E5A]";

              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => handleInspect(item)}
                  onFocus={() => handleInspect(item)}
                  onClick={() => handleClick(item)}
                  className={`group w-full flex items-center justify-between gap-4 py-4 sm:py-5 px-2 text-left border-b border-[#262626] transition-colors cursor-pointer ${
                    isActive ? "bg-[#1B1B1B]" : "hover:bg-[#181818]"
                  }`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={`font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.12em] shrink-0 ${numberColorClass}`}
                    >
                      {item.index}
                    </span>
                    <span
                      className={`font-display text-[26px] sm:text-[34px] leading-none tracking-[0.01em] uppercase transition-colors ${
                        isActive ? "text-white" : "text-[#E6E6E3] group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Top-Right Diagonal Arrow */}
                  <svg
                    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                      isActive
                        ? "text-white translate-x-0.5 -translate-y-0.5"
                        : "text-[#8E8E8E] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Right Column: Framed Species Preview & Caption Card */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] bg-[#181818] border border-[#2C2C2C] shadow-[4px_4px_0px_#C81D77] flex flex-col">
              {/* Media Preview Viewport */}
              <div className="relative w-full aspect-[4/4.3] bg-[#161616] overflow-hidden">
                {activeItem?.imageSrc ? (
                  <img
                    src={activeItem.imageSrc}
                    alt={activeItem.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#161616]" />
                )}
              </div>

              {/* Bottom Caption Strip */}
              <div className="border-t border-[#2A2A2A] bg-[#1C1C1C] px-5 py-4">
                <div className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#C81D77] mb-1.5">
                  {activeItem?.captionCode}
                </div>
                <p className="font-sans text-[11px] sm:text-[12px] leading-[1.55] text-[#A3A3A3] max-w-[340px]">
                  {activeItem?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AquaticPortfolioSection;
