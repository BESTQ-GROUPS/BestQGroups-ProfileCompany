import PartnerMarquee from "./PartnerMarquee";

export default function Partners() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Title Badge */}
        <div className="inline-block border-2 border-[#004AAD] text-[#004AAD] rounded-full px-10 py-2 font-bold mb-16 scale-110">
          Mitra Kami
        </div>
        <div className="text-gray-600 max-w-3xl mx-auto">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#004AAD] text-justify">
            Kami bangga telah dipercaya oleh berbagai rumah sakit, klinik, dan institusi kesehatan terkemuka di seluruh Indonesia. Kolaborasi yang kuat ini adalah bukti nyata komitmen kami dalam menghadirkan produk alat kesehatan yang andal dan berkualitas tinggi.
          </p>
        </div>

        <PartnerMarquee />
      </div>
    </section>
  );
}
