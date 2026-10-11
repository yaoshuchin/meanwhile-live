// Windows non-ASCII path patch for Node.js module resolution
const Module = require('module');
const origRequire = Module.prototype.require;

Module.prototype.require = function(request) {
  if (typeof request === 'string' && request.includes('1151009複製網頁')) {
    const fixed = request.replace(/c:\\antigravity\\1151009複製網頁/gi, 'C:\\ANTIGR~1\\115100~3');
    return origRequire.call(this, fixed);
  }
  return origRequire.apply(this, arguments);
};

process.chdir('C:\\ANTIGR~1\\115100~3');

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: 'C:\\ANTIGR~1\\115100~3' });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

console.log('啟動 Meanwhile 本地伺服器中...');
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Meanwhile 網站已在本地啟動：http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('伺服器啟動錯誤：', err);
  process.exit(1);
});
