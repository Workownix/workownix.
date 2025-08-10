"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Jab route change ho, sound bajao
    const audio = new Audio("/page-flip.mp3");
    // User interaction ka wait na ho to error aayega
    audio.play().catch(err => console.warn("Sound play blocked until user interaction:", err));
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          transformOrigin: "left center",
          perspective: 2000,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
