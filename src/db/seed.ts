import { getDb } from '@/db';
import { categories } from '@/db/schema/category';
import { products } from '@/db/schema/product';
import { productImages } from '@/db/schema/productImage';
import { productSpecifications } from '@/db/schema/specification';
import { logger } from '@/lib/logger';

export async function seedDatabase() {
  const db = await getDb();

  try {
    // 1. Seed Category
    const category = await db.insert(categories).values({
      id: 'cat-1',
      name: 'Peralatan Medis',
      slug: 'peralatan-medis',
      description: 'Peralatan kesehatan berstandar internasional.',
      isActive: true,
    }).returning().get();

    // 2. Seed Product
    const product = await db.insert(products).values({
      id: 'prod-1',
      categoryId: category.id,
      title: 'Monitor Pasien Philips',
      slug: 'monitor-pasien-philips',
      sku: 'PH-MON-001',
      shortDescription: 'Monitor tanda-tanda vital dengan akurasi tinggi.',
      description: 'Dirancang khusus untuk memberikan keamanan dan keandalan operasional jangka panjang.',
      price: 15000000,
      stock: 10,
      brand: 'Philips',
      status: 'published',
      publishedAt: new Date(),
    }).returning().get();

    // 3. Seed Images
    await db.insert(productImages).values([
      {
        id: 'img-1',
        productId: product.id,
        key: 'monitor-philips-1.webp',
        url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop',
        isPrimary: true,
        sortOrder: 0,
      },
      {
        id: 'img-2',
        productId: product.id,
        key: 'monitor-philips-2.webp',
        url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop',
        isPrimary: false,
        sortOrder: 1,
      }
    ]);

    // 4. Seed Specs
    await db.insert(productSpecifications).values([
      { id: 'spec-1', productId: product.id, label: 'Layar', value: '12 Inch TFT LCD', sortOrder: 0 },
      { id: 'spec-2', productId: product.id, label: 'Baterai', value: '4 Jam Operasional', sortOrder: 1 },
    ]);

    return { success: true };
  } catch (err: unknown) {
    logger.error('Seed error:', err);
    throw err;
  }
}
