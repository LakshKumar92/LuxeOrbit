const fs = require('fs');

let clothesStr = fs.readFileSync('src/data/international_clothes.ts', 'utf8');
// Extract the array using regex
const match = clothesStr.match(/export const CLOTHING_DATABASE: ClothingItem\[\] = (\[[\s\S]*\]);/);
if (!match) throw new Error("Could not parse db");
const db = eval(match[1]);

const sweaterIds = [
  '1764329344229-403d6eecf832',
  '1574201635302-388dd92a4c3f',
  '1608984361471-ff566593088f',
  '1580331451062-99ff652288d7',
  '1670512195015-fccc6d2ef308'
];

const trouserIds = [
  '1690820317364-3e22c2f68eb4',
  '1580651214613-f4692d6d138f',
  '1687825515654-23620796760c',
  '1768289222419-255b80c65259',
  '1675034389774-b6f4b471394c'
];

const gownIds = [
  '1682097591321-6cfe09c0e485',
  '1623580674393-edf6eb7090f8',
  '1568251188392-ae32f898cb3b',
  '1610048616025-11a3dcc9fd0b',
  '1683140550628-000b9b702cad'
];

let sc = 0, tc = 0, gc = 0;

db.forEach(item => {
  if (item.name === 'Ribbed Knit Sweater') {
    item.imageUrl = `https://images.unsplash.com/photo-${sweaterIds[sc % sweaterIds.length]}?auto=format&fit=crop&q=80&w=800`;
    sc++;
  } else if (item.name === 'Tailored Wide-Leg Trousers') {
    item.imageUrl = `https://images.unsplash.com/photo-${trouserIds[tc % trouserIds.length]}?auto=format&fit=crop&q=80&w=800`;
    tc++;
  } else if (item.name === 'Draped Chiffon Gown') {
    item.imageUrl = `https://images.unsplash.com/photo-${gownIds[gc % gownIds.length]}?auto=format&fit=crop&q=80&w=800`;
    gc++;
  }
});

const newContent = `export interface ClothingItem {
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

export const CLOTHING_DATABASE: ClothingItem[] = ${JSON.stringify(db, null, 2)};
`;

fs.writeFileSync('src/data/international_clothes.ts', newContent);
console.log("Updated clothes db directly.");
