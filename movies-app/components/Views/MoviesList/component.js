import React from 'react';
import Movie from '../Movie/container';
import './moviesList.css';

const MoviesList = ({ movies = [] }) => (
  <div>
    <style>{
        `
        #movie-list {
          background-color: black;
        }
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
    <section id="movie-list" className="row">
      {
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)
      }
    </section>
  </div>
);

export default MoviesList;
