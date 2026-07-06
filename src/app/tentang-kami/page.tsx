import Image from "next/image";
import { PiHandHeart, PiHandsPraying, PiUsersFour} from "react-icons/pi";
import { GiScales, GiTargetArrows } from "react-icons/gi";
import { TbRibbonHealth } from "react-icons/tb";
import { BsLeaf } from "react-icons/bs";




export default function TentangKami() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner Image */}
      <div className="relative w-full h-64 md:h-80 bg-bestq-blue overflow-hidden">
        <div className="absolute inset-0 bg-[#216BB3] mix-blend-multiply opacity-50 z-10" />
        <Image
          src="/bg-2.jpg"
          alt="Tim sedang meeting"
          width={1920}
          height={1080}
          className="w-full h-full object-cover transition-transform blur-[2px] "
        />
        <div className="absolute inset-0 bg-[#216BB3]/40 z-10" />

      </div>



      {/* Intro Section */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-5xl rounded-3xl pb-15 pt-15 mx-auto hover:border hover:border-bestq-blue hover:shadow-bestq-blue hover:shadow-xl transition-all duration-50">

          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-bestq-blue font-semibold text-sm">
              Tentang Kami
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
              PT BestQ Sinergi Indonesia
            </h1>

            <div className="w-24 h-1 bg-bestq-blue mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-1 text-gray-600 leading-8 text-justify text-base">
            <p className="indent-12 text-lg">
              <b>PT BestQ Sinergi Indonesia</b> adalah perusahaan yang bergerak di bidang
              produksi dan distribusi alat kesehatan yang telah memperoleh izin resmi
              dari Direktur Jenderal Bina Kefarmasian dan Alat Kesehatan,
              Kementerian Kesehatan Republik Indonesia.
            </p>
            <p className="indent-12 text-lg">
              Alat kesehatan yang kami distribusikan meliputi alat kesehatan
              <b> non-steril non-elektromedis</b> dan <b>alat kesehatan non-elektromedis steril</b>.
              <b> BestQ Medical</b> berfokus pada pendistribusian alat-alat kesehatan serta
              peralatan bedah. Hal ini menjadikan <b>BestQ Medical</b> memiliki bisnis inti di
              bidang produk peralatan kamar operasi atau pakaian bedah.
            </p>
            <p className="indent-12 text-lg">
              Dengan tim profesional yang kompeten dalam produksi alat kesehatan,
              didukung manajemen yang berpengalaman serta tenaga penjualan yang ahli
              di bidangnya, kami berkomitmen memberikan pelayanan terbaik kepada
              seluruh mitra bisnis kami.
            </p>
            <p className="indent-12 text-lg">
              <b>BestQ Medical</b> juga memiliki jaringan distribusi yang luas dengan dukungan rantai
              pasok yang andal. Hal ini memungkinkan kami membangun sistem distribusi
              yang profesional, efisien, dan memberikan nilai tambah bagi seluruh
              mitra kami.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="bg-bestq-orange py-20 px-4">
        <div className="container mx-auto max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* VISI */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-10 flex flex-col h-full hover:border-bestq-blue hover:border-b-4 hover:shadow-black hover:shadow-xl transition-all duration-300">
              <h3 className="text-4xl font-bold text-slate-900 mb-6 text-center ">
                VISI
                <div className="border-t-2 w-1/5 border-slate-600 mx-auto mt-1 rounded-full"></div>
              </h3>

              <p className="text-slate-600 leading-7 text-lg text-justify">
                Bersinergi menjadi Perusahaan Nasional di bidang produksi dan
                distribusi alat kesehatan yang unggul, terpercaya, serta aktif
                membangun perkembangan bisnis dalam memberikan pelayanan terbaik.
              </p>

            </div>

            {/* MISI */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-10 h-full hover:border-bestq-blue hover:border-b-4 hover:shadow-black hover:shadow-xl transition-all duration-300">
              <h3 className="text-4xl font-bold text-slate-900 mb-5 text-center">
                MISI
                <div className="border-t-2 w-1/5 border-slate-600 mx-auto mt-1 rounded-full"></div>
              </h3>
              <ol className="space-y-1">

                <li className="flex gap-4">
                  <span className="text-slate-600 font-bold text-base">1.</span>
                  <p className="text-slate-600 leading-6 text-justify mt-0">
                    Menyediakan dan mendistribusikan produk alat kesehatan yang
                    berkualitas tinggi serta memenuhi standar nasional dan
                    internasional.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="text-slate-600 font-bold text-base">2.</span>
                  <p className="text-slate-600 leading-6 text-justify mt-0">
                    Menjalankan proses produksi dan distribusi alat kesehatan secara
                    profesional, efektif, dan sesuai dengan peraturan
                    perundang-undangan yang berlaku di Indonesia (CPAKB dan CDAKB).
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="text-slate-600 font-bold text-base">3.</span>
                  <p className="text-slate-600 leading-6 text-justify mt-0">
                    Mengembangkan sistem manajemen dan teknologi informasi yang
                    terintegrasi untuk menjamin efisiensi serta kecepatan pelayanan.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="text-slate-600 font-bold text-base">4.</span>
                  <p className="text-slate-600 leading-6 text-justify mt-0">
                    Meningkatkan kesejahteraan dan kompetensi karyawan sebagai aset
                    utama perusahaan.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="text-slate-600 font-bold text-base">5.</span>
                  <p className="text-slate-600 leading-6 text-justify mt-0">
                    Memberikan nilai tambah, kebanggaan, dan keuntungan yang
                    berkelanjutan bagi seluruh pemangku kepentingan (stakeholders).
                  </p>
                </li>
              </ol>
            </div>

          </div>
        </div>
      </section>

      {/* Nilai Perusahaan Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            {/* Left Content */}
            <div className="w-full md:w-1/2">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-bestq-blue font-semibold text-sm mb-3">
                PT BestQ Sinergi Indonesia
              </span>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nilai Perusahaan
              </h2>

              <p className="text-gray-600 leading-7 mb-8 text-justify text-base">
                Nilai-nilai perusahaan menjadi landasan dalam menjalankan setiap aktivitas
                bisnis secara profesional, terpercaya, dan berorientasi pada pelayanan
                terbaik.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-bestq-blue hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-bestq-blue transition-colors">
                    <PiHandsPraying className="w-6 h-6 text-bestq-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ketuhanan</h3>
                    <p className="text-sm text-gray-500 italic">Divinity</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-bestq-blue hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-bestq-blue transition-colors">
                    <PiUsersFour className="w-6 h-6 text-bestq-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kebersamaan</h3>
                    <p className="text-sm text-gray-500 italic">Togetherness</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-bestq-blue hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-bestq-blue transition-colors">
                    <GiScales className="w-6 h-6 text-bestq-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Keadilan</h3>
                    <p className="text-sm text-gray-500 italic">Justice</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-bestq-blue hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-bestq-blue transition-colors">
                    <TbRibbonHealth className="w-6 h-6 text-bestq-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kebaikan</h3>
                    <p className="text-sm text-gray-500 italic">Kindness</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-bestq-blue hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-bestq-blue transition-colors">
                    <GiTargetArrows className="w-6 h-6 text-bestq-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ketekunan</h3>
                    <p className="text-sm text-gray-500 italic">Diligence</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-bestq-blue hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-bestq-blue transition-colors">
                    <BsLeaf className="w-6 h-6 text-bestq-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kesabaran</h3>
                    <p className="text-sm text-gray-500 italic">Patience</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-bestq-blue hover:shadow-md transition-all sm:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-bestq-blue transition-colors">
                    <PiHandHeart className="w-6 h-6 text-bestq-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kerendahan Hati</h3>
                    <p className="text-sm text-gray-500 italic">Humility</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Collage */}
            <div className="w-full md:w-1/2 relative min-h-75 md:min-h-100">
              <div className="grid grid-cols-2 gap-3 h-full">
                <div className="flex flex-col gap-3">
                  <div className="relative h-40 rounded-lg overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop" alt="Tim 1" fill className="object-cover" />
                  </div>
                  <div className="relative h-56 rounded-lg overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" alt="Tim 2" fill className="object-cover" />
                  </div>
                  <div className="relative h-40 rounded-lg overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" alt="Worker" fill className="object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 pt-18">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop" alt="Customer Service" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop" alt="Customer Service" fill className="object-cover" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
