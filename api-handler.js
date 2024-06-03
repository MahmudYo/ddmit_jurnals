const http = require('http');
const httpProxy = require('http-proxy');

// Создаем прокси сервер
const proxy = httpProxy.createProxyServer({});

// Создаем HTTP сервер на Vercel
http.createServer(function (req, res) {
  // Указываем прокси отправить запрос на ваш бэкенд
  proxy.web(req, res, {
    target: 'http://a0990588.xsph.ru'
  });
}).listen(process.env.PORT || 3000); // Слушаем на порту 3000

// Обработка ошибок прокси
proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Произошла ошибка при обращении к бэкенду.');
});
