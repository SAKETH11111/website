"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const goFullscreen = () => {
    videoRef.current?.requestFullscreen?.();
  };

  return (
    <section className="relative bg-[#060908] pt-[clamp(7rem,14vw,11rem)] pb-[clamp(5rem,10vw,8rem)] overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-[800px] w-[1200px] rounded-full bg-[#1A5C3C]/8 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center text-white leading-[1.02]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
            letterSpacing: "-0.04em",
          }}
        >
          The Complete Vaha Case
        </motion.h1>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-[1080px] overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl shadow-black/50"
        >
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            playsInline
            preload="metadata"
            onClick={togglePlay}
            style={{ cursor: "pointer" }}
          >
            <source src="/Vaha-project.mp4" type="video/mp4" />
          </video>

          {/* Overlay when paused */}
          {!playing && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-black/30 cursor-pointer"
              onClick={togglePlay}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 transition-all duration-300 hover:scale-110 hover:bg-white/25"
              >
                <Play size={28} className="ml-1 text-white" fill="white" />
              </motion.div>
            </div>
          )}

          {/* Controls bar */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-colors hover:bg-white/20"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
              </button>
              <button
                onClick={toggleMute}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-colors hover:bg-white/20"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
              </button>
            </div>
            <button
              onClick={goFullscreen}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-colors hover:bg-white/20"
              aria-label="Fullscreen"
            >
              <Maximize size={13} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
