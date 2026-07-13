const fs = require('fs');
const crypto = require('crypto');

function generateId() {
  return crypto.randomUUID();
}

const images = [
  "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop"
];

const importSql = fs.readFileSync('import.sql', 'utf-8');
const lines = importSql.split('\n');
let sqlContent = '';

lines.forEach(line => {
  const idMatch = line.match(/VALUES \('([^']+)'/);
  if (!idMatch) return;
  const productId = idMatch[1];
  
  const titleMatch = line.match(/VALUES \('[^']+', '([^']+)'/);
  const title = titleMatch ? titleMatch[1] : null;
  if (!title) return;

  // Insert 3 images per product
  images.forEach((url, index) => {
    const id = generateId();
    const isPrimary = index === 0 ? 1 : 0;
    const key = `placeholder/medical-${index + 1}`;
    const alt = `${title} Image ${index + 1}`;
    const timestamp = Date.now();
    sqlContent += `INSERT INTO product_images (id, product_id, key, url, alt, width, height, is_primary, sort_order, created_at) VALUES ('${id}', '${productId}', '${key}', '${url}', '${alt}', 800, 600, ${isPrimary}, ${index}, ${timestamp});\n`;
  });
});

fs.writeFileSync('images_remote.sql', sqlContent, 'utf-8');
console.log('Done generating images_remote.sql, length:', sqlContent.length);
