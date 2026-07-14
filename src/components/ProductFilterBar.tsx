"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

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

export default function ProductFilterBar({ categories, currentCategory, currentBrand, currentSort }: ProductFilterBarProps) {
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
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Filter Produk
          </h2>
          <p className="text-sm text-gray-500">
            Temukan produk sesuai kategori, brand, dan urutan yang Anda inginkan.
          </p>
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
      <div className="my-6 border-t border-gray-100" />

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
