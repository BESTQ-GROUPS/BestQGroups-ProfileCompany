"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ProductGallery({
  mainImage,
  thumbnails,
  productTitle,
}: {
  mainImage: string;
  thumbnails: string[];
  productTitle: string;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <>
      {/* Left: Images Gallery */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div 
          className="relative w-full aspect-4/3 bg-white rounded-xl overflow-hidden border border-gray-100 cursor-zoom-in group"
          onClick={() => setSelectedImage(mainImage)}
        >
          <Image
            src={mainImage}
            alt={productTitle}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {thumbnails.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {thumbnails.map((itemUrl, index) => (
              <div 
                key={index} 
                className="relative aspect-square bg-white rounded-lg overflow-hidden border border-gray-100 cursor-zoom-in hover:border-bestq-blue transition-colors group"
                onClick={() => setSelectedImage(itemUrl)}
              >
                <Image
                  src={itemUrl}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white p-3 bg-black/40 hover:bg-black/60 rounded-full transition-all cursor-pointer z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={28} />
          </button>
          
          <div 
            className="relative w-full h-full flex items-center justify-center cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedImage} 
              alt={productTitle} 
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
