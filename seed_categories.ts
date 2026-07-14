import { getDb } from './src/db/index';
import { categories } from './src/db/schema/category';

async function seedCategories() {
  const db = await getDb();
  
  const catsToInsert = [
    {
      id: 'cat-1',
      name: 'Peralatan Medis',
      slug: 'peralatan-medis',
      description: 'Peralatan kesehatan berstandar internasional.',
      isActive: true,
    },
    {
      id: 'cat-2',
      name: 'Non-Elektromedis Steril',
      slug: 'non-elektromedis-steril',
      description: 'Produk non-elektromedis dalam kondisi steril.',
      isActive: true,
    },
    {
      id: 'cat-3',
      name: 'Non-Elektromedis Non-Steril',
      slug: 'non-elektromedis-non-steril',
      description: 'Produk non-elektromedis dalam kondisi non-steril.',
      isActive: true,
    }
  ];

  for (const cat of catsToInsert) {
    try {
      await db.insert(categories).values(cat);
      console.log(`Inserted category: ${cat.name}`);
    } catch (e: any) {
      if (e.message.includes('UNIQUE constraint failed')) {
        console.log(`Category ${cat.name} already exists.`);
      } else {
        console.error(`Error inserting ${cat.name}:`, e);
      }
    }
  }
  
  console.log("Category seeding complete!");
}

seedCategories().catch(console.error);
