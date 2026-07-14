import { CategoryService } from '@/services/category.service';
import { apiResponse } from '@/lib/api-response';
import { logger } from '@/lib/logger';



export async function GET() {
  try {
    const categories = await CategoryService.getCategories();

    return apiResponse({
      success: true,
      message: 'Categories fetched successfully',
      data: categories
    });
  } catch (error: unknown) {
    logger.error('Failed to fetch categories API', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return apiResponse({
      success: false,
      message: 'Internal Server Error',
      error: errorMessage,
      status: 500
    });
  }
}
