import React from 'react';

const MovieDetail = ({ title, synopsis, year, images, rating, runtime, released, trailer, genres }) => (
  <div>
    <style>{
      `
      .movie-detail {
        margin-top: 30px;
        margin-left: 10px;
      }
      #movie-detail-pic {
        width: 250px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      h1 {
        font-size: 20px;
        color: white;
      }
      p {
        font-size: 12px;
        color: white;
        text-align: justify;
      }
      `
    }
    </style>
    <div className="row movie-detail">
      <div className="col-4">
        <img id="movie-detail-pic" alt={title} src={images.banner} />
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col-12">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <p>{year}</p>
          </div>
          <div className="col-2">
            <p>{runtime} min</p>
          </div>
          <div className="col-1">
            <p>{rating.percentage}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <p>{genres[0]}</p>
          </div>
          <div className="col-1">
            <p>{genres[1]}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>{synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetail;
