import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { products } from "./product";
import { relations } from "drizzle-orm";

export const usageInstructions = sqliteTable("product_usage_instructions", {
  id: text("id").primaryKey(),
  productId: text("product_id").notNull().references(() => products.id),
  instruction: text("instruction").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).$defaultFn(() => new Date()),
}, (table) => [
  index("usage_product_id_idx").on(table.productId),
]);


