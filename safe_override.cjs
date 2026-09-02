const fs = require('fs');

async function getUrls(query, targetCount) {
  const urls = [];
  let page = 1;
  while (urls.length < targetCount && page < 5) {
    try {
      const res = await fetch(`https://unsplash.com/napi/search/photos?query=${query}&per_page=30&page=${page}`);
      const data = await res.json();
      if (!data.results) break;
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
  return [...new Set(urls)].slice(0, targetCount);
}

async function run() {
  console.log("Fetching safe alternative URLs...");
  const safeBlouse = await getUrls('womens-button-up-blouse', 35);
  const safeJoggers = await getUrls('womens-linen-joggers', 35);
  
  let clothesStr = fs.readFileSync('src/data/international_clothes.ts', 'utf8');
  const match = clothesStr.match(/export const CLOTHING_DATABASE: ClothingItem\[\] = (\[[\s\S]*\]);/);
  const db = eval(match[1]);
  
  let bCount = 0;
  let jCount = 0;
  
  db.forEach(item => {
    if (item.name === 'Silk Camisole') {
      item.name = 'Silk Button-Up Blouse';
      item.imageUrl = safeBlouse[bCount % safeBlouse.length];
      bCount++;
    }
    if (item.name === 'Seamless Align Leggings') {
      item.name = 'Relaxed Linen Joggers';
      item.imageUrl = safeJoggers[jCount % safeJoggers.length];
      jCount++;
    }
  });
  
  const newContent = `export interface ClothingItem {\n  id: string;\n  brand: string;\n  name: string;\n  category: string[];\n  bodyTypes: string[];\n  style: string[];\n  priceEst: string;\n  buyUrl: string;\n  imageUrl: string;\n  description: string;\n}\n\nexport const CLOTHING_DATABASE: ClothingItem[] = ${JSON.stringify(db, null, 2)};\n`;
  fs.writeFileSync('src/data/international_clothes.ts', newContent);
  console.log("Replaced inappropriate items with highly professional alternatives!");
}

run();
