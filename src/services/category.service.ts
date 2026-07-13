import { CategoryRepository } from '@/repositories/category.repository';
import { unstable_cache } from 'next/cache';

export class CategoryService {
  static async getCategories() {
    const getCachedCategories = unstable_cache(
      async () => {
        return await CategoryRepository.findAll();
      },
      ['categories-list'],
      { tags: ['categories'], revalidate: 3600 }
    );
    
    return getCachedCategories();
  }
}
