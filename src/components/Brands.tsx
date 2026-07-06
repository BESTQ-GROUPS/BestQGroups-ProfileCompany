import Image from "next/image";

export default function Brands() {
  const brands = [
    {
      name: "Anytime",
      title: "Perawatan Pribadi",
      logo: (
        <div className="text-3xl font-serif italic text-[#4B2E83] flex items-center">
          <Image
            src="/logo-anytime.png"
            alt="Anytime"
            width={650}
            height={650}
            className="w-full h-full object-cover"
          />
        </div>
      ),
      description: "Merek terpercaya untuk produk perawatan pribadi dan keluarga. Anytime hadir memberikan kenyamanan ekstra, keamanan yang teruji, serta perlindungan yang bisa diandalkan dalam aktivitas sehari-hari.",
    },
    {
      name: "NEOPLAST",
      title: "Perawatan Luka",
      logo: (
        <div className="text-3xl font-sans font-black tracking-widest text-black">
          <Image
            src="/logo-neoplast.png"
            alt="Neoplast"
            width={1500}
            height={1500}
            className="w-full h-full object-contain"
          />
        </div>
      ),
      description: "Spesialis perlindungan luka yang inovatif. Neoplast menawarkan plester medis dengan bahan elastis, kedap air, dan bersirkulasi udara optimal untuk mempercepat proses penyembuhan.",
    },
    {
      name: "BestQ MEDICAL",
      title: "Medis Profesional",
      logo: (
        <div className="flex flex-col items-center">
          <Image
            src="/logo-bestqmedical.png"
            alt="BestQ Medical"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      ),
      description: "Penyedia peralatan medis bersertifikat standar nasional dan internasional. BestQ Medical dirancang khusus untuk memenuhi kebutuhan di lingkungan kesehatan.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">

          <h3 className="text-5xl font-bold text-gray-900 mt-8 mb-2 text-left">Brand Kami</h3>
          <p className="text-gray-600 text-left">
            Kami menaungi berbagai merek terkemuka yang telah dipercaya untuk memenuhi kebutuhan perawatan kesehatan Anda dengan kualitas terbaik.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow bg-white">
              <div className="h-40 flex items-center justify-center bg-white p-6">
                {brand.logo}
              </div>
              <div className="bg-[#216BB3] p-8 grow">
                <h4 className="text-white font-bold text-lg mb-3 text-center">{brand.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed text-justify">
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
