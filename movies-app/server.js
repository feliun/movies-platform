const express = require('express');
const next = require('next');

const dev = process.env.SERVICE_ENV !== 'live';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => handle(req, res));

    server.listen(4000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:4000');
    });
  })
  .catch((e) => {
    console.error(e.stack);
    process.exit(1);
  });
