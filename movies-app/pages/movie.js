import React from 'react';
import Layout from '../components/Layout/Main';
import allMovies from '../fixtures/movies.json';

const MovieScreen = ({ movie }) => (
  <Layout>
    Rendering movie {movie.title}...
    {movie.synopsis}
  </Layout>
);

MovieScreen.getInitialProps = (context) => {
  const { id } = context.query;
  const movie = allMovies.find((currentMovie) => currentMovie.id === id);
  return { movie };
};

export default MovieScreen;
