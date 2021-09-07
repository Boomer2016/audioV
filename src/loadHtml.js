const Koa = require('koa');
const path = require('path');
const fs = require('fs');

const htmlKoa = new Koa();

htmlKoa.use(async (ctx, next) => {
  try {
    ctx.set("Content-Type", "text/html");
    const html = path.resolve(__dirname, './index.html')
    ctx.body = fs.readFileSync(html);
    ctx.status = 200
  } catch (error) {
    ctx.status = 500
    ctx.body = {
      errDesc: '出错了',
      hasError: true
    }
  }
  await next()
})

module.exports = htmlKoa;