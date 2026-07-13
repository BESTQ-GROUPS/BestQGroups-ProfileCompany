import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { products } from "./product";
import { relations } from "drizzle-orm";

export const reviews = sqliteTable("product_reviews", {
  id: text("id").primaryKey(),
  productId: text("product_id").notNull().references(() => products.id),
  userName: text("user_name").notNull(),
  rating: integer("rating").notNull(), // 1 to 5
  comment: text("comment"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
}, (table) => [
  index("review_product_id_idx").on(table.productId),
]);


