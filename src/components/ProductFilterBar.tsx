"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { MdOutlineRefresh } from "react-icons/md";


interface Category {
  id: string;
  name: string;
  slug: string;
}

interface ProductFilterBarProps {
  categories: Category[];
  currentCategory?: string;
  currentBrand?: string;
  currentSort?: string;
}

export default function ProductFilterBar({ currentCategory, currentBrand, currentSort }: ProductFilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      // Reset page when filter changes
      params.delete('page');
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="mb-8 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Filter Produk
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Sesuaikan pencarian produk berdasarkan kategori, merek, dan urutan tampilan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="Cari produk..." 
              defaultValue={searchParams.get("q") || ""}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const val = e.currentTarget.value;
                  if (val) {
                    router.push(`?${createQueryString("q", val)}`);
                  } else {
                    router.push(`?${createQueryString("q", "")}`);
                  }
                }
              }}
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bestq-blue focus:border-transparent text-sm text-gray-800"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            onClick={() => router.push("?")}
            className="group inline-flex items-center gap-2 rounded-lg border border-bestq-orange bg-bestq-orange px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:border-bestq-blue hover:bg-bestq-blue hover:shadow-md hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto justify-center"
          >
            <MdOutlineRefresh className="h-5 w-5 transition-transform duration-200 group-hover:rotate-180 cursor-pointer" />
            <span>Reset Filter</span>
          </button>
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-600">
          Kategori
        </h3>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() =>
              router.push(`?${createQueryString("category", "")}`)
            }
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
              !currentCategory
                ? "border-bestq-blue bg-bestq-blue text-white shadow-md"
                : "border-gray-200 bg-gray-50 text-gray-700 hover:border-bestq-blue hover:bg-blue-50 hover:text-bestq-blue cursor-pointer"
            )}
          >
            Lihat Semua
          </button>

          <button
            onClick={() =>
              router.push(`?${createQueryString("category", "non-elektromedis-steril")}`)
            }
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
              currentCategory === "non-elektromedis-steril"
                ? "border-bestq-blue bg-bestq-blue text-white shadow-md"
                : "border-gray-200 bg-gray-50 text-gray-700 hover:border-bestq-blue hover:bg-blue-50 hover:text-bestq-blue cursor-pointer"
            )}
          >
            Non-Elektromedis Steril
          </button>

          <button
            onClick={() =>
              router.push(`?${createQueryString("category", "non-elektromedis-non-steril")}`)
            }
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
              currentCategory === "non-elektromedis-non-steril"
                ? "border-bestq-blue bg-bestq-blue text-white shadow-md"
                : "border-gray-200 bg-gray-50 text-gray-700 hover:border-bestq-blue hover:bg-blue-50 hover:text-bestq-blue cursor-pointer"
            )}
          >
            Non-Elektromedis Non-Steril
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-200" />

      {/* Filter */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Brand */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-600">
            Brand
          </label>

          <div className="group relative">
            <select
              value={currentBrand || ""}
              onChange={(e) =>
                router.push(`?${createQueryString("brand", e.target.value)}`)
              }
              className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-sm font-medium text-gray-700 outline-none transition-all duration-200 hover:border-gray-300 focus:border-bestq-blue focus:ring-4 focus:ring-bestq-blue/10 cursor-pointer"
            >
              <option value="">Semua Brand</option>
              <option value="BestQ Medical">BestQ Medical</option>
              <option value="Anytime">Anytime</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-out group-focus-within:rotate-180 group-focus-within:text-bestq-blue"
            />
          </div>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-600">
            Urutkan
          </label>

          <div className="group relative">
            <select
              value={currentSort || "newest"}
              onChange={(e) =>
                router.push(`?${createQueryString("sort", e.target.value)}`)
              }
              className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-sm font-medium text-gray-700 outline-none transition-all duration-200 hover:border-gray-300 focus:border-bestq-blue focus:ring-4 focus:ring-bestq-blue/10 cursor-pointer"
            >
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
              <option value="name_asc">Nama (A-Z)</option>
              <option value="name_desc">Nama (Z-A)</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-out group-focus-within:rotate-180 group-focus-within:text-bestq-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
