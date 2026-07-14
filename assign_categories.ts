import { getDb } from './src/db/index';
import { products } from './src/db/schema/product';
import { eq } from 'drizzle-orm';

async function assignCategories() {
  const db = await getDb();
  
  const allProducts = await db.query.products.findMany();
  
  const sterilKeywords = ['surgical', 'gown', 'drape', 'pack', 'cover', 'pouch', 'kasa', 'plaster'];
  
  let sterilCount = 0;
  let nonSterilCount = 0;

  for (const product of allProducts) {
    const titleLower = product.title.toLowerCase();
    
    // Determine if it's sterile based on keywords
    const isSteril = sterilKeywords.some(kw => titleLower.includes(kw));
    
    const categoryId = isSteril ? 'cat-2' : 'cat-3';
    
    await db.update(products)
      .set({ categoryId })
      .where(eq(products.id, product.id));
      
    if (isSteril) sterilCount++;
    else nonSterilCount++;
  }
  
  console.log(`Assigned ${sterilCount} products to Non-Elektromedis Steril (cat-2)`);
  console.log(`Assigned ${nonSterilCount} products to Non-Elektromedis Non-Steril (cat-3)`);
  console.log("Category assignment complete!");
}

assignCategories().catch(console.error);
