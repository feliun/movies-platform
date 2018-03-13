const bodyParser = require('body-parser');

module.exports = () => {
  const start = ({ app, collections }, cb) => {
    app.use(bodyParser.json());

    app.get('/api/v1/movies', (req, res, next) => {
      const { limit } = req.query;
      const options = limit ? { limit: parseInt(limit, 10) } : {};
      collections.movies.find({}, options).toArray()
        .then((movies) => res.json(movies))
        .catch(next);
    });

    app.get('/api/v1/movies/:id', (req, res, next) => {
      const { id } = req.params;
      collections.movies.findOne({ id })
        .then((movie) => res.json(movie))
        .catch(next);
    });

    cb();
  };

  return { start };
};
