"use client";

import Link from "next/link";

export default function Hero() {
  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const target = document.getElementById("features");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full h-250 flex flex-col items-center justify-center bg-blue-200 overflow-hidden bg-linear-to-b from-slate-100 via-blue-200 to-[#06468f]">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: "url('/hero1.jpg')",
          backgroundPosition: "center bottom",
        }}
      />

      <div className="absolute inset-0 bg-white/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-15">
        <h1 className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm mb-6">
          Menyediakan solusi peralatan medis terpadu dengan standar kualitas internasional
        </h1>
        <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-slate-700 font-medium mb-4">
          Mendukung pelayanan kesehatan yang lebih baik di seluruh Indonesia.
        </p>
        <p className="max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 font-light mb-10">
          BestQ Medical berkomitmen menghadirkan produk kesehatan yang inovatif, terpercaya, dan sesuai kebutuhan fasilitas kesehatan modern.
        </p>
        <Link
          href="/tentang-kami"
          className="bg-transparent backdrop-blur-sm text-white px-14 py-2 rounded-full border border-white font-semibold transition-all duration-300 shadow-md hover:bg-[#06468f] hover:text-white hover:scale-105 hover:shadow-lg active:scale-95"
        >
          Selengkapnya
        </Link>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-26 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#Features"
          onClick={scrollToFeatures}
          className="flex items-center justify-center bg-white rounded-full p-3 shadow-lg text-gray-400 hover:text-[#06468f] hover:scale-110 transition-all duration-300 border border-gray-100 cursor-pointer"
          aria-label="Scroll to Features"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
