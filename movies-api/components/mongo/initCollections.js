module.exports = () => {
  const collections = { movies: null };

  const start = ({ mongo }, cb) => {
    collections.movies = mongo.collection('movies');
    collections.movies.createIndex({ id: 1 }, { unique: true });
    return cb(null, collections);
  };

  return { start };
};
