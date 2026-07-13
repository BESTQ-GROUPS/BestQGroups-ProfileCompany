import { defineConfig } from "drizzle-kit";
import fs from "fs";
import path from "path";

function getLocalD1Database() {
  try {
    const d1Dir = path.resolve(".wrangler/state/v3/d1/miniflare-D1DatabaseObject");
    const files = fs.readdirSync(d1Dir);
    const dbFile = files.find((f) => f.endsWith(".sqlite") && f !== "metadata.sqlite");
    if (dbFile) {
      return path.join(d1Dir, dbFile);
    }
  } catch {
    // ignore
  }
  return "sqlite.db"; // fallback
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: getLocalD1Database(),
  },
});
