import { useRef, useState } from "react";

const videoUrls = [
  {
    title: "Big boys Porsche",
    url: "./videos/v1.mp4",
  },
  {
    title: "Everything Ends",
    url: "./videos/v6.mp4",
  },
  {
    title: "BMW E30",
    url: "./videos/v2.mp4",
  },
  {
    title: "GTA VI",
    url: "./videos/v3.mp4",
  },
  {
    title: "BMW M3",
    url: "./videos/v4.mp4",
  },
  {
    title: "The Porsche Tee",
    url: "./videos/v5.mp4",
  },
];

const DemoCards = () => {
  const [isPlaying, setIsPlaying] = useState({});
  const videoRef = useRef([]);

  const togglePlay = (idx) => {
    const video = videoRef.current[idx];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying((p) => ({ ...p, [idx]: true }));
    } else {
      video.pause();
      setIsPlaying((p) => ({ ...p, [idx]: false }));
    }
  };

  return (
    <>
      <div>
        <h3 className="font-sfpro mb-2 bg-linear-to-b from-neutral-800 to-neutral-500 bg-clip-text text-center text-4xl font-bold tracking-[-4px] text-transparent md:text-5xl dark:from-neutral-100 dark:to-neutral-800">
          Work That Speaks for Itself
        </h3>
        <p className="mx-auto max-w-sm text-center text-xs text-neutral-500 md:max-w-2xl md:text-sm">
          A selection of product animations, promo edits, and show-ready reels
          designed to elevate brands, creators, and podcasts. Every project is
          crafted from the ground up with timing, clarity, and visual
          storytelling that drives engagement.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
        {videoUrls.map((video, idx) => {
          return (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg"
            >
              <video
                ref={(el) => (videoRef.current[idx] = el)}
                src={video.url}
                className="h-96 w-full object-cover"
                controlsList="nodownload nofullscreen"
              />
              <button
                onClick={() => togglePlay(idx)}
                className={`absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 ${isPlaying[idx] ? "opacity-0" : "opacity-100"} md:opacity-0 ${isPlaying[idx] ? "backdrop-blur-none" : "backdrop-blur-sm"} transition-opacity duration-500 md:group-hover:opacity-100`}
              >
                {isPlaying[idx] ? (
                  <svg className="h-12 w-12 text-white" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6 19h4V5H6zm8-14v14h4V5h-4z"
                    />
                  </svg>
                ) : (
                  <h3 className="font-serif text-xl tracking-tight text-white">
                    {video.title}
                  </h3>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DemoCards;
