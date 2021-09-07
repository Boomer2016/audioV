const Koa = require('koa');
const fs = require('fs');
const path = require('path');

const bufKoa = new Koa();
const publicPath = path.resolve(__dirname, '../asset')
bufKoa.use(async (ctx, next) => {
  try {
    const reader = fs.createReadStream(`${publicPath}/006_03_1.wav`);
    const streamToBuffer = (stream) => {
      return new Promise((resolve, reject) => {
        const buffers = [];
        stream.on('error', reject);
        stream.on('data', (data) => buffers.push(data));
        stream.on('end', () => resolve(Buffer.concat(buffers)));
      });
    };
    const content = await streamToBuffer(reader);
    ctx.status = 200;
    ctx.body = {
      content,
      mime_type: 'text/wav',
      hasError: false
    }
  } catch (error) {
    ctx.status = 500
    ctx.body = {
      errDesc: '出错了',
      hasError: true
    }
  }
  await next()
})

module.exports = bufKoa;