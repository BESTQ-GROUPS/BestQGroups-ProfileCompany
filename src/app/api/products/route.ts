
import { ProductService } from '@/services/product.service';
import { getProductsQuerySchema } from '@/lib/validators';
import { apiResponse } from '@/lib/api-response';
import { logger } from '@/lib/logger';



export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams.entries());
    
    // Validate search params
    const validation = getProductsQuerySchema.safeParse(params);
    if (!validation.success) {
      return apiResponse({
        success: false,
        message: 'Invalid query parameters',
        error: validation.error.format(),
        status: 400
      });
    }

    const products = await ProductService.getProducts(validation.data);

    return apiResponse({
      success: true,
      message: 'Products fetched successfully',
      data: products.data,
      meta: {
        total: products.total,
        page: products.page,
        limit: products.limit,
        totalPages: products.totalPages
      }
    });

  } catch (error: unknown) {
    logger.error('Failed to fetch API products', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return apiResponse({
      success: false,
      message: 'Internal Server Error',
      error: errorMessage,
      status: 500
    });
  }
}
