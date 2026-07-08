import Image from "next/image";

export default function Brands() {
  const brands = [
    {
      name: "Anytime",
      title: "Perawatan Pribadi",
      logoSrc: "/logo-anytime.png",
      description: "Merek terpercaya untuk produk perawatan pribadi dan keluarga. Anytime hadir memberikan kenyamanan ekstra, keamanan yang teruji, serta perlindungan yang bisa diandalkan dalam aktivitas sehari-hari.",
    },
    {
      name: "BestQ MEDICAL",
      title: "Bahan Medis Habis Pakai",
      logoSrc: "/logo-bestqmedical.png",
      description: "Penyedia peralatan medis bersertifikat standar nasional dan internasional. BestQ Medical dirancang khusus untuk memenuhi kebutuhan di lingkungan kesehatan.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center md:items-start">
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
            Brand Kami
          </h3>
          <p className="text-base md:text-lg text-gray-600 text-center md:text-left max-w-3xl">
            Kami menaungi berbagai merek terkemuka yang telah dipercaya untuk memenuhi kebutuhan perawatan kesehatan Anda dengan kualitas terbaik.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-[22px] overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Logo Container */}
              <div className="relative h-48 sm:h-56 md:h-64 flex items-center justify-center p-8 bg-white z-10">
                <div className="relative w-full h-full max-w-[75%] md:max-w-[70%] transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Text Container */}
              <div className="bg-[#f8f9fb] p-8 md:p-10 flex flex-col grow relative">
                {/* Aksen visual ringan untuk desain premium */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-gray-200 to-orange-500 opacity-75"></div>
                
                <h4 className="text-[#1a202c] font-bold text-xl md:text-2xl mb-4 text-center">
                  {brand.title}
                </h4>
                <p className="text-[#64748b] text-sm md:text-base leading-relaxed text-justify">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
