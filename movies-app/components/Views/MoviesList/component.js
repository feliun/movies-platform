import React from 'react';
import MoviePreview from '../MoviePreview/container';

const MoviesList = ({ movies = [] }) => (
  <div>
    <section className="row">
      {
        movies.map((movie) => <MoviePreview key={movie.id} movie={movie} />)
      }
    </section>
  </div>
);

export default MoviesList;
