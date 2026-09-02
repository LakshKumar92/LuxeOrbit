const fs = require('fs');
const https = require('https');

const clothes = fs.readFileSync('src/data/international_clothes.ts', 'utf8');
const urls = [...new Set(clothes.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?auto=format&fit=crop&q=80&w=800/g) || [])];

console.log(`Testing ${urls.length} unique URLs...`);

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 0 })).end();
  });
}

async function run() {
  let badUrls = [];
  for (let i = 0; i < urls.length; i += 10) {
    const chunk = urls.slice(i, i + 10);
    const results = await Promise.all(chunk.map(checkUrl));
    results.filter(r => r.status !== 200).forEach(r => {
      console.log(`Broken: ${r.url} (Status: ${r.status})`);
      badUrls.push(r.url);
    });
  }
  
  console.log(`Found ${badUrls.length} broken URLs.`);
  
  if (badUrls.length > 0) {
    let newClothes = clothes;
    const fallbackMens = 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800';
    
    for (const bad of badUrls) {
      newClothes = newClothes.split(bad).join(fallbackMens);
    }
    fs.writeFileSync('src/data/international_clothes.ts', newClothes);
    console.log("Replaced broken URLs with fallbacks.");
  }
}
run();
