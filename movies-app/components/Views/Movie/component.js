import React from 'react';

const Movie = ({ movie }) => (
  <div>
    <style>{
        `
        .movie {
          width: 100px;
        }
        `
      }
    </style>
    <section className="item col-xs-12 col-sm-6 col-md-4 all category2 category5">
      <a href="assets/images/1.jpg" data-fluidbox>
        <img src={movie.images.poster} alt="" className="img-responsive movie" />
      </a>
    </section>
  </div>
);

export default Movie;
