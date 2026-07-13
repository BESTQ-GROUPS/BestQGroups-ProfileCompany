import { ProductService } from '@/services/product.service';
import { apiResponse } from '@/lib/api-response';
import { logger } from '@/lib/logger';

export const runtime = 'edge';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const productData = await ProductService.getBySlug(params.slug);

    if (!productData) {
      return apiResponse({ success: false, message: 'Product not found', status: 404 });
    }

    return apiResponse({
      success: true,
      message: 'Product fetched successfully',
      data: productData
    });

  } catch (error: unknown) {
    logger.error('Error fetching product by slug:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return apiResponse({
      success: false,
      message: 'Internal Server Error',
      error: errorMessage,
      status: 500
    });
  }
}
