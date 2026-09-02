const fs = require('fs');

const mensQueries = {
  "Tailored Wool Suit": "mens-tailored-suit",
  "Oxford Cotton Shirt": "mens-button-shirt",
  "Selvedge Denim Jeans": "mens-denim-jeans",
  "Cashmere Crewneck": "mens-crewneck-sweater",
  "Leather Moto Jacket": "mens-leather-jacket",
  "Tech Fleece Hoodie": "mens-hoodie",
  "Chino Shorts": "mens-shorts",
  "Linen Button-Down": "mens-linen-shirt",
  "Puffer Vest": "mens-puffer-vest",
  "Corduroy Trousers": "mens-trousers"
};

const womensQueries = {
  "Silk Midi Dress": "womens-midi-dress",
  "Tailored Blazer": "womens-blazer",
  "Cashmere Turtleneck": "womens-turtleneck",
  "Wide-Leg Trousers": "womens-wide-leg-trousers",
  "Pleated Midi Skirt": "womens-skirt",
  "Oversized Trench Coat": "womens-trench-coat",
  "Draped Chiffon Gown": "womens-gown",
  "Seamless Align Leggings": "womens-leggings",
  "Linen Wrap Top": "womens-wrap-top",
  "Ribbed Knit Sweater": "womens-knit-sweater"
};

async function getUrls(query, targetCount) {
  const urls = [];
  let page = 1;
  while (urls.length < targetCount && page < 10) {
    try {
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
  return [...new Set(urls)].slice(0, targetCount);
}

async function run() {
  console.log("Fetching perfectly matched URLs...");
  
  const mappedUrls = {};
  
  const allQueries = { ...mensQueries, ...womensQueries };
  
  for (const [name, query] of Object.entries(allQueries)) {
    console.log(`Fetching 30 images for ${name} (${query})...`);
    mappedUrls[name] = await getUrls(query, 30); // Grab 30 just to be safe
  }
  
  let clothesStr = fs.readFileSync('src/data/international_clothes.ts', 'utf8');
  const match = clothesStr.match(/export const CLOTHING_DATABASE: ClothingItem\[\] = (\[[\s\S]*\]);/);
  const db = eval(match[1]);
  
  const usageCount = {};
  
  db.forEach(item => {
    if (!usageCount[item.name]) usageCount[item.name] = 0;
    
    const urlsForName = mappedUrls[item.name];
    if (urlsForName && urlsForName.length > 0) {
      // Pick a unique image from the specific array for this name
      const img = urlsForName[usageCount[item.name] % urlsForName.length];
      item.imageUrl = img;
      usageCount[item.name]++;
    }
  });
  
  const newContent = `export interface ClothingItem {\n  id: string;\n  brand: string;\n  name: string;\n  category: string[];\n  bodyTypes: string[];\n  style: string[];\n  priceEst: string;\n  buyUrl: string;\n  imageUrl: string;\n  description: string;\n}\n\nexport const CLOTHING_DATABASE: ClothingItem[] = ${JSON.stringify(db, null, 2)};\n`;
  fs.writeFileSync('src/data/international_clothes.ts', newContent);
  console.log("Completely rebuilt database with PERFECTLY MATCHED NAPI URLs!");
}

run();
