import React, { useState, useEffect } from "react";

interface NavbarProps {
  brandName?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  onLetsTalkClick?: () => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName = "MIDHULA FARM HUT",
  instagramHandle = "@MIDHULA_FARM_HUT",
  instagramUrl = "https://instagram.com/midhula_farm_hut",
  onLetsTalkClick,
  onMenuToggle,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    onMenuToggle?.(next);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full select-none font-mono transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(20,20,20,0.97)" : "#141414",
        borderBottom: scrolled ? "1px solid #2D2D2D" : "1px solid #262626",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav
        aria-label="Primary Navigation"
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4"
      >
        {/* Left Brand Block with Magenta Hard-Offset Shadow */}
        <a
          href="#hero-section"
          className="inline-flex items-center bg-[#F7F7F5] hover:bg-white text-[#141414] shadow-[3px_3px_0px_#C81D77] hover:shadow-[4px_4px_0px_#C81D77] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#C81D77] transition-all pl-7 sm:pl-12 pr-6 sm:pr-8 py-3.5 text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase"
        >
          {brandName}
        </a>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Instagram Status Badge */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2.5 bg-[#F7F7F5] hover:bg-white text-[#141414] transition-colors px-4 sm:px-5 py-3.5 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase"
          >
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#1E8E5A] shrink-0" />
            <span>{instagramHandle}</span>
          </a>

          {/* LET'S TALK Button */}
          <button
            type="button"
            onClick={onLetsTalkClick}
            className="inline-flex items-center justify-center bg-[#F7F7F5] hover:bg-white active:scale-[0.99] transition-all text-[#141414] px-5 sm:px-7 py-3.5 text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase cursor-pointer"
          >
            LET'S TALK
          </button>

          {/* Square Hamburger Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={handleToggle}
            className="inline-flex items-center justify-center bg-[#F7F7F5] hover:bg-white active:scale-[0.99] transition-all text-[#141414] w-[42px] h-[42px] sm:w-[44px] sm:h-[44px] shrink-0 cursor-pointer"
          >
            {menuOpen ? (
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="square"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.5H13.5M2.5 8H13.5M2.5 11.5H13.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="square"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
