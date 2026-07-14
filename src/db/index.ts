import { drizzle } from 'drizzle-orm/d1';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import * as schema from './schema';

export function getDb() {
  const env = getCloudflareContext().env as any;
  if (!env || !env.DB) {
    throw new Error("Cloudflare D1 binding 'DB' not found. Ensure setupDevPlatform is running or wrangler is configured.");
  }
  return drizzle(env.DB, { schema });
}
