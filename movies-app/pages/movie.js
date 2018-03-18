import React from 'react';
import allMovies from '../fixtures/movies.json';

const MovieScreen = ({ movie }) => (
  <div>
    Rendering movie {movie.title}...
    {movie.synopsis}
  </div>
);

MovieScreen.getInitialProps = (context) => {
  const { id } = context.query;
  const movie = allMovies.find((currentMovie) => currentMovie.id === id);
  return { movie };
};

export default MovieScreen;
