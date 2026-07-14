import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { products } from "./product";

export const productImages = sqliteTable("product_images", {
  id: text("id").primaryKey(),
  productId: text("product_id").references(() => products.id, { onDelete: 'cascade' }).notNull(),
  key: text("key").notNull(),
  url: text("url").notNull(),
  alt: text("alt"),
  width: integer("width"),
  height: integer("height"),
  isPrimary: integer("is_primary", { mode: "boolean" }).default(false),
  sortOrder: integer("sort_order").default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).$defaultFn(() => new Date()),
});
