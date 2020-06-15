const AzFuncCascade = require('@azure-functions-middlewares/core');
const Jimp = require('jimp');
const app = new AzFuncCascade();

app.use(async (context, STOP_SIGNAL) => {
  const imagem = await Jimp.read(context.req.query.url);
  const { h: altura } = context.req.query;
  imagem.resize(Jimp.AUTO, parseInt(altura));

  if (context.req.query.cache) {
    let expires;
    try {
      expires = parseInt(context.req.query.cache);
    } catch (error) {
      expires = 7200;
    }
    context.res.headers['Cache-Control'] = `max-age=${expires}`;
  }

  const buffer = await imagem.getBufferAsync(Jimp.AUTO);
  context.res.headers['Content-Type'] = imagem.getMIME();
  context.res.body = new Uint8Array(buffer);
});

module.exports = app.listen();