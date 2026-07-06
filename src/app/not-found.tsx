"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function NotFound() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-[70vh] flex flex-col font-sans">

      <main className="flex-1 flex items-center justify-center py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 flex-1">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#004AAD]/10 border border-[#004AAD]/20 text-[#004AAD] text-sm font-bold mb-6 tracking-wide">
              404 ERROR
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#06468f] mb-6 tracking-tight leading-tight">
              Halaman Tidak Ditemukan
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Mohon maaf, halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau sedang dalam tahap perbaikan. Silakan cari informasi lain di bawah ini.
            </p>

            {/* SEARCH FORM */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row gap-3 mb-10 max-w-md"
            >
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#004AAD] transition-colors">
                  <FaSearch />
                </div>

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari produk atau informasi..."
                  className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 bg-white outline-none focus:border-[#004AAD] focus:ring-4 focus:ring-[#004AAD]/10 transition-all text-slate-800 shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="h-14 px-8 rounded-xl bg-[#004AAD] hover:bg-[#06468f] text-white font-bold shadow-md shadow-[#004AAD]/20 transition-all active:scale-95 whitespace-nowrap"
              >
                Cari
              </button>
            </form>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-[#004AAD] transition-colors font-semibold"
            >
              &larr; Kembali ke Beranda
            </Link>
          </div>

          {/* RIGHT VISUAL (Giant 404) */}
          <div className="order-1 lg:order-2 flex-1 flex justify-center lg:justify-end select-none">
            <div className="relative">
              {/* Medical Cross Accent */}
              <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/8 opacity-15">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48 text-[#006eff] rotate-45">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                </svg>
              </div>
              {/* Massive 404 Text */}
              <h2 className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-linear-to-br from-[#004AAD]/10 to-[#004AAD]/30 drop-shadow-sm">
                404
              </h2>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}