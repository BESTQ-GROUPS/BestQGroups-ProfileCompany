import { CategoryRepository } from '@/repositories/category.repository';

export class CategoryService {
  static async getCategories() {
    return await CategoryRepository.findAll();
  }
}
