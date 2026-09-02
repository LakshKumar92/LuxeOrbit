const https = require('https');

const unsplashIds = [
  "1669688174622-0393f5c6baa2", "1617137968427-85924c800a22", "1618886614638-80e3c103d31a",
  "1479064555552-3ef4979f8908", "1617114919297-3c8ddb01f599", "1706806943465-68c2a32bd888",
  "1527010154944-f2241763d806", "1675186049419-d48f4b28fe7c", "1515886657613-9f3515b0c78f",
  "1483985988355-763728e1935b", "1492707892479-7bc8d5a4ee93", "1689371952452-c88c72464115",
  "1532453288672-3a27e9be9efd", "1590330297626-d7aff25a0431"
];

async function checkUrl(id) {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`;
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ id, status: res.statusCode });
    }).on('error', () => resolve({ id, status: 0 })).end();
  });
}

Promise.all(unsplashIds.map(checkUrl)).then(console.log);
