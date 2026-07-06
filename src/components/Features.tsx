import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="py-25 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Feature 1 */}
        <div className="flex items-start gap-4 max-w-md">
          <div className="text-gray-800 p-1 shrink-0">
            <Image src="/Surgery.png" alt="Icon 1" width={100} height={100} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1 text-sm">Non-Elektromedis Steril</h3>
            <p className="text-xs text-gray-500 leading-relaxed mt-2 text-justify">
              Peralatan medis sekali pakai dengan standar kebersihan tertinggi untuk jaminan bebas infeksi.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4 max-w-md">
          <div className="text-gray-800 p-1 shrink-0">
            <Image src="/Stethoscope.png" alt="Icon 2" width={100} height={100} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1 text-sm">Non-Elektromedis Non-Steril</h3>
            <p className="text-xs text-gray-500 leading-relaxed mt-2 text-justify">
              Alat dan perlengkapan kesehatan esensial yang dirancang untuk daya tahan ekstra dan keandalan sehari-hari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
