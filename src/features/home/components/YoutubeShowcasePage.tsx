import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, PerspectiveCard, StaggerGroup, StaggerItem } from "../../../components/animations";
import { MIDHULA_YOUTUBE_VIDEOS, type YouTubeVideoItem } from "../data/youtubeVideos";

export { MIDHULA_YOUTUBE_VIDEOS, type YouTubeVideoItem };

export interface YouTubeShowcasePageProps {
  channelName?: string;
  videos?: YouTubeVideoItem[];
  onBackHome?: () => void;
}

export const YouTubeShowcasePage: React.FC<YouTubeShowcasePageProps> = ({
  channelName = "MIDHULA FARM HUT",
  videos = MIDHULA_YOUTUBE_VIDEOS,
  onBackHome,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideoItem>(videos[0]);

  return (
    <div className="min-h-screen w-full bg-[#F7F7F5] text-[#141414] font-sans select-none">
      {/* Main Split-Screen Editorial Section */}
      <section id="youtube-showcase" className="relative w-full overflow-x-clip">
        {/* Subtle Diagonal Dashed Arc in Background */}
        <ScrollReveal
          delay={0.02}
          distance={0}
          depth={false}
          once={true}
          className="pointer-events-none absolute inset-0 w-full h-full z-0"
        >
          <svg
            aria-hidden="true"
            className="w-full h-full"
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 960 -40 Q 620 420 220 940"
              stroke="#1E8E5A"
              strokeOpacity="0.2"
              strokeWidth="1.25"
              strokeDasharray="6 6"
            />
          </svg>
        </ScrollReveal>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-14 pt-10 sm:pt-14 pb-24">
          {/* Editorial Header Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#DCDCD8]">
            <div>
              {onBackHome && (
                <button
                  type="button"
                  onClick={onBackHome}
                  className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase text-[#525250] hover:text-[#C81D77] transition-colors cursor-pointer mb-3"
                >
                  <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                  <span>RETURN HOME</span>
                </button>
              )}

              <ScrollReveal delay={0.06} distance={8} depth={false} once={true}>
                <div className="mb-3.5">
                  <span className="inline-block bg-[#1E8E5A] text-[#0A1F14] font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 leading-none">
                    05 // YOUTUBE CHANNEL ARCHIVE
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.12} distance={10} depth={true} once={true}>
                <h1 className="font-display text-[48px] sm:text-[66px] xl:text-[76px] leading-[0.94] tracking-[0.01em] uppercase text-[#141414]">
                  MOTION FROM THE FARM.
                </h1>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.18} distance={8} depth={false} once={true}>
              <p className="font-mono text-[10px] sm:text-[11px] leading-[1.65] tracking-[0.06em] text-[#525250] max-w-[300px] lg:pb-1">
                Select any reel in the index to load it in the sticky screening deck or open it
                directly on YouTube.
              </p>
            </ScrollReveal>
          </div>

          {/* Asymmetric Split Grid: Sticky Stage (7 cols) + Scrollable Reel Deck (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Sticky Screening Deck */}
            <div className="lg:col-span-7 lg:sticky lg:top-20">
              <PerspectiveCard
                className="w-full"
                revealDistance={12}
                delay={0.1}
                maxTilt={1.8}
                interactive={true}
                once={true}
              >
                <div className="w-full bg-[#141414] text-white border border-[#141414] shadow-[4px_4px_0px_#C81D77] overflow-hidden">
                  {/* Top Telemetry Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#141414] border-b border-[#262626] font-mono text-[10px] tracking-[0.14em] uppercase">
                    <div className="flex items-center gap-2.5 text-white">
                      <span className="w-2 h-2 rounded-full bg-[#C81D77]" />
                      <span>
                        REEL {selectedVideo.index} // {selectedVideo.durationLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-[#9E9E9A]">
                      <span>{selectedVideo.publishDate}</span>
                      <span className="hidden sm:inline">{selectedVideo.viewsLabel}</span>
                    </div>
                  </div>

                  {/* Embedded YouTube Player with smooth mode="wait" transition */}
                  <div className="relative w-full aspect-video bg-[#0D0D0D]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedVideo.videoId}
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.6 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${selectedVideo.videoId}?rel=0`}
                          title={selectedVideo.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Deck Footer Metadata & Action */}
                  <div className="p-5 sm:p-7 bg-[#141414] border-t border-[#262626] flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                    <div className="max-w-[460px]">
                      <div className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#1E8E5A] mb-1.5">
                        {channelName} // {selectedVideo.likesLabel}
                      </div>
                      <h2 className="font-display text-[26px] sm:text-[32px] leading-[1.02] uppercase text-white">
                        {selectedVideo.title}
                      </h2>
                    </div>

                    <a
                      href={selectedVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 bg-[#F7F7F5] hover:bg-white text-[#141414] font-mono text-[10px] font-bold tracking-[0.14em] uppercase px-4 py-3 shrink-0 transition-colors"
                    >
                      <span>YOUTUBE</span>
                      <svg
                        className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 9L9 3H4M9 3V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </PerspectiveCard>
            </div>

            {/* Right Column: Editorial Reel Index Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <StaggerGroup staggerDelay={0.05} delayChildren={0.08} once={true}>
                {videos.map((video) => {
                  const isActive = video.id === selectedVideo.id;
                  const indexColor =
                    video.accent === "magenta" ? "text-[#C81D77]" : "text-[#1E8E5A]";

                  return (
                    <StaggerItem key={video.id} distance={10} depth={true} className="w-full">
                      <PerspectiveCard
                        revealDistance={0}
                        maxTilt={1.8}
                        interactive={true}
                        once={true}
                        className="w-full"
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedVideo(video)}
                          className={`group w-full text-left flex items-stretch bg-[#141414] text-white border transition-all cursor-pointer overflow-hidden ${
                            isActive
                              ? "border-[#C81D77] shadow-[3px_3px_0px_#C81D77] bg-[#1C1C1C]"
                              : "border-[#262626] hover:border-[#454545] shadow-[3px_3px_0px_#1E8E5A]"
                          }`}
                        >
                          {/* Thumbnail Block */}
                          <div className="relative w-28 sm:w-36 shrink-0 bg-[#1F1F1F] overflow-hidden border-r border-[#262626]">
                            <img
                              src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                              alt={video.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute bottom-1.5 right-1.5 bg-[#141414]/90 text-white font-mono text-[9px] tracking-[0.1em] px-1.5 py-0.5 leading-none">
                              {video.durationLabel}
                            </span>
                          </div>

                          {/* Text & Telemetry Block */}
                          <div className="flex-1 p-3.5 sm:p-4 flex flex-col justify-between min-w-0">
                            <div>
                              <div className="flex items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.12em] uppercase mb-1">
                                <span className={indexColor}>{video.index}</span>
                                <span className="text-[#8E8E8E] truncate">{video.viewsLabel}</span>
                              </div>

                              <h3 className="font-display text-[19px] sm:text-[21px] leading-[1.05] uppercase text-white line-clamp-2">
                                {video.title}
                              </h3>
                            </div>

                            <div className="mt-2.5 flex items-center justify-between font-mono text-[9px] tracking-[0.14em] uppercase text-[#9E9E9A]">
                              <span>{video.publishDate}</span>
                              <span
                                className={
                                  isActive
                                    ? "text-[#C81D77] font-bold"
                                    : "text-[#E6E6E3] group-hover:translate-x-0.5 transition-transform"
                                }
                              >
                                {isActive ? "ACTIVE" : "PLAY ▶"}
                              </span>
                            </div>
                          </div>
                        </button>
                      </PerspectiveCard>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouTubeShowcasePage;
