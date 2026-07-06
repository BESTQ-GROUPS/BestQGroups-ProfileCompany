"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingSampul() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fungsi untuk mengecek ukuran layar (768px adalah batas 'md' Tailwind)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Cek saat pertama kali dimuat
    checkMobile();

    // Cek setiap kali ukuran layar berubah (resize)
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Memantau seberapa jauh pengguna melakukan scroll saat div ini berada di layar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

 const yDesktop = useTransform(
  scrollYProgress,
  [0, 0.85],
  ["-40%", "87%"]
);

const yMobile = useTransform(
  scrollYProgress,
  [0, 0.85],
  ["-17%", "96%"]
);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-30 overflow-visible"
    >
      <motion.div
        style={{
          top: isMobile ? yMobile : yDesktop,
          left: "50%",
          x: "-50%",
        }}
        className="
          absolute
          w-screen
          max-w-7xl
          h-64
          sm:h-72
          md:h-80
          lg:h-120
          xl:h-150
          drop-shadow-[0_35px_60px_rgba(0,0,0,0.20)]
        "
      >
        <Image
          src="/sampul.png"
          alt="Sampul Produk Terbaik"
          fill
          sizes="(max-width: 1024px) 90vw, 896px"
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
