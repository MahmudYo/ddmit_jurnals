const { createServer } = require('http');
const { parse } = require('url');
const proxy = require('http-proxy-middleware');

const server = createServer((req, res) => {
  const { pathname, query } = parse(req.url, true);
  
  if (pathname.startsWith('/api')) {
    return apiProxy(req, res);
  }

  res.statusCode = 404;
  res.end('Not Found');
});

const apiProxy = proxy({
  target: 'http://a0990588.xsph.ru',
  changeOrigin: true,
  pathRewrite: { '^/api': '/' }
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log('> Ready on http://localhost:3000');
});
