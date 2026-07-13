import { apiResponse } from '@/lib/api-response';
import { getDb } from '@/db';
import { products } from '@/db/schema/product';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    if (!Array.isArray(data)) {
      return apiResponse({ success: false, message: 'Invalid data format, expected array', status: 400 });
    }

    const db = getDb();
    const batchSize = 50;
    let insertedCount = 0;

    for (let i = 0; i < data.length; i += batchSize) {
      const batch = data.slice(i, i + batchSize);
      
      const queries = batch.map((item) => {
        return db.insert(products).values({
          id: crypto.randomUUID(),
          title: item.title,
          slug: item.slug,
          description: item.description,
          brand: item.brand,
          status: 'published',
          stock: 0,
          price: 0,
        });
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await db.batch(queries as any);
      insertedCount += batch.length;
    }

    return apiResponse({
      success: true,
      message: `Successfully imported ${insertedCount} products`,
      data: { count: insertedCount }
    });
  } catch (error: unknown) {
    const err = error as Error;
    return apiResponse({ success: false, message: 'Import failed', error: err.message, status: 500 });
  }
}
