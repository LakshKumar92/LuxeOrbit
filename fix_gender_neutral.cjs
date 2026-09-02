const fs = require('fs');

const clothesFile = 'src/data/clothes.ts';
let content = fs.readFileSync(clothesFile, 'utf-8');

// replace the "Gender Neutral", "Menswear", "Womenswear" combinations
// actually let's just make the existing ones Menswear, and we'll append some new Womenswear items at the end.

content = content.replace(/"category": \[\s*"Gender Neutral",\s*"Menswear",\s*"Womenswear"\s*\]/g, '"category": ["Menswear"]');
content = content.replace(/"category": \[\s*"Menswear",\s*"Gender Neutral"\s*\]/g, '"category": ["Menswear"]');

// Let's add specific Womenswear alternatives for the 3 items that were in both.
const extraWomenswear = `
  ,
  {
    "id": "w-min-all-new",
    "brand": "Outfitters",
    "name": "Oversized Linen Shirt",
    "category": ["Womenswear"],
    "bodyTypes": ["Slim / Slender", "Curvy / Hourglass"],
    "style": ["Minimalist Chic", "Casual Everyday"],
    "priceEst": "PKR 3,500",
    "buyUrl": "https://outfitters.com.pk",
    "imageUrl": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=800",
    "description": "A relaxed, oversized linen shirt with drop shoulders for maximum ease."
  },
  {
    "id": "w-street-all-new",
    "brand": "LAMA",
    "name": "Utility Cargo Pants",
    "category": ["Womenswear"],
    "bodyTypes": ["Athletic / Muscular", "Broad / Structured", "Slim / Slender"],
    "style": ["Streetwear / Urban"],
    "priceEst": "PKR 4,800",
    "buyUrl": "https://lamaretail.com",
    "imageUrl": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=800",
    "description": "Loose-fit cargo pants with multiple functional pockets and adjustable hems."
  },
  {
    "id": "w-casual-all-new",
    "brand": "Breakout",
    "name": "Fleece Essentials Hoodie",
    "category": ["Womenswear"],
    "bodyTypes": ["Slim / Slender", "Round / Full", "Curvy / Hourglass"],
    "style": ["Casual Everyday", "Streetwear / Urban"],
    "priceEst": "PKR 3,200",
    "buyUrl": "https://breakout.com.pk",
    "imageUrl": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800",
    "description": "A cozy, dropped-shoulder fleece hoodie designed for everyday layering."
  }
];
`;

content = content.replace(/\n\];\s*$/, extraWomenswear);

fs.writeFileSync(clothesFile, content, 'utf-8');
console.log("Done");
