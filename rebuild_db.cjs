const fs = require('fs');
const https = require('https');

const styles = ["Casual", "Formal", "Streetwear", "Business", "Minimalist", "Vintage", "Athletic", "Bohemian"];

async function getIds(query) {
  const res = await fetch(`https://unsplash.com/s/photos/${query}`);
  const html = await res.text();
  const matches = html.match(/photo-[0-9]{13}-[a-z0-9]+/g) || [];
  return [...new Set(matches)].slice(0, 100);
}

async function verifyId(id) {
  return new Promise((resolve) => {
    https.request(`https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=800`, { method: 'HEAD' }, (r) => {
      resolve(r.statusCode === 200 ? id : null);
    }).on('error', () => resolve(null)).end();
  });
}

async function getValidIds(query) {
  console.log(`Fetching ${query}...`);
  const ids = await getIds(query);
  const chunks = [];
  for (let i = 0; i < ids.length; i += 20) chunks.push(ids.slice(i, i + 20));
  
  let valid = [];
  for (const chunk of chunks) {
    const results = await Promise.all(chunk.map(verifyId));
    valid.push(...results.filter(Boolean));
  }
  return valid;
}

async function run() {
  console.log("Building massive verified catalog...");
  
  const curated = { mens: {}, womens: {} };
  for (const style of styles) {
    curated.mens[style] = await getValidIds(`mens-${style.toLowerCase()}-fashion`);
    curated.womens[style] = await getValidIds(`womens-${style.toLowerCase()}-fashion`);
  }
  
  // Also fetch specific verified IDs
  const specificGown = await getValidIds('womens-chiffon-gown-dress');
  const specificTrouser = await getValidIds('womens-wide-leg-trousers-single');
  const specificSweater = await getValidIds('womens-knit-sweater-single');
  const specificLegging = await getValidIds('womens-leggings-single-person');

  // Load existing DB to update it
  let clothesStr = fs.readFileSync('src/data/international_clothes.ts', 'utf8');
  const match = clothesStr.match(/export const CLOTHING_DATABASE: ClothingItem\[\] = (\[[\s\S]*\]);/);
  const db = eval(match[1]);

  // Keep track of used IDs to maximize global uniqueness
  const usedIds = new Set();
  
  function getUniqueId(pool) {
    if (!pool || pool.length === 0) return null;
    let unused = pool.filter(id => !usedIds.has(id));
    if (unused.length === 0) unused = pool; // fallback if we ran out
    const id = unused[Math.floor(Math.random() * unused.length)];
    usedIds.add(id);
    return id;
  }

  let gc = 0, tc = 0, sc = 0, lc = 0;

  db.forEach(item => {
    let id = null;
    
    // Override specific items
    if (item.name === 'Draped Chiffon Gown' && specificGown.length > 0) {
      id = specificGown[gc % specificGown.length]; gc++;
    } else if (item.name === 'Tailored Wide-Leg Trousers' && specificTrouser.length > 0) {
      id = specificTrouser[tc % specificTrouser.length]; tc++;
    } else if (item.name === 'Ribbed Knit Sweater' && specificSweater.length > 0) {
      id = specificSweater[sc % specificSweater.length]; sc++;
    } else if (item.name === 'Seamless Align Leggings' && specificLegging.length > 0) {
      id = specificLegging[lc % specificLegging.length]; lc++;
    } else {
      // General styles
      const style = item.style[0];
      if (item.category.includes('Menswear')) {
        id = getUniqueId(curated.mens[style] || curated.mens['Casual']);
      } else {
        id = getUniqueId(curated.womens[style] || curated.womens['Casual']);
      }
    }
    
    if (id) {
      item.imageUrl = `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=800`;
    }
  });

  const newContent = `export interface ClothingItem {\n  id: string;\n  brand: string;\n  name: string;\n  category: string[];\n  bodyTypes: string[];\n  style: string[];\n  priceEst: string;\n  buyUrl: string;\n  imageUrl: string;\n  description: string;\n}\n\nexport const CLOTHING_DATABASE: ClothingItem[] = ${JSON.stringify(db, null, 2)};\n`;
  fs.writeFileSync('src/data/international_clothes.ts', newContent);
  console.log("Database successfully rebuilt with massive unique verified catalog!");
}

run();
