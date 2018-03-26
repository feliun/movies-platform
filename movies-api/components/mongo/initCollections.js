module.exports = () => {
  const collections = { movies: null };

  const start = ({ mongo }, cb) => {
    collections.movies = mongo.collection('movies');
    collections.movies.createIndex({ id: 1 }, { unique: true });

    collections.landing_content = mongo.collection('landing_content');
    collections.landing_content.createIndex({ id: 1 }, { unique: true });

    return cb(null, collections);
  };

  return { start };
};
