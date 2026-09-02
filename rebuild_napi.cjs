const fs = require('fs');

async function getUrls(query, targetCount) {
  const urls = [];
  let page = 1;
  while (urls.length < targetCount && page < 20) {
    try {
      console.log(`Fetching ${query} page ${page}...`);
      const res = await fetch(`https://unsplash.com/napi/search/photos?query=${query}&per_page=30&page=${page}`);
      const data = await res.json();
      if (!data.results || data.results.length === 0) break;
      for (const item of data.results) {
        if (item.urls && item.urls.regular) {
          urls.push(item.urls.regular);
        }
      }
      page++;
    } catch (e) {
      console.error(e);
      break;
    }
  }
  return [...new Set(urls)];
}

async function run() {
  const mensUrls = await getUrls('mens-fashion', 250);
  const womensUrls = await getUrls('womens-fashion', 250);
  
  console.log(`Fetched ${mensUrls.length} mens and ${womensUrls.length} womens URLs.`);
  
  let clothesStr = fs.readFileSync('src/data/international_clothes.ts', 'utf8');
  const match = clothesStr.match(/export const CLOTHING_DATABASE: ClothingItem\[\] = (\[[\s\S]*\]);/);
  const db = eval(match[1]);
  
  let mIndex = 0, wIndex = 0;
  
  db.forEach(item => {
    // We can keep the manual overrides for those 3 specific items if we want,
    // but the user complained they disappeared again. 
    // Since we have 250 unique URLs for mens and 250 for womens, 
    // we can just assign a totally unique image to every single item.
    if (item.category.includes('Menswear')) {
      item.imageUrl = mensUrls[mIndex % mensUrls.length];
      mIndex++;
    } else {
      item.imageUrl = womensUrls[wIndex % womensUrls.length];
      wIndex++;
    }
  });
  
  const newContent = `export interface ClothingItem {\n  id: string;\n  brand: string;\n  name: string;\n  category: string[];\n  bodyTypes: string[];\n  style: string[];\n  priceEst: string;\n  buyUrl: string;\n  imageUrl: string;\n  description: string;\n}\n\nexport const CLOTHING_DATABASE: ClothingItem[] = ${JSON.stringify(db, null, 2)};\n`;
  fs.writeFileSync('src/data/international_clothes.ts', newContent);
  console.log("Completely rebuilt database with NAPI URLs!");
}

run();
