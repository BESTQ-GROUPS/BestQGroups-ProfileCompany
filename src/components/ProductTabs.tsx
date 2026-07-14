"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Specification {
  label: string;
  value: string;
}

interface UsageInstruction {
  id: string;
  instruction: string;
  sortOrder: number;
}

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string | null;
  createdAt: Date | null;
}

interface ProductTabsProps {
  description: string | null;
  specifications: Specification[];
  usageInstructions: UsageInstruction[];
  reviews: Review[];
}

export default function ProductTabs({ description, specifications, usageInstructions, reviews }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"deskripsi" | "spesifikasi" | "cara penggunaan" | "ulasan">("deskripsi");

  return (
    <div className="flex flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-8 mb-4">
        <button
          onClick={() => setActiveTab("deskripsi")}
          className={cn(
            "pb-3 border-b-2 font-medium text-sm transition-colors cursor-pointer",
            activeTab === "deskripsi"
              ? "border-bestq-blue text-bestq-blue font-bold"
              : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Deskripsi
        </button>
        <button
          onClick={() => setActiveTab("spesifikasi")}
          className={cn(
            "pb-3 border-b-2 font-medium text-sm transition-colors cursor-pointer",
            activeTab === "spesifikasi"
              ? "border-bestq-blue text-bestq-blue font-bold"
              : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Spesifikasi
        </button>
        <button
          onClick={() => setActiveTab("cara penggunaan")}
          className={cn(
            "pb-3 border-b-2 font-medium text-sm transition-colors cursor-pointer",
            activeTab === "cara penggunaan"
              ? "border-bestq-blue text-bestq-blue font-bold"
              : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Cara Penggunaan
        </button>
        <button
          onClick={() => setActiveTab("ulasan")}
          className={cn(
            "pb-3 border-b-2 font-medium text-sm transition-colors cursor-pointer",
            activeTab === "ulasan"
              ? "border-bestq-blue text-bestq-blue font-bold"
              : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          Ulasan
        </button>
      </div>
      <div className="border-b border-bestq-blue/40"></div>

      {/* Tab Content */}
      <div className="min-h-50 mb-10">
        {activeTab === "deskripsi" && (
          <div className="text-gray-600 leading-relaxed text-justify text-sm md:text-base animate-in fade-in duration-300">
            {description || "Deskripsi tidak tersedia."}
          </div>
        )}

        {activeTab === "spesifikasi" && (
          <div className="animate-in fade-in duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4"></h3>
            {specifications && specifications.length > 0 ? (
              <table className="w-full border-collapse">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4 bg-gray-50 font-medium text-gray-600 w-1/3">{spec.label}</td>
                      <td className="py-3 px-4 text-gray-800">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-sm">Belum ada data spesifikasi untuk produk ini.</p>
            )}
          </div>
        )}

        {activeTab === "cara penggunaan" && (
          <div className="animate-in fade-in duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4"></h3>
            {usageInstructions && usageInstructions.length > 0 ? (
              <div className="text-gray-700 text-sm md:text-base leading-relaxed bg-gray-50 p-6 rounded-lg border border-gray-100">
                <ul className="list-decimal pl-5 space-y-2">
                  {usageInstructions.map(instruction => (
                    <li key={instruction.id}>
                      {/* Using whitespace-pre-wrap to respect newlines if any */}
                      <span className="whitespace-pre-wrap">{instruction.instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-gray-500 text-sm p-6 bg-gray-50 rounded-lg border border-dashed border-gray-200 text-center">
                Maaf, saat ini belum ada informasi mengenai cara penggunaan produk ini.
              </div>
            )}
          </div>
        )}

        {activeTab === "ulasan" && (
          <div className="animate-in fade-in duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4"></h3>
            {reviews && reviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviews.map(review => (
                  <div key={review.id} className="bg-white border border-gray-100 shadow-sm p-5 rounded-xl flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900">{review.userName}</h4>
                        <span className="text-xs text-gray-400">
                          {review.createdAt
                            ? new Date(review.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
                            : 'Baru saja'
                          }
                        </span>
                      </div>
                      <div className="flex gap-1 text-bestq-blue">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke={i < review.rating ? "none" : "currentColor"} className="w-4 h-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    {review.comment && <p className="text-gray-600 text-sm mt-1 text-justify">{review.comment}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-500 text-sm p-6 bg-gray-50 rounded-lg border border-dashed border-gray-200 text-center">
                Ulasan akan segera hadir. Jadilah yang pertama memberikan ulasan untuk produk ini!
              </div>
            )}
          </div>
        )}
      </div>
      <div className="border-b border-bestq-blue/40 mb-4"></div>
    </div>
  );
}
