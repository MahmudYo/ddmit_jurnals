const { Nuxt, Builder } = require('nuxt');
const app = require('express')();

// Импортируем конфигурацию Nuxt.js
const config = require('./nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

// Инициализируем Nuxt.js
const nuxt = new Nuxt(config);

// Опционально, вы можете добавить middleware для вашего Express приложения
app.use(nuxt.render);

// Собираем ваше Nuxt.js приложение, если оно находится в режиме разработки
if (config.dev) {
  new Builder(nuxt).build()
    .then(listen)
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
} else {
  listen();
}

// Запускаем сервер на порту 80
function listen() {
  app.listen(80, '0.0.0.0');
  console.log('Server listening on http://localhost:80');
}
