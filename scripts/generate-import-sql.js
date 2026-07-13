const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const crypto = require('crypto');

function main() {
  const filePath = path.join(__dirname, '../List Deskripsi Produk.xlsx');
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(worksheet);
  
  let sql = '';

  rows.forEach((row) => {
    const title = row['Judul'] ? String(row['Judul']).trim().replace(/'/g, "''") : 'Unnamed Product';
    
    let slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + '-' + Math.random().toString(36).substring(2, 6);
    
    const brand = row['Brand'] ? String(row['Brand']).trim().replace(/'/g, "''") : 'BestQ Medical';
    const description = row['Deskripsi'] ? String(row['Deskripsi']).trim().replace(/'/g, "''") : '';
    const id = crypto.randomUUID();
    const now = Date.now(); // Integer timestamp

    sql += `INSERT INTO products (id, title, slug, brand, description, status, stock, price, created_at, updated_at) VALUES ('${id}', '${title}', '${slug}', '${brand}', '${description}', 'published', 0, 0, ${now}, ${now});\n`;
  });

  // No commit needed for D1 execute

  const outPath = path.join(__dirname, '../import.sql');
  fs.writeFileSync(outPath, sql);
  console.log(`Generated import.sql with ${rows.length} records!`);
}

main();
