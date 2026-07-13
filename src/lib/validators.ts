import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { categories } from '@/db/schema/category';
import { products } from '@/db/schema/product';
import { productImages } from '@/db/schema/productImage';
import { productSpecifications } from '@/db/schema/specification';
import { usageInstructions } from '@/db/schema/usageInstruction';
import { reviews } from '@/db/schema/review';

// Category Schemas
export const insertCategorySchema = createInsertSchema(categories);
export const selectCategorySchema = createSelectSchema(categories);

// Product Schemas
export const insertProductSchema = createInsertSchema(products);
export const selectProductSchema = createSelectSchema(products);

// Image Schemas
export const insertProductImageSchema = createInsertSchema(productImages);
export const selectProductImageSchema = createSelectSchema(productImages);

// Specification Schemas
export const insertProductSpecificationSchema = createInsertSchema(productSpecifications);
export const selectProductSpecificationSchema = createSelectSchema(productSpecifications);

// Usage Instruction Schemas
export const insertUsageInstructionSchema = createInsertSchema(usageInstructions);
export const selectUsageInstructionSchema = createSelectSchema(usageInstructions);

// Review Schemas
export const insertReviewSchema = createInsertSchema(reviews);
export const selectReviewSchema = createSelectSchema(reviews);

// Query validation schemas
export const getProductsQuerySchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  brand: z.string().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  sort: z.enum(['newest', 'oldest', 'price_asc', 'price_desc', 'name_asc', 'name_desc']).optional().default('newest'),
  page: z.coerce.number().min(1).optional().default(1),
  limit: z.coerce.number().min(1).max(100).optional().default(10),
  status: z.enum(['draft', 'published', 'archived']).optional().default('published'),
});

export type GetProductsQuery = z.infer<typeof getProductsQuerySchema>;
