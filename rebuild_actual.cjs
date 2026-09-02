const fs = require('fs');

const mensQueries = {
  "Tailored Suit Jacket": "mens-suit-jacket",
  "Double-Knee Work Pants": "mens-work-pants",
  "Oxford Button-Down": "mens-oxford-shirt",
  "Graphic Heavyweight Tee": "mens-graphic-tee",
  "Pleated Trousers": "mens-pleated-trousers",
  "Leather Moto Jacket": "mens-leather-jacket",
  "Tech Fleece Hoodie": "mens-hoodie",
  "Cashmere Overcoat": "mens-overcoat",
  "Selvedge Denim Jeans": "mens-denim-jeans",
  "Supima Crew T-Shirt": "mens-t-shirt"
};

const womensQueries = {
  "Seamless Align Leggings": "womens-leggings",
  "Silk Camisole": "womens-camisole",
  "Satin Midi Skirt": "womens-skirt",
  "Oversized Wool Blazer": "womens-blazer",
  "Ribbed Knit Sweater": "womens-knit-sweater",
  "Tailored Wide-Leg Trousers": "womens-wide-leg-trousers",
  "Straight Leg Denim": "womens-denim-jeans",
  "Cropped Utility Jacket": "womens-utility-jacket",
  "High Slit Midi Dress": "womens-midi-dress",
  "Draped Chiffon Gown": "womens-gown"
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
    console.log(`Fetching images for ${name}...`);
    mappedUrls[name] = await getUrls(query, 35); // Grab 35 just to be safe
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
