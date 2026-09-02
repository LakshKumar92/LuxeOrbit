const fs = require('fs');

async function getIds(query) {
  const res = await fetch(`https://unsplash.com/s/photos/${query}`);
  const html = await res.text();
  const matches = html.match(/photo-[0-9]{13}-[a-z0-9]+/g) || [];
  return [...new Set(matches)].slice(0, 5);
}

async function run() {
  const sweaters = await getIds('womens-knit-sweater');
  const trousers = await getIds('womens-wide-leg-trousers');
  console.log("Sweater IDs:", sweaters);
  console.log("Trouser IDs:", trousers);
}

run();
