import { getDb } from '@/db';
import { products } from '@/db/schema/product';
import { eq, like, and, desc, asc, isNull, sql } from 'drizzle-orm';
import { GetProductsQuery } from '@/lib/validators';
import { z } from 'zod';
import { insertProductSchema, insertProductImageSchema, insertProductSpecificationSchema } from '@/lib/validators';

type ProductInput = z.infer<typeof insertProductSchema>;
type ProductImageInput = z.infer<typeof insertProductImageSchema>;
type ProductSpecificationInput = z.infer<typeof insertProductSpecificationSchema>;

export class ProductRepository {
  static async findMany(params: GetProductsQuery) {
    const db = await getDb();
    
    const conditions = [isNull(products.deletedAt)];
    
    if (params.status) conditions.push(eq(products.status, params.status));
    if (params.category) conditions.push(eq(products.categoryId, params.category));
    if (params.brand) conditions.push(eq(products.brand, params.brand));
    if (params.q) conditions.push(like(products.title, `%${params.q}%`));
    
    if (params.minPrice !== undefined && params.maxPrice !== undefined) {
      // drizzle doesn't easily expose gte/lte for sqlite without explicit imports, using sql`` is easiest
      conditions.push(sql`${products.price} >= ${params.minPrice}`);
      conditions.push(sql`${products.price} <= ${params.maxPrice}`);
    } else if (params.minPrice !== undefined) {
      conditions.push(sql`${products.price} >= ${params.minPrice}`);
    } else if (params.maxPrice !== undefined) {
      conditions.push(sql`${products.price} <= ${params.maxPrice}`);
    }
    
    const offset = (params.page - 1) * params.limit;
    
    let orderBy = desc(products.createdAt);
    if (params.sort === 'oldest') orderBy = asc(products.createdAt);
    if (params.sort === 'price_asc') orderBy = asc(products.price);
    if (params.sort === 'price_desc') orderBy = desc(products.price);
    if (params.sort === 'name_asc') orderBy = asc(products.title);
    if (params.sort === 'name_desc') orderBy = desc(products.title);

    const data = await db.query.products.findMany({
      where: and(...conditions),
      orderBy,
      limit: params.limit,
      offset,
      with: {
        images: true,
        category: true,
      }
    });
    
    // Simple count (not optimized for very large tables, but works for medium data)
    const countQuery = await db.select({ count: sql<number>`count(*)` }).from(products).where(and(...conditions)).get();
    const total = countQuery?.count || 0;

    return {
      data,
      total,
      page: params.page,
      limit: params.limit,
      totalPages: Math.ceil(total / params.limit)
    };
  }
  
  static async findBySlug(slug: string) {
    const db = await getDb();
    return db.query.products.findFirst({
      where: and(eq(products.slug, slug), isNull(products.deletedAt)),
      with: {
        images: {
          orderBy: (images, { asc }) => [asc(images.sortOrder)]
        },
        specifications: {
          orderBy: (specs, { asc }) => [asc(specs.sortOrder)]
        },
        usageInstructions: {
          orderBy: (instructions, { asc }) => [asc(instructions.sortOrder)]
        },
        reviews: {
          orderBy: (reviews, { desc }) => [desc(reviews.createdAt)]
        },
        category: true
      }
    });
  }

  static async createWithRelations(productData: ProductInput, imagesData: ProductImageInput[], specsData: ProductSpecificationInput[]) {
    const db = await getDb();
    const { products } = await import('@/db/schema/product');
    const { productImages } = await import('@/db/schema/productImage');
    const { productSpecifications } = await import('@/db/schema/specification');

    // D1 does not support nested db.transaction() natively via HTTP API
    // We must use db.batch() to guarantee atomicity. 
    // Since we need to know the productId, we ensure it's generated beforehand.
    const productId = productData.id || crypto.randomUUID();
    const finalProductData = { ...productData, id: productId };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queries: any[] = [
      db.insert(products).values(finalProductData)
    ];

    if (imagesData.length > 0) {
      const imgs = imagesData.map(img => ({ ...img, id: img.id || crypto.randomUUID(), productId }));
      queries.push(db.insert(productImages).values(imgs));
    }

    if (specsData.length > 0) {
      const specs = specsData.map(spec => ({ ...spec, id: spec.id || crypto.randomUUID(), productId }));
      queries.push(db.insert(productSpecifications).values(specs));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await db.batch(queries as any);

    return finalProductData;
  }
}
