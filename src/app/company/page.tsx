"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

export default function SplashScreen() {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(
    useTransform(scrollYProgress, [1, 0], [0.95, 1]),
    { stiffness: 150, damping: 25 }
  );

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      style={{ scale }}
      className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/image/coder00.mp4"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover rounded-xl"
        style={{
          transform: "translateZ(0)",
          willChange: "transform",
          imageRendering: "optimizeQuality" as any,
          backfaceVisibility: "hidden",
        }}
      />

      <div className="absolute bottom-6 left-6 flex gap-3">
        <button
          onClick={togglePlay}
          className="bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-md hover:bg-white/40 transition"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={toggleMute}
          className="bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-md hover:bg-white/40 transition"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </motion.div>
  );
}
