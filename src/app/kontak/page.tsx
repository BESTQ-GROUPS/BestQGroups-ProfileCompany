"use client";

import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";

import { BsInstagram } from "react-icons/bs";
import { FaPhoneAlt, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Kontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [subjek, setSubjek] = useState("Pilih salah satu...");
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const sub = params.get("subject");
      if (sub) {
        setSubjek(sub);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (subjek === "Pilih salah satu...") {
      alert("Silakan pilih subjek terlebih dahulu.");
      return;
    }
    
    const body = `Nama: ${nama}%0D%0AEmail: ${email}%0D%0A%0D%0APesan:%0D%0A${pesan}`;
    window.location.href = `mailto:sales.bestq@gmail.com?subject=${encodeURIComponent(subjek)}&body=${body}`;
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-48 md:h-64 bg-bestq-blue overflow-hidden">
        <div className="absolute inset-0 bg-[#216BB3] mix-blend-multiply opacity-50 z-10" />
        <Image
          src="/bg-5.jpg"
          alt="Kontak Banner"
          width={1920}
          height={1080}
          className="w-full h-full object-cover transition-transform blur-[2px]"
        />
        <div className="absolute inset-0 bg-[#216BB3]/60 z-10" />
      </div>

      {/* Header Info */}
      <section className="py-12 px-4 text-center max-w-3xl mx-auto">
        <h4 className="inline-block px-4 py-1 rounded-full bg-blue-100 text-bestq-blue font-semibold text-sm mb-4">Kontak Kami</h4>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Terhubung Dengan Kami
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed text-justify">
          Kami siap membantu Anda. Jangan ragu untuk menghubungi tim layanan pelanggan kami jika Anda memiliki pertanyaan seputar produk, permintaan penawaran harga, atau dukungan teknis. Kami berkomitmen memberikan respons yang cepat dan solutif.
        </p>
      </section>

      {/* Contact Content Area */}
      <section className="bg-linear-to-b from-white via-[#004AAD]/10 to-[#004AAD] py-16 px-4 grow relative flex justify-center">
        <div className="container max-w-5xl">

          <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">

            {/* Left Column: Contact Info */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
              <h2 className="text-2xl font-bold text-[#004AAD] mb-4">Head Office</h2>
              <h3 className="font-semibold text-gray-600 mb-2">PT Best Sinergi Indonesia</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 text-justify">
                Jl. Raya Kebon Jeruk No. 27<br />
                Jakarta Barat, 11530<br />
                DKI Jakarta, Indonesia
              </p>

              <h2 className="text-xl font-bold text-[#004AAD] mb-6">Kontak Kami</h2>

              <div className="flex flex-col gap-5 mb-10">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="w-5 h-5 text-[#004AAD] shrink-0" />
                  <span className="text-sm font-medium text-gray-700">+62 813-1748-5351</span>
                </div>
                <div className="flex items-center gap-4">
                  <BiLogoGmail className="w-5 h-5 text-[#004AAD] shrink-0" />
                  <span className="text-sm font-medium text-gray-700">sales.bestq@gmail.com</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="text-[#004AAD] hover:text-[#18538f] transition-colors">
                  <BsInstagram className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Facebook" className="text-[#004AAD] hover:text-[#18538f] transition-colors">
                  <FaFacebookSquare className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Youtube" className="text-[#004AAD] hover:text-[#18538f] transition-colors">
                  <FaYoutube className="w-5 h-5 -ml-1" />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="p-8 md:p-12 md:w-1/2">
              <h2 className="text-[#004AAD] font-bold text-xl mb-6">Ajukan Pertanyaan via Email</h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">Nama</label>
                  <input type="text" required value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-1 focus:ring-[#004AAD]/30 transition-all placeholder:text-gray-300" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">Email</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-1 focus:ring-[#004AAD]/30 transition-all placeholder:text-gray-300" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">Subjek</label>
                  <div className="relative">
                    <select required value={subjek} onChange={(e) => setSubjek(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-1 focus:ring-[#004AAD]/30 transition-all text-gray-700 bg-white appearance-none cursor-pointer">
                      <option disabled>Pilih salah satu...</option>
                      <option value="Request Sample">Request Sample</option>
                      <option value="Kontak Umum">Kontak Umum</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1.5">Pesan</label>
                  <textarea required value={pesan} onChange={(e) => setPesan(e.target.value)} rows={4} placeholder="Pesan" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-1 focus:ring-[#004AAD]/30 transition-all placeholder:text-gray-300 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#216BB3] hover:bg-[#1a5592] text-white py-3 rounded-lg font-bold mt-2 transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer">
                  Kirim
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
