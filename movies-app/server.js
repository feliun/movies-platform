const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.SERVICE_ENV !== 'live';
const app = next({ dev });

const decorate = (obj) => Object.assign(obj, { config: { apiUrl: process.env.MOVIES_API_URL || 'http://localhost:3000' } });

app.prepare()
  .then(() => {
    const server = express();

    server.get('/movie/:id', (req, res) => app.render(req, res, '/movie', decorate({ id: req.params.id })));

    server.get('*', (req, res) => {
      const { pathname, query } = parse(req.url, true);
      app.render(req, res, pathname, decorate(query));
    });

    server.listen(4000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:4000');
    });
  })
  .catch((e) => {
    console.error(e.stack);
    process.exit(1);
  });
