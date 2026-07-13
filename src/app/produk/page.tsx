import Image from "next/image";
import Link from "next/link";
import { ProductService } from "@/services/product.service";
import ProductFilterBar from "@/components/ProductFilterBar";
import { getDb } from "@/db";
import { categories as categoriesSchema } from "@/db/schema/category";

export const runtime = 'edge';

export default async function ProdukList({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  try {
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
    const currentCategory = searchParams.category;
    const currentBrand = searchParams.brand;
    const currentSort = searchParams.sort as 'newest' | 'oldest';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let allCategories: any[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let products: any[] = [];
    let totalPages = 1;
    let errorMessage = null;
    let categoryId = undefined;

    try {
      const db = getDb();
      allCategories = await db.select().from(categoriesSchema);
      
      if (currentCategory) {
        const cat = allCategories.find(c => c.slug === currentCategory);
        if (cat) categoryId = cat.id as string;
      }

      const result = await ProductService.getProducts({
        page: currentPage,
        limit: 9,
        status: 'published',
        sort: currentSort || 'newest',
        category: categoryId,
        brand: currentBrand
      });

      products = result.data;
      totalPages = result.totalPages;
    } catch (error: unknown) {
      errorMessage = error instanceof Error ? error.message : String(error);
    }

    return (
      <div className="flex flex-col bg-white">
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-4xl mx-auto mt-8" role="alert">
            <strong className="font-bold">Error Loading Data: </strong>
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-16">
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
                <h4 className="font-bold text-[#1a202c] text-lg mb-3">Bahan Medis Habis Pakai</h4>
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

            <ProductFilterBar 
              categories={allCategories}
              currentCategory={currentCategory}
              currentBrand={currentBrand}
              currentSort={currentSort}
            />

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.length === 0 && (
                <div className="col-span-3 py-12 text-center text-gray-500">
                  Belum ada produk yang tersedia.
                </div>
              )}
              {products.map((product) => {
                const mainImage = product.images && product.images.length > 0
                  ? product.images[0].url
                  : "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop";

                return (
                  <div key={product.id} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="h-56 overflow-hidden relative bg-gray-50">
                      <Image
                        src={mainImage}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col grow">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-lg text-gray-900">{product.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-6 line-clamp-3 text-justify leading-relaxed">
                        {product.description || "Deskripsi belum tersedia."}
                      </p>
                      <div className="mt-auto">
                        <Link href={`/produk/${product.slug}`} className="inline-block border border-bestq-blue text-bestq-blue px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-bestq-blue hover:text-white transition-colors">
                          Lihat Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between border-t border-gray-200 mt-12 pt-6">
                <Link
                  href={`/produk?${new URLSearchParams({...searchParams, page: String(Math.max(1, currentPage - 1))}).toString()}`}
                  className={`flex items-center gap-2 text-sm font-medium ${currentPage === 1 ? 'text-gray-300 pointer-events-none' : 'text-gray-500 hover:text-gray-900 transition-colors'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                  Sebelumnya
                </Link>
                <div className="hidden md:flex items-center gap-2 text-sm">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <Link
                      key={idx}
                      href={`/produk?${new URLSearchParams({...searchParams, page: String(idx + 1)}).toString()}`}
                      className={`w-8 h-8 flex items-center justify-center rounded-full font-medium transition-colors ${currentPage === idx + 1 ? 'font-bold text-bestq-blue bg-blue-100' : 'text-bestq-orange hover:bg-gray-100'}`}
                    >
                      {idx + 1}
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/produk?${new URLSearchParams({...searchParams, page: String(Math.min(totalPages, currentPage + 1))}).toString()}`}
                  className={`flex items-center gap-2 text-sm font-medium ${currentPage === totalPages ? 'text-gray-300 pointer-events-none' : 'text-gray-500 hover:text-gray-900 transition-colors'}`}
                >
                  Selanjutnya
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  } catch(fatalError: any) {
    return (
      <div className="bg-red-500 text-white p-8">
        <h1>FATAL EDGE RUNTIME ERROR</h1>
        <pre>{fatalError.message || String(fatalError)}</pre>
        <pre>{fatalError.stack}</pre>
      </div>
    )
  }
}
