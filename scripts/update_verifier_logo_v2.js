const fs = require('fs');
const logoBase64 =  + b64 + ;
const imgTag = '<img src="data:image/png;base64,' + logoBase64 + '" alt="CryptaVeritas" style="width:100px;height:100px;object-fit:contain;display:block;margin:0 auto 16px;">';
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<h1>CryptaVeritas Verifier</h1>', imgTag + '<h1>CryptaVeritas Verifier</h1>');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Done, logo embedded');
