const fs = require('fs');

async function getIds(query) {
  const res = await fetch(`https://unsplash.com/s/photos/${query}`);
  const html = await res.text();
  const matches = html.match(/photo-[0-9]{13}-[a-z0-9]+/g) || [];
  return [...new Set(matches)].slice(0, 15);
}

async function run() {
  const m1 = await getIds('mens-suit');
  const m2 = await getIds('mens-streetwear');
  const m3 = await getIds('mens-jacket');
  
  const w1 = await getIds('womens-formal-wear');
  const w2 = await getIds('womens-office-wear');
  const w3 = await getIds('womens-modest-fashion');

  const mensIds = [...new Set([...m1, ...m2, ...m3])];
  const womensIds = [...new Set([...w1, ...w2, ...w3])];
  
  console.log("MENS:", mensIds.length);
  console.log("WOMENS:", womensIds.length);
  
  fs.writeFileSync('safe_ids.json', JSON.stringify({ mens: mensIds, womens: womensIds }, null, 2));
}

run();
