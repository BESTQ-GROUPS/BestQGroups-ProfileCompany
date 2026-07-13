import { relations } from 'drizzle-orm';
import { categories } from './schema/category';
import { products } from './schema/product';
import { productImages } from './schema/productImage';
import { productSpecifications } from './schema/specification';

import { usageInstructions } from './schema/usageInstruction';
import { reviews } from './schema/review';

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  parent: one(categories, {
    fields: [categories.parentId],
    references: [categories.id],
    relationName: 'parent_child'
  }),
  children: many(categories, { relationName: 'parent_child' }),
  products: many(products),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  images: many(productImages),
  specifications: many(productSpecifications),
  usageInstructions: many(usageInstructions),
  reviews: many(reviews),
}));

export const productImagesRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
}));

export const productSpecificationsRelations = relations(productSpecifications, ({ one }) => ({
  product: one(products, {
    fields: [productSpecifications.productId],
    references: [products.id],
  }),
}));

export const usageInstructionsRelations = relations(usageInstructions, ({ one }) => ({
  product: one(products, {
    fields: [usageInstructions.productId],
    references: [products.id],
  }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  product: one(products, {
    fields: [reviews.productId],
    references: [products.id],
  }),
}));
