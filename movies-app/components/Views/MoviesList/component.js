import React from 'react';
import Movie from '../Movie/container';

const MoviesList = ({ movies = [] }) => (
  <div>
    {
      movies.map((movie) => <Movie key={movie.id} movie={movie} />)
    }
  </div>
);

export default MoviesList;
