/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

async function main() {
  const filePath = path.join(__dirname, '../List Deskripsi Produk.xlsx');
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  console.log('Loading Excel file...');
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  // Parse rows as objects based on headers
  const rows = XLSX.utils.sheet_to_json(worksheet);
  
  console.log(`Found ${rows.length} rows in the Excel file.`);

  // Map to our API expected format
  const productsToImport = rows.map((row) => {
    const title = row['Judul'] ? String(row['Judul']).trim() : 'Unnamed Product';
    
    // Create a URL-friendly slug
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + '-' + Math.random().toString(36).substring(2, 6);

    return {
      title: title,
      slug: slug,
      brand: row['Brand'] ? String(row['Brand']).trim() : 'BestQ Medical',
      description: row['Deskripsi'] ? String(row['Deskripsi']).trim() : '',
    };
  });

  console.log('Sending data to local bulk import API...');
  
  try {
    const response = await fetch('http://localhost:3005/api/products/bulk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productsToImport),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Import Successful!');
      console.log(result.message);
    } else {
      console.error('❌ Import Failed:', result);
    }
  } catch (error) {
    console.error('❌ Error hitting the API. Make sure your local server is running (npm run dev)!');
    console.error(error);
  }
}

main();
