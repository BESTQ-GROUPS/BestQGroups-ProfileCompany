import { NextResponse } from 'next/server';
import { getDb } from '@/db';
import { products } from '@/db/schema/product';
import fs from 'fs';
import path from 'path';



function generateId() {
  return crypto.randomUUID();
}

function extractSpecs(description: string | null) {
  if (!description) return [];
  const specs: { label: string; value: string }[] = [];
  
  const bMatch = description.match(/bahan\s+([^.]+?)\s+(?:berkualitas|dengan)/i);
  if (bMatch) specs.push({ label: 'Bahan Utama', value: bMatch[1].trim() });
  
  if (/Sekali pakai/i.test(description)) {
    specs.push({ label: 'Tipe Penggunaan', value: 'Sekali Pakai (Disposable)' });
  } else if (/Dapat dicuci/i.test(description) || /Reusable/i.test(description)) {
    specs.push({ label: 'Tipe Penggunaan', value: 'Dapat Digunakan Kembali (Reusable)' });
  }

  if (/steril/i.test(description) && !/non-steril/i.test(description) && !/non steril/i.test(description)) {
    specs.push({ label: 'Sterilisasi', value: 'Steril' });
  } else if (/non-steril|non steril/i.test(description)) {
    specs.push({ label: 'Sterilisasi', value: 'Non-Steril' });
  }

  const sizeMatch = description.match(/(?:berukuran|ukuran)\s+([0-9a-zA-Z\sx\-\.]+cm)/i);
  if (sizeMatch) specs.push({ label: 'Ukuran', value: sizeMatch[1].trim() });

  return specs;
}

export async function GET() {
  try {
    const db = await getDb();
    const allProducts = await db.select().from(products);
    
    let sqlContent = '';
    
    for (const product of allProducts) {
      const specs = extractSpecs(product.description);
      specs.forEach((s, index) => {
        const id = generateId();
        // Escape single quotes in values
        const safeValue = s.value.replace(/'/g, "''");
        const safeLabel = s.label.replace(/'/g, "''");
        sqlContent += `INSERT INTO product_specifications (id, product_id, label, value, sort_order) VALUES ('${id}', '${product.id}', '${safeLabel}', '${safeValue}', ${index});\n`;
      });
    }

    if (!sqlContent) {
      return new NextResponse('No specs found.', { status: 404 });
    }

    return new NextResponse(sqlContent, {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
