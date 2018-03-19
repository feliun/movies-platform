import React from 'react';

const MoviePreview = ({ movie }) => (
  <div className="col">
    <style>{
        `
        .movie {
          margin: 5px;
        }
        .movie-picture {
          width: 100px;
        }
        .movie-header {
          color: white;
          font-weight: bold;
          font-size: 8px;
          text-align: left;
          margin: 0px;
          width: 100px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .movie-subheader {
          color: gray;
          font-size: 8px;
          text-align: left;
          margin: 0px;
          width: 100px
        }
        `
      }
    </style>
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
