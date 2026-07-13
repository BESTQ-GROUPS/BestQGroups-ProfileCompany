import { drizzle } from 'drizzle-orm/d1';
import { getRequestContext } from '@cloudflare/next-on-pages';
import * as schema from './schema';

export function getDb() {
  // getRequestContext() takes the environment bindings from Cloudflare
  // In development, setupDevPlatform() makes this available in next dev.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const env = getRequestContext().env as any;
  if (!env || !env.DB) {
    throw new Error("Cloudflare D1 binding 'DB' not found. Ensure setupDevPlatform is running or wrangler is configured.");
  }
  return drizzle(env.DB, { schema });
}
