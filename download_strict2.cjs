const fs = require('fs');
const https = require('https');
const path = require('path');

const ids = JSON.parse(fs.readFileSync('safe_ids.json', 'utf8'));

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`Status: ${res.statusCode}`));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function run() {
  let mensCount = 0;
  for (let id of ids.mens) {
    if (mensCount >= 30) break; // We only need 30
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`;
    const dest = path.join(__dirname, `public/mens/img_${mensCount}.jpg`);
    try { await download(url, dest); mensCount++; } catch (e) {}
  }

  let womensCount = 0;
  for (let id of ids.womens) {
    if (womensCount >= 30) break; // We only need 30
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`;
    const dest = path.join(__dirname, `public/womens/img_${womensCount}.jpg`);
    try { await download(url, dest); womensCount++; } catch (e) {}
  }
  
  console.log(`Downloaded ${mensCount} mens, ${womensCount} womens.`);
  
  // Now modify the generator script to use these new counts!
  let genScript = fs.readFileSync('generate_static.cjs', 'utf8');
  genScript = genScript.replace(/Math\.floor\(Math\.random\(\) \* \d+\)/g, (match, offset, str) => {
    if (str.substring(offset - 20, offset).includes('/mens/')) return `Math.floor(Math.random() * ${mensCount})`;
    if (str.substring(offset - 20, offset).includes('/womens/')) return `Math.floor(Math.random() * ${womensCount})`;
    return match;
  });
  fs.writeFileSync('generate_static.cjs', genScript);
  console.log("Updated generator bounds.");
}

run();
