import React from 'react';

const MoviesList = ({ movies = [] }) => (
  <div>About to display {movies.length} movies...</div>
);

export default MoviesList;
