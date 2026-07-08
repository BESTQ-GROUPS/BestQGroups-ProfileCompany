"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Link from "next/link";

export const partners = [
  {
    name: "Kemenkes RS Fatmawati",
    logo: "/partners/kemenkes-fatmawati.png",
    width: 220,
    height: 120,
    url: "https://rs-fatmawati.go.id/"
  },
  {
    name: "Hermina Healthcare Group",
    logo: "/partners/hermina.png",
    width: 220,
    height: 120,
    url: "https://herminahospitals.com/"
  },
  {
    name: "Rumah Sehat untuk Jakarta Pasar Rebo",
    logo: "/partners/rumah-sehat-jakarta.png",
    width: 220,
    height: 120,
    url: "https://rsudpasarrebo.jakarta.go.id/"
  },
  {
    name: "RSUD Kota Tangerang",
    logo: "/partners/rsud-kota-tangerang.png",
    width: 220,
    height: 120,
    url: "https://rsud.tangerangkota.go.id/"
  },
  {
    name: "Anara Medical",
    logo: "/partners/anara-medical.png",
    width: 220,
    height: 120,
    url: "https://anara.co.id"
  },
  {
    name: "Rajawali Nusindo",
    logo: "/partners/rajawali-nusindo.png",
    width: 320,
    height: 120,
    url: "https://nusindo.co.id/"
  },
  {
    name: "PT Deva Industries",
    logo: "/partners/deva-industries.png",
    width: 220,
    height: 120,
    url: "https://deva-industries.com/"
  },
  {
    name: "PT Deva Medika Indonesia",
    logo: "/partners/deva-medika-indonesia.png",
    width: 220,
    height: 120,
    url: "https://devamedika.com/"
  },
  {
    name: "PT Titan Alkesindo",
    logo: "/partners/titan-alkesindo.png",
    width: 220,
    height: 120,
    url: "https://titanalkesindo.com/"
  },
];

export default function PartnerMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Framer Motion value for the horizontal translation
  const x = useMotionValue(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Because we render exactly 2 sets of partners, one set is exactly half the total scroll width
        setContentWidth(containerRef.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    // Ensure images and fonts are loaded before calculating final width
    const timeout = setTimeout(updateWidth, 150);

    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timeout);
    };
  }, []);

  useAnimationFrame((t, delta) => {
    // Pause on hover or if width hasn't been calculated yet
    if (isHovered || contentWidth === 0) return;

    // Speed Calculation: we want 1 full loop (contentWidth) to take 30 seconds
    const durationInSeconds = 30;
    const velocity = contentWidth / durationInSeconds; // pixels per second

    // Calculate how much to move based on the time since last frame (delta in ms)
    const moveBy = velocity * (delta / 1000);

    const currentX = x.get();
    let newX = currentX - moveBy;

    // Seamless loop: once we have scrolled exactly the width of ONE set,
    // snap back instantly by that exact amount. Since the second set is identical,
    // the user will not notice the jump.
    if (newX <= -contentWidth) {
      newX += contentWidth;
    }

    x.set(newX);
  });

  return (
    <div
      className="w-full overflow-hidden mt-16 py-4 bg-transparent cursor-pointer border-y border-bestq-blue border-bw "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex items-center w-max"
        style={{ x }}
      >
        {/* We duplicate the array to allow a seamless infinite loop */}
        {[...partners, ...partners].map((partner, index) => (
          <Link
            key={`${partner.name}-${index}`}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kunjungi website ${partner.name}`}
            className="shrink-0 flex items-center justify-center mx-6.25 group"
          >
            <div className="relative h-11.25 md:h-27.5 w-45 md:w-55">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain transition-[opacity,transform] duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-105 filter-[brightness(0)_saturate(100%)_invert(18%)_sepia(98%)_saturate(2400%)_hue-rotate(205deg)_brightness(72%)_contrast(110%)] group-hover:filter-none!"
                sizes="(max-width: 768px) 180px, 220px"
              />
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
