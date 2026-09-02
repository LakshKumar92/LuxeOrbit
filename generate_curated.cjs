const fs = require('fs');

const styles = ["Casual", "Formal", "Streetwear", "Business", "Minimalist", "Vintage", "Athletic", "Bohemian"];

async function getIds(query) {
  const res = await fetch(`https://unsplash.com/s/photos/${query}`);
  const html = await res.text();
  const matches = html.match(/photo-[0-9]{13}-[a-z0-9]+/g) || [];
  return [...new Set(matches)].slice(0, 15);
}

async function run() {
  const curated = { mens: {}, womens: {} };
  
  for (const style of styles) {
    console.log(`Fetching mens ${style}...`);
    curated.mens[style] = await getIds(`mens-${style.toLowerCase()}-fashion`);
    console.log(`Fetching womens ${style}...`);
    curated.womens[style] = await getIds(`womens-${style.toLowerCase()}-fashion`);
  }
  
  fs.writeFileSync('curated_ids.json', JSON.stringify(curated, null, 2));
  console.log("Saved curated_ids.json");
}

run();
