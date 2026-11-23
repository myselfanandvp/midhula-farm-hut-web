import React from "react";

/**
 * Subtle film-grain noise overlay applied over the whole page.
 * Uses an inline SVG feTurbulence filter — zero external dependencies.
 * Opacity kept very low (~0.025) so it reads as texture, not distortion.
 */
export const NoiseOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9990] w-full h-full"
      style={{ opacity: 0.03, mixBlendMode: "overlay" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="w-full h-full"
      >
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>
    </div>
  );
};

export default NoiseOverlay;

