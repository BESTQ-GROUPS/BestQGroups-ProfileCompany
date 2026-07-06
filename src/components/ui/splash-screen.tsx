'use client';

import { useEffect, useState, memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Module-level flag — survives HMR (hot-reload) but resets on hard-refresh.
 *
 * Behaviour:
 *  • Hard-refresh (Ctrl+F5 / manual reload) → splash SHOWS (flag resets)
 *  • Hot-reload (file save during `npm run dev`) → splash SKIPPED (flag stays true)
 *  • Client-side navigation (Next.js Link) → splash SKIPPED (component stays mounted)
 */
let hasShownSplash = false;

const SplashScreen = memo(function SplashScreen() {
  const [remove, setRemove] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [loadingText, setLoadingText] = useState("MEMUAT SISTEM...");

  // Determine on mount whether splash should be displayed
  useEffect(() => {
    if (!hasShownSplash) {
      hasShownSplash = true;
      setShouldShow(true);
    }
  }, []);

  // Timer to hide splash after 3 seconds
  useEffect(() => {
    if (!shouldShow) return;

    const t1 = setTimeout(() => setLoadingText("MENGAMBIL DATA..."), 800);
    const t2 = setTimeout(() => setLoadingText("MENYIAPKAN ANTARMUKA..."), 1700);
    const t3 = setTimeout(() => setLoadingText("MEMULAI..."), 2500);

    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setRemove(true);
      document.body.style.overflow = 'unset';
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [shouldShow]);

  // Don't render anything if splash shouldn't show or has finished
  if (!shouldShow || remove) return null;

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        className="fixed inset-0 z-9999 overflow-hidden bg-white flex flex-col items-center justify-center px-6"
      >
        {/* Soft Radial Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 74, 173, 0.03) 0%, rgba(255, 255, 255, 1) 70%)"
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-md">

          {/* LOGO ANIMATION */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center mb-8"
          >
            <Image
              src="/logo-bestq.png"
              alt="PT Best Sinergi Indonesia Logo"
              width={180}
              height={180}
              priority
              className="object-contain"
            />
          </motion.div>

          {/* TEXT ANIMATION */}
          <div className="text-center overflow-hidden mb-12">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#06468f]"
            >
              PT BEST SINERGI INDONESIA
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-4 justify-center mt-3"
            >
              <div className="h-px w-12 bg-slate-200" />
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Peralatan Medis Terpadu
              </p>
              <div className="h-px w-12 bg-slate-200" />
            </motion.div>
          </div>

          {/* PROGRESS LINE */}
          <div className="relative w-64 h-1.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
            {/* Main Fill */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#004AAD]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            />
            {/* Scanning Glow effect */}
            <motion.div
              className="absolute top-0 left-0 h-full w-24"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "300%" }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* LOADING TEXT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 h-4 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={loadingText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] uppercase tracking-widest text-[#06468f] font-bold"
              >
                {loadingText}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* BOTTOM DECOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 flex flex-col items-center gap-1.5"
        >
          <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400 text-center font-medium">
            Katalog Produk & Profil Perusahaan
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#004AAD]/80">
            Developed by Pras Tio Rifki Wijaya
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

export default SplashScreen;