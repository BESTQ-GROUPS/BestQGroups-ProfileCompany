import { sqliteTable, text, integer, real, index } from "drizzle-orm/sqlite-core";
import { categories } from "./category";

export const products = sqliteTable("products", {
  id: text("id").primaryKey(),
  categoryId: text("category_id").references(() => categories.id),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  sku: text("sku").unique(),
  shortDescription: text("short_description"),
  description: text("description"),
  price: real("price"),
  weight: real("weight"),
  stock: integer("stock").default(0),
  brand: text("brand"),
  status: text("status", { enum: ['draft', 'published', 'archived'] }).default('draft'),
  publishedAt: integer("published_at", { mode: "timestamp_ms" }),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),
  createdBy: text("created_by"),
  updatedBy: text("updated_by"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).$defaultFn(() => new Date()),
  deletedAt: integer("deleted_at", { mode: "timestamp_ms" }),
}, (table) => [
  index("slug_idx").on(table.slug),
  index("sku_idx").on(table.sku),
  index("category_id_idx").on(table.categoryId),
  index("status_idx").on(table.status),
  index("published_at_idx").on(table.publishedAt),
  index("title_idx").on(table.title),
]);
