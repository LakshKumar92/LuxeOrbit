const fs = require('fs');
const https = require('https');

let clothesStr = fs.readFileSync('src/data/international_clothes.ts', 'utf8');
const match = clothesStr.match(/export const CLOTHING_DATABASE: ClothingItem\[\] = (\[[\s\S]*\]);/);
if (!match) throw new Error("Could not parse DB");
const db = eval(match[1]);

async function getValidIds(query) {
  const res = await fetch(`https://unsplash.com/s/photos/${query}`);
  const html = await res.text();
  const matches = html.match(/photo-[0-9]{13}-[a-z0-9]+/g) || [];
  const unique = [...new Set(matches)];
  
  const valid = [];
  for (const id of unique) {
    const isOk = await new Promise((resolve) => {
      https.request(`https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=800`, { method: 'HEAD' }, (r) => {
        resolve(r.statusCode === 200);
      }).on('error', () => resolve(false)).end();
    });
    if (isOk) valid.push(id);
    if (valid.length >= 3) break;
  }
  return valid;
}

async function run() {
  const sweaterIds = await getValidIds('womens-knit-sweater-single');
  const leggingIds = await getValidIds('womens-leggings-single-person');
  
  console.log("Valid Sweaters:", sweaterIds);
  console.log("Valid Leggings:", leggingIds);
  
  let sc = 0, lc = 0;
  db.forEach(item => {
    if (item.name === 'Ribbed Knit Sweater') {
      if (sweaterIds.length > 0) {
        item.imageUrl = `https://images.unsplash.com/${sweaterIds[sc % sweaterIds.length]}?auto=format&fit=crop&q=80&w=800`;
        sc++;
      }
    } else if (item.name === 'Seamless Align Leggings') {
      if (leggingIds.length > 0) {
        item.imageUrl = `https://images.unsplash.com/${leggingIds[lc % leggingIds.length]}?auto=format&fit=crop&q=80&w=800`;
        lc++;
      }
    }
  });

  const newContent = `export interface ClothingItem {\n  id: string;\n  brand: string;\n  name: string;\n  category: string[];\n  bodyTypes: string[];\n  style: string[];\n  priceEst: string;\n  buyUrl: string;\n  imageUrl: string;\n  description: string;\n}\n\nexport const CLOTHING_DATABASE: ClothingItem[] = ${JSON.stringify(db, null, 2)};\n`;
  fs.writeFileSync('src/data/international_clothes.ts', newContent);
  console.log("Updated DB with verified images.");
}
run();
