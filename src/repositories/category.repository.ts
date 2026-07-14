import { getDb } from '@/db';
import { categories } from '@/db/schema/category';
import { isNull, eq } from 'drizzle-orm';

export class CategoryRepository {
  static async findAll() {
    const db = await getDb();
    return db.query.categories.findMany({
      where: isNull(categories.deletedAt),
      with: {
        children: true
      }
    });
  }

  static async findById(id: string) {
    const db = await getDb();
    return db.query.categories.findFirst({
      where: eq(categories.id, id)
    });
  }
}
