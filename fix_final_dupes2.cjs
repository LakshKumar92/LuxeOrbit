const fs = require('fs');

const clothesFile = 'src/data/clothes.ts';
let content = fs.readFileSync(clothesFile, 'utf-8');

// The new items added at the bottom are:
// w-min-all-new
// w-street-all-new
// w-casual-all-new

content = content.replace(
  /"id": "w-min-all-new"[\s\S]*?"imageUrl": ".*?"/,
  '"id": "w-min-all-new",\n    "brand": "Outfitters",\n    "name": "Oversized Linen Shirt",\n    "category": ["Womenswear"],\n    "bodyTypes": ["Slim / Slender", "Curvy / Hourglass"],\n    "style": ["Minimalist Chic", "Casual Everyday"],\n    "priceEst": "PKR 3,500",\n    "buyUrl": "https://outfitters.com.pk",\n    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/db/Poet-shirt.jpg"'
);

content = content.replace(
  /"id": "w-street-all-new"[\s\S]*?"imageUrl": ".*?"/,
  '"id": "w-street-all-new",\n    "brand": "LAMA",\n    "name": "Utility Cargo Pants",\n    "category": ["Womenswear"],\n    "bodyTypes": ["Athletic / Muscular", "Broad / Structured", "Slim / Slender"],\n    "style": ["Streetwear / Urban"],\n    "priceEst": "PKR 4,800",\n    "buyUrl": "https://lamaretail.com",\n    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Denim_Jeans_Pant.jpg"'
);

content = content.replace(
  /"id": "w-casual-all-new"[\s\S]*?"imageUrl": ".*?"/,
  '"id": "w-casual-all-new",\n    "brand": "Breakout",\n    "name": "Fleece Essentials Hoodie",\n    "category": ["Womenswear"],\n    "bodyTypes": ["Slim / Slender", "Round / Full", "Curvy / Hourglass"],\n    "style": ["Casual Everyday", "Streetwear / Urban"],\n    "priceEst": "PKR 3,200",\n    "buyUrl": "https://breakout.com.pk",\n    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Hoodie_man.jpg"'
);

fs.writeFileSync(clothesFile, content, 'utf-8');
