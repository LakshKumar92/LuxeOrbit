const fs = require('fs');
const https = require('https');
const path = require('path');

const mensIds = [
  '1669688174622-0393f5c6baa2', '1617137968427-85924c800a22', '1618886614638-80e3c103d31a',
  '1479064555552-3ef4979f8908', '1617114919297-3c8ddb01f599', '1706806943465-68c2a32bd888',
  '1527010154944-f2241763d806', '1617113930975-f9c7243ae527', '1488161628813-04466f872be2',
  '1661326297568-65045688d10a', '1617662408044-cda3ab7134c9', '1618001789159-ffffe6f96ef2',
  '1672239496412-ab605befa53f', '1621605815971-fbc98d665033', '1727942418440-d085b3b5f065',
  '1602810318383-e386cc2a3ccf'
];

const womensIds = [
  '1675186049419-d48f4b28fe7c', '1515886657613-9f3515b0c78f', '1483985988355-763728e1935b',
  '1492707892479-7bc8d5a4ee93', '1689371952452-c88c72464115', '1532453288672-3a27e9be9efd',
  '1590330297626-d7aff25a0431', '1664202526047-405824c633e7', '1618244972963-dbee1a7edc95',
  '1623039497026-00af61471107', '1512101903502-7eb0c9022c74', '1683817138481-dcdf64a40859',
  '1524255684952-d7185b509571', '1612423284934-2850a4ea6b0f', '1731911656286-92bf1ebc87f3',
  '1726843669720-46319c0e2326', '1619086303291-0ef7699e4b31', '1495121605193-b116b5b9c5fe',
  '1617922001439-4a2e6562f328'
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
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function run() {
  if (!fs.existsSync('public/mens')) fs.mkdirSync('public/mens', { recursive: true });
  if (!fs.existsSync('public/womens')) fs.mkdirSync('public/womens', { recursive: true });
  
  let mensCount = 0;
  for (let i = 0; i < mensIds.length; i++) {
    const url = `https://images.unsplash.com/photo-${mensIds[i]}?auto=format&fit=crop&q=80&w=800`;
    const dest = path.join(__dirname, `public/mens/img_${mensCount}.jpg`);
    try { await download(url, dest); console.log(`Downloaded mens/img_${mensCount}.jpg`); mensCount++; } 
    catch (e) { console.error(`Skipping mens ${mensIds[i]}: ${e.message}`); }
  }

  let womensCount = 0;
  for (let i = 0; i < womensIds.length; i++) {
    const url = `https://images.unsplash.com/photo-${womensIds[i]}?auto=format&fit=crop&q=80&w=800`;
    const dest = path.join(__dirname, `public/womens/img_${womensCount}.jpg`);
    try { await download(url, dest); console.log(`Downloaded womens/img_${womensCount}.jpg`); womensCount++; } 
    catch (e) { console.error(`Skipping womens ${womensIds[i]}: ${e.message}`); }
  }
}
run();
