import React, { useState } from "react";

export interface YouTubeVideoItem {
  id: string;
  videoId: string;
  index: string;
  title: string;
  durationLabel: string;
  publishDate: string;
  viewsLabel: string;
  likesLabel: string;
  youtubeUrl: string;
  accent: "magenta" | "green";
}

export const MIDHULA_YOUTUBE_VIDEOS: YouTubeVideoItem[] = [
  {
    id: "polar-pond",
    videoId: "HSs3koB9ecU",
    index: "01",
    title: "Polar നെ കുളത്തിലിട്ടപ്പോൾ 😍#shorts",
    durationLabel: "00:59",
    publishDate: "2026-11-15",
    viewsLabel: "40,636 VIEWS",
    likesLabel: "946 LIKES",
    youtubeUrl: "http://www.youtube.com/watch?v=HSs3koB9ecU",
    accent: "magenta",
  },
  {
    id: "best-fish-tanks",
    videoId: "Bir5t3jsShM",
    index: "02",
    title: "ഏറ്റവും നല്ല Fish Tanks #shorts",
    durationLabel: "00:59",
    publishDate: "2026-04-22",
    viewsLabel: "25,047 VIEWS",
    likesLabel: "1,204 LIKES",
    youtubeUrl: "http://www.youtube.com/watch?v=Bir5t3jsShM",
    accent: "green",
  },
  {
    id: "caught-all-shrimps",
    videoId: "u7BgD-WErpw",
    index: "03",
    title: "എല്ലാ Shrimps നേയും പിടിച്ചു #shorts",
    durationLabel: "00:58",
    publishDate: "2026-05-10",
    viewsLabel: "16,384 VIEWS",
    likesLabel: "921 LIKES",
    youtubeUrl: "http://www.youtube.com/watch?v=u7BgD-WErpw",
    accent: "magenta",
  },
  {
    id: "color-changing-guppies",
    videoId: "4BnqvuFP-fc",
    index: "04",
    title: "നിറം മാറുന്ന Guppies #shorts",
    durationLabel: "00:57",
    publishDate: "2026-01-30",
    viewsLabel: "19,350 VIEWS",
    likesLabel: "954 LIKES",
    youtubeUrl: "http://www.youtube.com/watch?v=4BnqvuFP-fc",
    accent: "green",
  },
  {
    id: "belly-full-of-eggs",
    videoId: "PR0cWPGPy9A",
    index: "05",
    title: "വയറു മുഴുവൻ മുട്ടകൾ😁 #shorts",
    durationLabel: "00:56",
    publishDate: "2025-07-13",
    viewsLabel: "51,773 VIEWS",
    likesLabel: "2,390 LIKES",
    youtubeUrl: "http://www.youtube.com/watch?v=PR0cWPGPy9A",
    accent: "magenta",
  },
  {
    id: "betta-breeding-day-2",
    videoId: "NgalzuGejxY",
    index: "06",
    title: "| Betta Breeding 2nd Day | guppy | Platy | Moina | Fighter |",
    durationLabel: "00:59",
    publishDate: "2023-06-24",
    viewsLabel: "121,677 VIEWS",
    likesLabel: "10,987 LIKES",
    youtubeUrl: "http://www.youtube.com/watch?v=NgalzuGejxY",
    accent: "green",
  },
  {
    id: "green-terror-grown",
    videoId: "iaGLBMiwpwc",
    index: "07",
    title:
      "| Green terror വലുതായി | Guppy |platy | #platy #guppy #monsterfish #crayfish #shorts #short",
    durationLabel: "00:59",
    publishDate: "2025-04-19",
    viewsLabel: "7,995 VIEWS",
    likesLabel: "563 LIKES",
    youtubeUrl: "http://www.youtube.com/watch?v=iaGLBMiwpwc",
    accent: "magenta",
  },
];

interface YouTubeShowcasePageProps {
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
      <section className="relative w-full overflow-x-clip">
        {/* Subtle Diagonal Dashed Arc in Background */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full z-0"
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

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-14 pt-10 sm:pt-14 pb-24">
          {/* Editorial Header Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#DCDCD8]">
            <div>
              <div className="mb-3.5">
                <span className="inline-block bg-[#1E8E5A] text-[#0A1F14] font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 leading-none">
                  05 // YOUTUBE CHANNEL ARCHIVE
                </span>
              </div>
              <h1 className="font-display text-[48px] sm:text-[66px] xl:text-[76px] leading-[0.94] tracking-[0.01em] uppercase text-[#141414]">
                MOTION FROM THE FARM.
              </h1>
            </div>

            <p className="font-mono text-[10px] sm:text-[11px] leading-[1.65] tracking-[0.06em] text-[#525250] max-w-[300px] lg:pb-1">
              Select any reel in the index to load it in the sticky screening deck or open it
              directly on YouTube.
            </p>
          </div>

          {/* Asymmetric Split Grid: Sticky Stage (7 cols) + Scrollable Reel Deck (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Sticky Screening Deck */}
            <div className="lg:col-span-7 lg:sticky lg:top-20">
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

                {/* Embedded YouTube Player */}
                <div className="relative w-full aspect-video bg-[#0D0D0D]">
                  <iframe
                    key={selectedVideo.videoId}
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?rel=0`}
                    title={selectedVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
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
                        d="M3 9L9 3M9 3H4M9 3V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Reel Index Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {videos.map((video) => {
                const isActive = video.id === selectedVideo.id;
                const indexColor = video.accent === "magenta" ? "text-[#C81D77]" : "text-[#1E8E5A]";

                return (
                  <button
                    key={video.id}
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
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouTubeShowcasePage;
