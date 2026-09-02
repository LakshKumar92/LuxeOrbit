const fs = require('fs');

const clothesFile = 'src/data/clothes.ts';
let content = fs.readFileSync(clothesFile, 'utf-8');

// We will parse the array and split any item that has BOTH "Menswear" and "Womenswear" into two distinct items.
// Or we'll just modify the categories so that there's no overlap. If an item has both, we keep it as Menswear and duplicate it as Womenswear.

const newItems = [];

// This regex trick is a bit risky on raw string, let's do something simpler:
// We'll run a script that actually parses it, but the file is a TS file containing `export const clothes = [...]`
// So we can strip `export const clothes: Clothes[] = ` and parse as JSON, but wait, it has trailing comma or `Clothes` type.

