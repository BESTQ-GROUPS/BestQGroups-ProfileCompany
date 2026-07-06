"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionItems = [
    {
      title: "Kualitas Terjamin (Best Quality)",
      content: "Seluruh produk kami melewati uji kontrol kualitas yang ketat dan bersertifikat internasional untuk menjamin keamanan dan efektivitas penggunaan medis."
    },
    {
      title: "Layanan Purna Jual Unggul",
      content: "Kami menyediakan dukungan teknis dan layanan perbaikan cepat tanggap untuk memastikan operasional fasilitas kesehatan Anda tidak terhambat."
    },
    {
      title: "Distribusi Cepat & Luas",
      content: "Dengan jaringan distribusi yang menjangkau seluruh pelosok Nusantara, kami memastikan setiap pesanan sampai tepat waktu dalam kondisi prima."
    },
    {
      title: "Inovasi Berkelanjutan",
      content: "BestQ Medical selalu mengikuti perkembangan teknologi medis terbaru untuk menghadirkan solusi kesehatan yang lebih efisien dan modern."
    }
  ];

  return (
    <section className="bg-[#004AAD] py-20 text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Mengapa Memilih<br />BestQ Medical?
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 text-justify">
              Kami berkomitmen untuk menyediakan peralatan medis berkualitas tinggi 
              dengan standar internasional. Dengan pengalaman bertahun-tahun, BestQ Medical
              telah menjadi mitra terpercaya bagi rumah sakit dan klinik di seluruh Indonesia,
              memastikan keselamatan dan kenyamanan setiap pasien.
            </p>
            <button
              onClick={() => window.location.href = "/kontak"}
              className="bg-[#FE4802] hover:bg-[#f0561a] text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-sm inline-flex items-center gap-2 border border-transparent cursor-pointer scale-100 hover:scale-105">
              Hubungi Kami
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col gap-3">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="bg-white rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full text-left px-6 py-4 flex justify-between items-center transition-colors ${isOpen ? 'border-b border-gray-100 bg-gray-50' : 'hover:bg-gray-50 cursor-pointer'}`}
                  >
                    <span className="font-bold text-gray-900 text-md cursor-pointer">{item.title}</span>
                    <div className={`rounded-full p-1 transition-colors ${isOpen ? 'bg-[#FE4802] text-white' : 'bg-black text-white'}`}>
                      <motion.svg 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </motion.svg>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 py-4 text-sm text-gray-600 leading-relaxed bg-white text-justify">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
