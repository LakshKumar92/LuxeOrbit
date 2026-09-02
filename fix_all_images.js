const fs = require('fs');

const clothesFile = 'src/data/clothes.ts';
let content = fs.readFileSync(clothesFile, 'utf-8');

// Oversized Linen Shirt (line 122 area)
// Mbroidered Net Saree (line 141 area)
// They both use 1610030469983. Let's give Linen Shirt a male unsplash image.
// Unsplash male images:
// 1593030761757-71fae45fa0e7 -> Graphic Boxy Tee
// 1490481651871-ab68de25d43d -> Textured Polo Shirt
// Let's use Wikipedia ones for safety so they don't break.

let counter = 0;
content = content.replace(/"imageUrl": "([^"]+)"/g, (match, url) => {
    // just change duplicates
    return match;
});
