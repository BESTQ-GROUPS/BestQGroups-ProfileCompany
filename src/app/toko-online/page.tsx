import Image from "next/image";

export default function TokoOnline() {
  return (
    <div className="flex flex-col bg-[#216BB3] flex-1 h-full">
      <div className="relative w-full h-[92vh] min-h-100 flex items-center justify-center overflow-hidden">

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#216BB3] mix-blend-multiply opacity-100 z-10" />

        {/* Background Image */}
        <Image
          src="/bg-4.jpg"
          alt="Keranjang Belanja"
          fill
          className="object-cover blur-[5px] scale-110"
        />

        <div className="absolute inset-0 bg-[#216BB3]/40 z-10" />

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
            Kami Segera Hadir
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-12">
            di Marketplace Kesayangan Anda!
          </p>

          <div className="flex flex-col gap-4 w-full max-w-sm">
            {/* Tokopedia */}
            <a
              href="https://tk.tokopedia.com/ZSCbmEsye/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg group cursor-pointer"
            >
              <div className="w-6 h-6 relative flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo-tokped.png"
                  alt="Tokopedia"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>

              Tokopedia
            </a>

            {/* Shopee */}
            <a
              href="https://shopee.co.id/bestqmed?mmp_pid=an_11345800754&uls_trackid=56180pl504nf&utm_campaign=-&utm_content=-&utm_medium=affiliates&utm_source=an_11345800754&utm_term=f5kf3ec17d8j"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg group cursor-pointer"
            >
              <div className="w-6 h-6 relative flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo-shopee.png"
                  alt="Shopee"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>

              Shopee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
