import React from "react";

interface MarqueeTickerProps {
  items?: string[];
  speed?: number; // seconds for one full loop
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  className?: string;
}

const DEFAULT_ITEMS = [
  "ORNAMENTAL AQUACULTURE",
  "SHOW-GRADE HALFMOON BETTA",
  "RAISED IN KERALA",
  "LIVING ART",
  "RARE FRESHWATER LINEAGES",
  "EST. 2024",
  "ARCHITECTURAL AQUASCAPES",
  "COLLECTORS EDITION",
];

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = DEFAULT_ITEMS,
  speed = 28,
  bgColor = "#141414",
  textColor = "#F7F7F5",
  accentColor = "#C81D77",
  borderTop = true,
  borderBottom = true,
  className = "",
}) => {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden select-none ${className}`}
      style={{
        backgroundColor: bgColor,
        borderTop: borderTop ? "1px solid #262626" : undefined,
        borderBottom: borderBottom ? "1px solid #262626" : undefined,
      }}
    >
      <div
        className="flex items-center whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 py-2.5 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{ color: textColor }}
          >
            {item}
            <span
              className="inline-block w-1.5 h-1.5 shrink-0"
              style={{ backgroundColor: i % 3 === 0 ? accentColor : "#1E8E5A" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;

