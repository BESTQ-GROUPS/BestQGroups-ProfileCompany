const fs = require('fs');
const crypto = require('crypto');

const importSql = fs.readFileSync('import.sql', 'utf8');

// Regex to capture ID and description
// VALUES ('<id>', '<title>', '<slug>', '<brand>', '<description>', ...
const regex = /VALUES \('([^']+)',\s*'[^']*',\s*'[^']*',\s*'[^']*',\s*'([\s\S]*?)',\s*'(?:published|draft)'/g;

let match;
let sql = `
DELETE FROM product_usage_instructions;
DELETE FROM product_specifications;
`;

let count = 0;

while ((match = regex.exec(importSql)) !== null) {
  const id = match[1];
  let descRaw = match[2];
  
  // Unescape single quotes that SQL uses
  descRaw = descRaw.replace(/''/g, "'");

  const lines = descRaw.split('\n');
  const specs = [];
  let usageText = '';
  let cleanDescLines = [];
  
  let inUsageSection = false;
  
  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.toLowerCase().startsWith('cara penggunaan')) {
      inUsageSection = true;
      return; // Skip the "Cara penggunaan:" header itself
    }
    
    if (inUsageSection) {
      if (trimmed) usageText += trimmed + ' ';
    } else if (trimmed.startsWith('•')) {
      const specContent = trimmed.substring(1).trim();
      specs.push(specContent);
    } else {
      if (trimmed) {
        if (trimmed.toLowerCase().includes('dengan keunggulan:')) {
          // Skip the transition line
        } else {
          cleanDescLines.push(trimmed);
        }
      }
    }
  });
  
  const cleanDescription = cleanDescLines.join('\n');
  
  // Update description
  sql += `UPDATE products SET description = '${cleanDescription.replace(/'/g, "''")}' WHERE id = '${id}';\n`;
  
  // Insert specifications
  specs.forEach((spec, idx) => {
    const specId = crypto.randomUUID();
    let label = 'Fitur / Keunggulan';
    let value = spec;
    
    if (spec.includes(':')) {
      const parts = spec.split(':');
      label = parts[0].trim();
      value = parts.slice(1).join(':').trim();
    }

    sql += `INSERT INTO product_specifications (id, product_id, label, value, sort_order) VALUES ('${specId}', '${id}', '${label.replace(/'/g, "''")}', '${value.replace(/'/g, "''")}', ${idx});\n`;
  });
  
  // Insert usage instructions
  if (usageText) {
    // Split by period to get steps
    const rawSteps = usageText.split('.');
    let stepIndex = 0;
    
    rawSteps.forEach(stepRaw => {
      const step = stepRaw.trim();
      if (step.length > 3) {
        const usageId = crypto.randomUUID();
        const finalInstruction = step + (step.endsWith('!') || step.endsWith('?') ? '' : '.');
        sql += `INSERT INTO product_usage_instructions (id, product_id, instruction, sort_order) VALUES ('${usageId}', '${id}', '${finalInstruction.replace(/'/g, "''")}', ${stepIndex});\n`;
        stepIndex++;
      }
    });
  }
  
  count++;
}

console.log(`Processed ${count} products.`);
fs.writeFileSync('fix_data.sql', sql);
console.log('Successfully generated fix_data.sql!');
