import { createClient } from '@libsql/client';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function restore() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    throw new Error("Missing TURSO credentials");
  }

  const client = createClient({ url, authToken });

  const files = [
    'import.sql',
    'images_remote.sql',
    'usage_reviews_seed.sql',
    'fix_data.sql'
  ];

  for (const file of files) {
    console.log(`Executing ${file}...`);
    try {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        const sql = fs.readFileSync(filePath, 'utf-8');
        // Split by semicolon and execute each statement
        const statements = sql.split(';').map(s => s.trim()).filter(s => s.length > 0);
        
        // Execute in batches
        const batchSize = 100;
        for (let i = 0; i < statements.length; i += batchSize) {
           const batch = statements.slice(i, i + batchSize);
           await client.batch(batch, 'write');
        }
        console.log(`Successfully executed ${file} (${statements.length} statements)`);
      } else {
        console.log(`File ${file} not found, skipping.`);
      }
    } catch (err: any) {
      console.error(`Error executing ${file}:`, err.message);
    }
  }

  console.log("Restore complete!");
}

restore().catch(console.error);
