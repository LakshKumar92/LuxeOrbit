const fs = require('fs');

const mensImages = [
  "1593030761757-71fae45fa0e7", "1520975954732-35dd22299614", "1551488831-00ddcb6c6bd3",
  "1591047139829-19fc5863fb7a", "1499996860823-5214fcc65f8f", "1516257984-b1c411422fd4",
  "1479064551384-0aaf572ebd98", "1617137968427-85924c800a22", "1503341455253-b2e723bb3dbb",
  "1504593683696-03c00445d0b4", "1507682520764-152e0a2489c6", "1488161628813-04466f872528",
  "1600093463592-8e36ae95ef56", "1505022610485-0249ba5b3675", "1517523112467-920fba05342a",
  "1617141571404-71e86a02b6be", "1484515991647-c5760fce0c78", "1487222477894-8943e31ef7b2",
  "1611817758376-7928e202518e", "1506634572416-48cdfeebdf52", "1512436991641-01f2f81498b5",
  "1594938298603-c8148c4dae35", "1509631179647-0177331693ae", "1492562080023-ab3db95bfbce",
  "1550246140-5119ae4790b8", "1502326135804-031f7db1f94a"
];

const womensImages = [
  "1475178626620-27827e8d5337", "1529139574466-a303027c1d8b", "1594938298603-c8148c4dae35",
  "1552374196-1ab2a1c593e8", "1585487000160-6ebcfceb0d03", "1539008835657-9e8e9680c956",
  "1490481651871-ab68de25d43d", "1485230895920-ee9cf164ec14", "1508215885820-4585e5b85437",
  "1434389677353-84725048b066", "1545291730-fbf8739d2242", "1483985988355-763728e1935b",
  "1469334025828-f27958f0c293", "1485968579580-b6d095142e6e", "1598532163257-ae3c6b2524b6", 
  "1515886657613-9f3515b0c78f", "1515886657613-9f3515b0c78f", "1605763240000-7e93b172d754",
  "1487222477894-8943e31ef7b2", "1503342217505-b0a15ec3261c", "1485231169207-24a9e5306cd1",
  "1495385373394-01f4c1615a45", "1496747611176-843222e1e57c", "1494435777497-6a5676769018",
  "1495105787522-5334e3ffa0ea", "1509631179647-0177331693ae"
];

const mensBrands = ["Zara", "Uniqlo", "Gucci", "Ralph Lauren", "Tom Ford", "Acne Studios", "Carhartt WIP", "Nike", "Fear of God", "Aime Leon Dore", "Givenchy", "A.P.C.", "Off-White"];
const womensBrands = ["Reformation", "Prada", "Aritzia", "Saint Laurent", "Alexander McQueen", "Lululemon", "Chanel", "Miu Miu", "Acne Studios", "Bottega Veneta", "Zimmermann", "Jacquemus"];

const bodyTypes = [
  "Slim / Slender", 
  "Athletic / Muscular", 
  "Broad / Structured", 
  "Curvy / Hourglass", 
  "Round / Full"
];

const styles = [
  "Casual Everyday", 
  "Elevated Formal", 
  "Luxury Streetwear", 
  "Minimalist Chic", 
  "Avant-Garde"
];

const mensNames = ["Tailored Suit Jacket", "Supima Crew T-Shirt", "Oxford Button-Down", "Double-Knee Work Pants", "Tech Fleece Hoodie", "Leather Moto Jacket", "Pleated Trousers", "Selvedge Denim Jeans", "Cashmere Overcoat", "Graphic Heavyweight Tee"];
const womensNames = ["High Slit Midi Dress", "Tailored Wide-Leg Trousers", "Silk Camisole", "Oversized Wool Blazer", "Cropped Utility Jacket", "Seamless Align Leggings", "Draped Chiffon Gown", "Straight Leg Denim", "Ribbed Knit Sweater", "Satin Midi Skirt"];

let items = [];
let idCounter = 1;

function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function getPrice() { return '$' + (Math.floor(Math.random() * 500) + 49) + '.00'; }
function getUrl(brand) { return 'https://www.' + brand.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() + '.com'; }

const safeIds = JSON.parse(fs.readFileSync('safe_ids.json', 'utf8'));

const curated = JSON.parse(fs.readFileSync('curated_ids.json', 'utf8'));

// Generate 250 Menswear items
for (let i = 0; i < 250; i++) {
  const brand = getRandom(mensBrands);
  const itemStyles = [getRandom(styles), getRandom(styles)];
  // Use the first style to pick a highly relevant image from the curated dictionary
  const styleImages = curated.mens[itemStyles[0]] || curated.mens['Casual'];
  const imageId = getRandom(styleImages);
  
  items.push({
    id: `m-gen-${idCounter++}`,
    brand: brand,
    name: getRandom(mensNames),
    category: ["Menswear"],
    bodyTypes: [getRandom(bodyTypes), getRandom(bodyTypes)],
    style: itemStyles,
    priceEst: getPrice(),
    buyUrl: getUrl(brand),
    imageUrl: `https://images.unsplash.com/${imageId}?auto=format&fit=crop&q=80&w=800`,
    description: "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  });
}

// Generate 250 Womenswear items
for (let i = 0; i < 250; i++) {
  const brand = getRandom(womensBrands);
  const itemStyles = [getRandom(styles), getRandom(styles)];
  const styleImages = curated.womens[itemStyles[0]] || curated.womens['Casual'];
  const imageId = getRandom(styleImages);

  items.push({
    id: `w-gen-${idCounter++}`,
    brand: brand,
    name: getRandom(womensNames),
    category: ["Womenswear"],
    bodyTypes: [getRandom(bodyTypes), getRandom(bodyTypes)],
    style: itemStyles,
    priceEst: getPrice(),
    buyUrl: getUrl(brand),
    imageUrl: `https://images.unsplash.com/${imageId}?auto=format&fit=crop&q=80&w=800`,
    description: "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  });
}

const fileContent = `export interface ClothingItem {
  id: string;
  brand: string;
  name: string;
  category: string[];
  bodyTypes: string[];
  style: string[];
  priceEst: string;
  buyUrl: string;
  imageUrl: string;
  description: string;
}

export const CLOTHING_DATABASE: ClothingItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync('src/data/international_clothes.ts', fileContent, 'utf-8');
console.log("Successfully generated 500 items into international_clothes.ts");
