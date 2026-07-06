import Image from "next/image";
import Link from "next/link";


export default function ProdukList() {
  const products = Array(6).fill({
    title: "Alat Medis Berkualitas",
    description: "Peralatan kesehatan berstandar internasional yang dirancang khusus untuk memberikan keamanan dan keandalan operasional jangka panjang.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  });

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner Image */}
      <div className="relative w-full h-48 md:h-64 bg-bestq-blue overflow-hidden">
        <div className="absolute inset-0 bg-[#216BB3]/60 mix-blend-multiply z-10" />
        <Image
          src="/bg-3.jpg"
          alt="Tim sedang meeting"
          width={1920}
          height={1080}
          className="w-full h-full object-cover transition-transform blur-[2px] "
        />
        <div className="absolute inset-0 bg-[#216BB3]/60 z-10" />
      </div>

      {/* Header Section */}
      <section className="py-12 px-4 text-center max-w-3xl mx-auto">
        <h4 className="inline-block px-4 py-1 rounded-full bg-blue-100 text-bestq-blue font-semibold text-sm mb-4">Produk Kami</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Katalog Produk Medis
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Jelajahi portofolio lengkap produk kesehatan kami. Dari perlengkapan perawatan pribadi hingga instrumen klinis profesional, semua tersedia dengan jaminan kualitas terbaik.
        </p>
      </section>

      {/* Brands Cards */}
      <section className="pb-8 px-4 mt-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-16">
            {/* Anytime */}
            <div className="bg-[#f8f9fb] rounded-2xl p-8 pt-14 text-center relative transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 w-20 h-20 flex items-center justify-center p-3">
                <Image
                  src="/logo-anytime.png"
                  alt="Anytime"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="font-bold text-[#1a202c] text-lg mb-3">Perawatan Pribadi</h4>
              <p className="text-[#64748b] text-sm leading-relaxed text-justify">
                Solusi kesehatan pribadi dan keluarga yang dirancang untuk kenyamanan, keamanan, dan keandalan setiap saat.
              </p>
            </div>

            {/* Neoplast */}
            <div className="bg-[#f8f9fb] rounded-2xl p-8 pt-14 text-center relative transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 w-20 h-20 flex items-center justify-center p-3">
                <Image
                  src="/logo-neoplast.png"
                  alt="Neoplast"
                  width={64}
                  height={64}
                  className="w-full h-full object-none"
                />
              </div>
              <h4 className="font-bold text-[#1a202c] text-lg mb-3">Perawatan Luka</h4>
              <p className="text-[#64748b] text-sm leading-relaxed text-justify">
                Perlindungan optimal untuk berbagai jenis luka dengan bahan elastis, kedap air, dan sirkulasi udara yang baik.
              </p>
            </div>

            {/* BestQ Medical */}
            <div className="bg-[#f8f9fb] rounded-2xl p-8 pt-14 text-center relative transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 w-20 h-20 flex items-center justify-center p-3">
                <Image
                  src="/logo-bestqmedical.png"
                  alt="BestQ Medical"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-[#1a202c] text-lg mb-3">Medis Profesional</h4>
              <p className="text-[#64748b] text-sm leading-relaxed text-justify">
                Alat kesehatan bersertifikat untuk kebutuhan klinik dan rumah sakit dengan standar kualitas tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Product Grid */}
      <section className="py-8 px-4 mb-16">
        <div className="container mx-auto max-w-6xl">

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              <button className="whitespace-nowrap px-6 py-2 bg-white border border-gray-200 text-gray-800 text-sm font-semibold rounded shadow-sm">
                Lihat Semua
              </button>
              <button className="whitespace-nowrap px-6 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded hover:bg-gray-200 transition-colors">
                Non-Elektromedis Steril
              </button>
              <button className="whitespace-nowrap px-6 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded hover:bg-gray-200 transition-colors">
                Non-Elektromedis Non-Steril
              </button>
            </div>

            <div className="w-full md:w-auto">
              <select className="w-full md:w-48 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded outline-none cursor-pointer">
                <option>Brand</option>
                <option>Anytime</option>
                <option>Neoplast</option>
                <option>BestQ Medical</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="h-56 overflow-hidden relative bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-lg text-gray-900">{product.title}</h3>
                    <button className="text-gray-400 hover:text-bestq-blue transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <Link href="/produk/1" className="inline-block border border-bestq-blue text-bestq-blue px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-bestq-blue hover:text-white transition-colors">
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-gray-200 mt-12 pt-6">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              Sebelumnya
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <button className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-gray-900">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full font-medium text-gray-500 hover:bg-gray-100 transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full font-medium text-gray-500 hover:bg-gray-100 transition-colors">3</button>
              <span className="text-gray-400 px-1">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-full font-medium text-gray-500 hover:bg-gray-100 transition-colors">8</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full font-medium text-gray-500 hover:bg-gray-100 transition-colors">9</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full font-medium text-gray-500 hover:bg-gray-100 transition-colors">10</button>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Selanjutnya
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
