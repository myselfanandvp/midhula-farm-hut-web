import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { ScrollReveal, PerspectiveCard, CutoutReveal } from "../../../components/animations";
import jumpingFishVideo from "../../../assets/videos/jumping_fish_hero.mp4";

export interface HeroSectionProps {
  /** Betta photograph fallback when the hero video is unavailable */
  fishImageSrc?: string;
  /** Video file URL or imported asset to scrub frame-by-frame on scroll */
  videoSrc?: string;
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  fishImageSrc = "/images/instagram/gallery-tank-1.jpg",
  videoSrc = jumpingFishVideo || "/videos/jumping_fish_hero.mp4",
  onExploreClick,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const playheadProgress = useMotionValue(0);

  const targetTimeRef = useRef<number>(0);
  const easedTimeRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  // Scroll tracking across the extended scroll distance (300vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const prefersReducedMotion = useReducedMotion();
  const copyY = useTransform(playheadProgress, [0, 1], [0, 160]);
  const copyOpacity = useTransform(playheadProgress, [0, 1], [1, 0]);
  const endDimOpacity = useTransform(playheadProgress, [0.58, 1], [0, 0.5]);

  // Ease the playhead toward the latest scroll position. Seeking only after the
  // previous frame has decoded prevents a backlog of stale decoder requests.
  const advancePlayhead = () => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;
    if (video.seeking) return;

    const nextTime = easedTimeRef.current + (targetTimeRef.current - easedTimeRef.current) * 0.22;
    easedTimeRef.current = nextTime;
    playheadProgress.set(nextTime / video.duration);
    if (Math.abs(video.currentTime - nextTime) > 0.035) video.currentTime = nextTime;
    if (Math.abs(targetTimeRef.current - nextTime) > 0.02) {
      rafRef.current = requestAnimationFrame(advancePlayhead);
    }
  };

  const handleSeeked = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(advancePlayhead);
  };

  // Handle video metadata loaded
  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setIsVideoReady(true);

      // Render the very first frame immediately
      const initialProgress = scrollYProgress.get();
      const initialTime = Math.max(0, Math.min(initialProgress * video.duration, video.duration - 0.02));
      targetTimeRef.current = initialTime;
      easedTimeRef.current = initialTime;
      playheadProgress.set(initialTime / video.duration);
      video.currentTime = initialTime;
    }
  };

  // Synchronize scroll progression with video currentTime via rAF
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const video = videoRef.current;
    if (video && video.duration && !isNaN(video.duration)) {
      targetTimeRef.current = Math.max(0, Math.min(latest * video.duration, video.duration - 0.02));
    } else {
      playheadProgress.set(latest);
    }
    rafRef.current = requestAnimationFrame(advancePlayhead);
  });

  // Cleanup timers and rAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const target = document.getElementById("editorial-intro") || document.getElementById("aquatic-portfolio");
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative w-full h-[280vh] sm:h-[300vh] bg-[#141414] text-[#F7F7F5] select-none font-sans"
    >
      {/* Pinned Viewport Container (Sticky top-0 h-screen w-full) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Full-bleed Background Video Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden bg-[#141414]">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              aria-hidden="true"
              onLoadedMetadata={handleLoadedMetadata}
              onSeeked={handleSeeked}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                isVideoReady ? "opacity-100" : "opacity-40"
              }`}
            />
          ) : null}

          {/* Fallback image cutout if videoSrc is absent */}
          {!videoSrc && fishImageSrc ? (
            <div className="pointer-events-none absolute right-0 bottom-0 z-10 w-[85%] sm:w-[62%] md:w-[54%] max-w-[740px] flex justify-end items-end">
              <CutoutReveal
                delay={0.16}
                duration={0.8}
                floatDistance={6}
                once={true}
                className="w-full flex justify-end items-end"
              >
                <img
                  src={fishImageSrc}
                  alt="White Halfmoon Betta with flowing fins"
                  className="w-full h-auto object-contain object-bottom drop-shadow-[-12px_16px_28px_rgba(0,0,0,0.12)]"
                />
              </CutoutReveal>
            </div>
          ) : null}

          {/* Subtle bottom vignette only — keeps video fully visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent pointer-events-none" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/55"
            style={{ opacity: prefersReducedMotion ? 0 : endDimOpacity }}
          />
        </div>

        {/* Foreground Content Container (Overlaid on top of the video) */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-14 pt-10 sm:pt-16 pb-6 flex-1 flex flex-col justify-center">
          {/* Dark Editorial Hero Card */}
          <PerspectiveCard
            className="relative z-20 w-full max-w-[760px]"
            revealDistance={12}
            delay={0.05}
            maxTilt={2.2}
            interactive={false}
            once={true}
          >
            <motion.div
              style={prefersReducedMotion ? undefined : { y: copyY, opacity: copyOpacity }}
              className="w-full origin-center bg-[#101010]/45 px-7 py-9 text-white shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:px-12 sm:py-12"
            >
              {/* Top Metadata Eyebrow Row */}
              <ScrollReveal delay={0.08} distance={8} depth={false} once={true}>
                <div className="flex flex-wrap items-center gap-3 mb-7 font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase">
                  <span className="inline-block bg-[#1E8E5A] text-[#0A1F14] font-bold px-2.5 py-1 leading-none shadow-[2px_2px_0px_rgba(20,20,20,0.3)]">
                    EST. 2024 // ORNAMENTAL AQUACULTURE
                  </span>
                  <span className="text-[#A3A3A3] font-medium">KERALA EDITORIAL EDITION</span>
                </div>
              </ScrollReveal>

              {/* Display Headline */}
              <ScrollReveal delay={0.15} distance={10} depth={true} once={true}>
                <h1 className="hero-headline mb-6 font-display text-[54px] leading-[0.94] tracking-[0.01em] text-white sm:text-[76px] md:text-[84px]">
                  <span className="text-shimmer">DISCOVER A</span>
                  <br />
                  <span className="text-shimmer">WORLD BELOW.</span>
                </h1>
              </ScrollReveal>

              {/* Supporting Description */}
              <ScrollReveal delay={0.22} distance={10} depth={false} once={true}>
                <p className="text-[#B8B8B8] text-[14px] sm:text-[16px] leading-[1.6] max-w-[420px] mb-9 font-normal">
                  Show-grade Halfmoon Bettas, rare freshwater lineages, and architectural aquascapes bred
                  for collectors.
                </p>
              </ScrollReveal>

              {/* CTA Button & Micro-Copy */}
              <ScrollReveal delay={0.28} distance={10} depth={false} once={true}>
                <div className="flex flex-wrap items-center gap-5">
                  <button
                    type="button"
                    onClick={handleExploreClick}
                    className="group inline-flex items-center gap-3 bg-[#C81D77] hover:bg-[#b01768] active:scale-[0.99] transition-all text-white font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase px-6 py-4 cursor-pointer shadow-[3px_3px_0px_#141414]"
                  >
                    <span>EXPLORE SPECIES</span>
                    {/* Diagonal Down-Right Arrow */}
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 2.5L11.5 11.5M11.5 11.5V4.5M11.5 11.5H4.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="square"
                      />
                    </svg>
                  </button>

                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#8E8E8E]">
                    08 CURATED LINEAGES
                  </span>
                </div>
              </ScrollReveal>
            </motion.div>
          </PerspectiveCard>
        </div>

        {/* Bottom Brutalist Status & Scrub Bar */}
        <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 sm:px-14 pb-5 sm:pb-7 flex items-center justify-between gap-4">
          {/* Coordinates Badge */}
          <ScrollReveal delay={0.32} distance={8} depth={false} once={true}>
            <div className="inline-flex items-center gap-2.5 bg-[#141414]/90 backdrop-blur-xs border border-[#333333] px-3.5 py-1.5 font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase text-[#E5E5E5]">
              <span className="w-2 h-2 rounded-full bg-[#C81D77] shrink-0 animate-pulse" />
              <span>KERALA_FARM_01 // 10.8505° N, 76.2711° E</span>
            </div>
          </ScrollReveal>

          {/* Central Scroll Hint Indicator */}
          <div className="hidden md:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase text-[#999999] bg-[#141414]/80 px-3 py-1 border border-[#2B2B2B]">
            <span className="animate-bounce">↓</span>
            <span>{scrollProgress >= 0.96 ? "SCROLL FOR NEXT SECTION" : "SCROLL TO PLAY VIDEO"}</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
