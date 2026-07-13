const xlsx = require('xlsx');
const fs = require('fs');
const crypto = require('crypto');

function generateId() {
  return crypto.randomUUID();
}

// Simple slugify function since we don't have the DB UUIDs easily map-able if we don't query it.
// Wait! If I don't query the DB, how do I know the product_id of each product?
// The import.sql file HAS the product IDs! I can parse import.sql to get the mapping of Judul -> ID!
