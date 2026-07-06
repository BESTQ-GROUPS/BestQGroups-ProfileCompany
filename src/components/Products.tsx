import Image from "next/image";

export default function Products() {
  const products = [
    {
      title: "Ranjang Pasien Elektrik",
      description: "Ranjang perawatan multifungsi dengan sistem kontrol elektrik presisi untuk kenyamanan maksimal dan kemudahan perawatan di rumah sakit.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sterilisator Autoclave",
      description: "Mesin sterilisasi uap bertekanan tinggi yang efektif membunuh patogen, menjamin instrumen medis selalu higienis dan aman digunakan.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Monitor Pasien Digital",
      description: "Alat pantau tanda-tanda vital dengan layar resolusi tinggi dan fitur peringatan cerdas untuk mendukung respons medis yang lebih cepat.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-10">
          <h2 className="text-5xl font-bold text-gray-900 mb-2 text-left">Produk Kami</h2>
          <p className="text-gray-600 text-left">Temukan berbagai ragam peralatan medis berkualitas tinggi yang kami sediakan untuk melengkapi fasilitas kesehatan Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg text-gray-900">{product.title}</h3>
                  <button className="text-bestq-blue hover:text-bestq-darkblue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <button className="text-bestq-blue text-sm font-semibold hover:underline">
                    Lihat detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
