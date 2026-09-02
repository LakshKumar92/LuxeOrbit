const https = require('https');
https.request('https://images.unsplash.com/photo-QYLF827l25g?auto=format&fit=crop&q=80&w=800', {method: 'HEAD'}, r => console.log('photo-:', r.statusCode)).end();
https.request('https://images.unsplash.com/QYLF827l25g?auto=format&fit=crop&q=80&w=800', {method: 'HEAD'}, r => console.log('no prefix:', r.statusCode)).end();
