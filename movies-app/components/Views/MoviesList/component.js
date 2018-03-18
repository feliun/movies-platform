import React from 'react';
import MoviePreview from '../MoviePreview/container';

const MoviesList = ({ movies = [] }) => (
  <div>
    <style>{
        `
        .row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }
        `
      }
    </style>
    <section className="row">
      {
        movies.map((movie) => <MoviePreview key={movie.id} movie={movie} />)
      }
    </section>
  </div>
);

export default MoviesList;
