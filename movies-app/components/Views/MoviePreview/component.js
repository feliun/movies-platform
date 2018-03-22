import React from 'react';
import './style.scss';

const MoviePreview = ({ movie }) => (
  <div className="col">
    <section>
      <article>
        <a href={`/movie/${movie.id}`}>
          <img src={movie.images.poster} alt="" className="img-responsive movie-picture" />
        </a>
        <p className="movie-header">{movie.title}</p>
        <p className="movie-subheader">{movie.year}</p>
      </article>
    </section>
  </div>
);

export default MoviePreview;
