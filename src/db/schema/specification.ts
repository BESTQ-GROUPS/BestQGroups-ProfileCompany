import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { products } from "./product";

export const productSpecifications = sqliteTable("product_specifications", {
  id: text("id").primaryKey(),
  productId: text("product_id").references(() => products.id, { onDelete: 'cascade' }).notNull(),
  label: text("label").notNull(),
  value: text("value").notNull(),
  sortOrder: integer("sort_order").default(0),
});
