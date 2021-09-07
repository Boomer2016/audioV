const Koa = require('koa');
const mount = require('koa-mount');
const bufKoa = require('./getBuffer');
const htmlKoa = require('./loadHtml');

const mainKoa = new Koa();

mainKoa.use(mount('/', htmlKoa))
mainKoa.use(mount('/getBuffer', bufKoa))

mainKoa.listen(3000, () => {
  console.log('server run at 3000');
})