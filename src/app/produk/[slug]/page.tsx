import Image from "next/image";
import Link from "next/link";
import { ProductService } from '@/services/product.service';
import { notFound } from 'next/navigation';
import ProductTabs from '@/components/ProductTabs';

export const runtime = 'edge';

export default async function DetailProduk(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  const productData = await ProductService.getBySlug(params.slug);

  if (!productData) {
    notFound();
  }

  const mainImage = productData.images?.find((img) => img.isPrimary)?.url || "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop";
  const thumbnails = productData.images?.filter((img) => !img.isPrimary).slice(0, 3) || [];
  
  const displayThumbnails = thumbnails.length > 0 ? thumbnails.map((t) => t.url) : [
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop"
  ];

  const relatedProducts = Array(3).fill({
    title: "Peralatan Medis Premium",
    description: "Peralatan kesehatan berstandar internasional yang dirancang khusus untuk memberikan keamanan dan keandalan operasional jangka panjang.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  });

  return (
    <div className="flex flex-col bg-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Breadcrumbs */}
        <div className="text-xs md:text-sm text-gray-500 mb-12">
          <Link href="/" className="hover:text-bestq-blue transition-colors">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href="/produk" className="hover:text-bestq-blue transition-colors">Produk</Link>
          <span className="mx-2">/</span>
          {productData.category && (
            <>
              <Link href={`/kategori/${productData.category.slug}`} className="hover:text-bestq-blue transition-colors">{productData.category.name}</Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-gray-400">{productData.title}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-20">
          
          {/* Left: Images Gallery */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="relative w-full aspect-4/3 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
              <Image 
                src={mainImage} 
                alt={productData.title} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {displayThumbnails.map((itemUrl, index) => (
                <div key={index} className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100 cursor-pointer hover:border-bestq-blue transition-colors">
                  <Image 
                    src={itemUrl} 
                    alt={`Thumbnail ${index + 1}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{productData.title}</h1>
            {productData.brand && <p className="text-bestq-blue font-semibold mb-4 text-sm">{productData.brand}</p>}
            
            <ProductTabs 
              description={productData.description} 
              specifications={productData.specifications || []} 
              usageInstructions={productData.usageInstructions || []}
              reviews={productData.reviews || []}
            />

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-auto">
              <a href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(productData.title)}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Pesan Sekarang Via Whatsapp
              </a>
              <button className="w-full bg-bestq-blue hover:bg-bestq-darkblue text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                Request Sample
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="border-t border-gray-200 pt-16 mb-16">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-10">Produk Terkait</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="h-56 overflow-hidden relative bg-gray-50">
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
                    <Link href={`/produk/${params.slug}`} className="inline-block border border-bestq-blue text-bestq-blue px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-bestq-blue hover:text-white transition-colors">
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
