import React from "react";

interface FooterLink {
  index: string;
  label: string;
  href: string;
  accent: "magenta" | "green";
}

interface FooterProps {
  brandName?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  coordinatesText?: string;
  onBackToTopClick?: () => void;
}

const NAV_LINKS: FooterLink[] = [
  {
    index: "01",
    label: "EDITORIAL INTRODUCTION",
    href: "#editorial-intro",
    accent: "green",
  },
  {
    index: "02",
    label: "CURATED PORTFOLIO",
    href: "#aquatic-portfolio",
    accent: "magenta",
  },
  {
    index: "03",
    label: "THE FARM",
    href: "#farm-story",
    accent: "green",
  },
  {
    index: "04",
    label: "THE LIVING GALLERY",
    href: "#living-gallery",
    accent: "magenta",
  },
  {
    index: "05",
    label: "CONNECT WITH US",
    href: "#connect-cta",
    accent: "green",
  },
];

export const Footer: React.FC<FooterProps> = ({
  brandName = "MIDHULA FARM HUT",
  instagramHandle = "@MIDHULA_FARM_HUT",
  instagramUrl = "https://instagram.com/midhula_farm_hut",
  coordinatesText = "KERALA_FARM_01 // 10.8505° N, 76.2711° E",
  onBackToTopClick,
}) => {
  const handleScrollTop = () => {
    if (onBackToTopClick) {
      onBackToTopClick();
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#141414] text-white overflow-hidden select-none font-sans border-t border-[#262626]">
      {/* Main Content Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-14 pt-16 sm:pt-20 pb-12">
        {/* Upper Multi-Column Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-10 pb-14 border-b border-[#262626]">
          {/* Column 1: Brand Block & Farm Coordinates (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            {/* Off-White Brand Block with Magenta Hard-Offset Shadow (Matches Navbar) */}
            <a
              href="#hero-section"
              className="inline-flex items-center bg-[#F7F7F5] hover:bg-white text-[#141414] shadow-[3px_3px_0px_#C81D77] hover:shadow-[4px_4px_0px_#C81D77] transition-all px-6 py-3.5 font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase mb-6"
            >
              {brandName}
            </a>

            <p className="text-[#9E9E9A] text-[13px] sm:text-[14px] leading-[1.65] max-w-[340px] mb-7">
              Ornamental freshwater aquaculture rooted in Kerala—raising show-grade Halfmoon Bettas,
              rare guppy strains, and living aquatic art for dedicated collectors.
            </p>

            {/* Coordinates Telemetry Pill (Matches HeroSection) */}
            <div className="inline-flex items-center gap-2.5 bg-[#1A1A1A] border border-[#2E2E2E] px-3 py-1.5 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase text-[#B8B8B8]">
              <span className="w-2 h-2 rounded-full bg-[#1E8E5A] shrink-0" />
              <span>{coordinatesText}</span>
            </div>
          </div>

          {/* Column 2: Numbered Section Index (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <div className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#8E8E8E] mb-5">
              INDEX // DIRECTORY
            </div>

            <ul className="flex flex-col border-t border-[#262626]">
              {NAV_LINKS.map((link) => {
                const indexColor = link.accent === "magenta" ? "text-[#C81D77]" : "text-[#1E8E5A]";

                return (
                  <li key={link.index} className="border-b border-[#262626]">
                    <a
                      href={link.href}
                      className="group flex items-center justify-between py-3 px-1 hover:bg-[#1A1A1A] transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`font-mono text-[10px] font-bold tracking-[0.12em] ${indexColor}`}
                        >
                          {link.index}
                        </span>
                        <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[#D4D4D0] group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                      </div>

                      <svg
                        className="w-3 h-3 text-[#737373] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 9L9 3M9 3H4M9 3V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Social Channel & Return to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="w-full md:text-right">
              <div className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#8E8E8E] mb-5">
                SOCIAL // DISPATCH
              </div>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-[#1A1A1A] hover:bg-[#222222] border border-[#2E2E2E] hover:border-[#4A4A4A] transition-colors px-4 py-3 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-[#E6E6E3]"
              >
                <span className="w-2 h-2 rounded-full bg-[#C81D77] shrink-0" />
                <span>{instagramHandle}</span>
                <svg
                  className="w-3 h-3 text-[#9E9E9A] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L9 3M9 3H4M9 3V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </a>

              <p className="font-mono text-[10px] leading-[1.6] tracking-[0.06em] text-[#737373] mt-4">
                KERALA, INDIA
                <br />
                ORNAMENTAL AQUACULTURE
              </p>
            </div>

            {/* Brutalist Back-To-Top Button */}
            <button
              type="button"
              onClick={handleScrollTop}
              className="mt-8 md:mt-0 group inline-flex items-center gap-2.5 bg-[#F7F7F5] hover:bg-white text-[#141414] shadow-[3px_3px_0px_#1E8E5A] hover:shadow-[4px_4px_0px_#1E8E5A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#1E8E5A] transition-all font-mono text-[10px] font-bold tracking-[0.14em] uppercase px-4 py-3 cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:-translate-y-0.5"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 10V2M6 2L2.5 5.5M6 2L9.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Edition Bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] tracking-[0.14em] uppercase text-[#737373]">
          <div>
            © {new Date().getFullYear()} {brandName}. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-3 text-[#8E8E8E]">
            <span className="inline-block w-1.5 h-1.5 bg-[#1E8E5A]" />
            <span>EST. 2024 // KERALA EDITORIAL EDITION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
