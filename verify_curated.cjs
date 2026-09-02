const fs = require('fs');
const https = require('https');

const curated = JSON.parse(fs.readFileSync('curated_ids.json', 'utf8'));
let allIds = [];

for (const gender of ['mens', 'womens']) {
  for (const style in curated[gender]) {
    allIds.push(...curated[gender][style]);
  }
}
allIds = [...new Set(allIds)];
console.log(`Testing ${allIds.length} unique URLs from curated_ids.json...`);

async function checkUrl(id) {
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=800`;
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ id, status: res.statusCode });
    }).on('error', () => resolve({ id, status: 0 })).end();
  });
}

async function run() {
  let badIds = [];
  for (let i = 0; i < allIds.length; i += 20) {
    const chunk = allIds.slice(i, i + 20);
    const results = await Promise.all(chunk.map(checkUrl));
    results.filter(r => r.status !== 200).forEach(r => badIds.push(r.id));
  }
  
  console.log(`Found ${badIds.length} broken IDs.`);
  
  for (const gender of ['mens', 'womens']) {
    for (const style in curated[gender]) {
      curated[gender][style] = curated[gender][style].filter(id => !badIds.includes(id));
    }
  }
  
  fs.writeFileSync('curated_ids.json', JSON.stringify(curated, null, 2));
  console.log("Filtered broken IDs and saved curated_ids.json.");
}
run();
