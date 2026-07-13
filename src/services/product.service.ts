import { ProductRepository } from '@/repositories/product.repository';
import { GetProductsQuery } from '@/lib/validators';
import { unstable_cache } from 'next/cache';
import { z } from 'zod';
import { insertProductSchema, insertProductImageSchema, insertProductSpecificationSchema } from '@/lib/validators';

type ProductInput = z.infer<typeof insertProductSchema>;
type ProductImageInput = z.infer<typeof insertProductImageSchema>;
type ProductSpecificationInput = z.infer<typeof insertProductSpecificationSchema>;

export class ProductService {
  static async getProducts(params: GetProductsQuery) {
    const key = JSON.stringify(params);
    
    const getCachedProducts = unstable_cache(
      async () => {
        return await ProductRepository.findMany(params);
      },
      ['products-list', key],
      { tags: ['products'], revalidate: 3600 }
    );
    
    return getCachedProducts();
  }

  static async getBySlug(slug: string) {
    return await ProductRepository.findBySlug(slug);
  }

  static async createProductTransaction(productData: ProductInput, imagesData: ProductImageInput[], specsData: ProductSpecificationInput[]) {
    // Invalidate cache usually done in Server Actions via revalidateTag('products')
    return await ProductRepository.createWithRelations(productData, imagesData, specsData);
  }
}
