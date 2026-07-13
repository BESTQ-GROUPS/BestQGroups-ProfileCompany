"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

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
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
      {/* Categories */}
      <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto pb-2 lg:pb-0">
        <button
          onClick={() => router.push(`?${createQueryString('category', '')}`)}
          className={cn(
            "whitespace-nowrap px-10 py-2 text-sm rounded transition-colors",
            !currentCategory
              ? "bg-bestq-blue border border-gray-200 text-white font-semibold shadow-sm pointer"
              : "bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 cursor-pointer"
          )}
        >
          Lihat Semua
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => router.push(`?${createQueryString('category', cat.slug)}`)}
            className={cn(
              "whitespace-nowrap px-6 py-2 text-sm rounded transition-colors",
              currentCategory === cat.slug
                ? "bg-bestq-blue border border-gray-200 text-white font-semibold shadow-sm pointer"
                : "bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 cursor-pointer"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 w-full lg:w-auto">
        {/* Brand Filter */}
        <select
          value={currentBrand || ""}
          onChange={(e) => router.push(`?${createQueryString('brand', e.target.value)}`)}
          className="w-full md:w-48 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded outline-none cursor-pointer"
        >
          <option value="">Semua Brand</option>
          <option value="BestQ Medical">BestQ Medical</option>
          <option value="Anytime">Anytime</option>
        </select>

        {/* Sort Filter */}
        <select
          value={currentSort || "newest"}
          onChange={(e) => router.push(`?${createQueryString('sort', e.target.value)}`)}
          className="w-full md:w-48 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded outline-none cursor-pointer"
        >
          <option value="newest">Terbaru</option>
          <option value="oldest">Terlama</option>
          <option value="name_asc">Abjad (A-Z)</option>
          <option value="name_desc">Abjad (Z-A)</option>
        </select>
      </div>
    </div>
  );
}
