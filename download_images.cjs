const fs = require('fs');
const https = require('https');
const path = require('path');

const validIds = [
    "1605763240000-7e93b172d754", "1594938298603-c8148c4dae35", "1610030469983-98e550d6193c", 
    "1574015974293-817f0ebebb74", "1598532163257-ae3c6b2524b6", "1551488831-00ddcb6c6bd3", 
    "1515886657613-9f3515b0c78f", "1529139574466-a303027c1d8b", "1490481651871-ab68de25d43d", 
    "1617137968427-85924c800a22", "1593030761757-71fae45fa0e7", "1552374196-1ab2a1c593e8", 
    "1620799140408-edc6dcb6d633", "1584273143981-41c073dfe8f8", "1539008835657-9e8e9680c956", 
    "1509631179647-0177331693ae", "1520975954732-35dd22299614", "1585487000160-6ebcfceb0d03"
];

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download, status code: ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  if (!fs.existsSync('public/images')) fs.mkdirSync('public/images', { recursive: true });
  
  let successCount = 0;
  for (let i = 0; i < validIds.length; i++) {
    const url = `https://images.unsplash.com/photo-${validIds[i]}?auto=format&fit=crop&q=80&w=800`;
    const dest = path.join(__dirname, `public/images/img_${successCount}.jpg`);
    try {
      await download(url, dest);
      console.log(`Downloaded images/img_${successCount}.jpg from ${validIds[i]}`);
      successCount++;
    } catch (e) {
      console.error(`Skipping ${validIds[i]}: ${e.message}`);
    }
  }
}

run().then(() => console.log("All done!")).catch(console.error);
