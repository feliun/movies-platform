import YouTube from 'react-youtube';
import moment from 'moment';
import React from 'react';
import './style.scss';

const videoOpts = {
  height: '235',
  width: '100%',
};

const MovieDetail = ({ id, title, synopsis, year, images, rating, runtime, released, trailer, genres }) => (
  <div>
    <div className="row movie-detail">
      <div className="col-12">
        <div className="row">
          <div className="col-4">
            <img id="movie-detail-pic" alt={title} src={images.banner} />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-1">
                <a href={`http://www.imdb.com/title/${id}`} target="_blank">
                  <img id="imdb-link-img" alt="imdb" src="https://images-na.ssl-images-amazon.com/images/G/01/imdb/images/logos/imdb_fb_logo-1730868325._CB514892123_.png" />
                </a>
              </div>
              <div id="title" className="col-11">
                <h1>
                  {title}&nbsp;
                  <span id="year">({year})</span>
                  <span id="rating">
                    <img id="imdb-score-img" alt="score" src="http://icons.iconarchive.com/icons/aha-soft/multimedia/256/favourites-star-SH-icon.png" />
                    {rating.percentage / 10 }/10
                  </span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="movie-details-info">{runtime} min | {genres.join(', ')} | {moment(released * 1000).format('DD MMMM YYYY')}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>{synopsis}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <YouTube
                  videoId={trailer.split('?v=')[1]}
                  opts={videoOpts}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p id="movie-stats">{rating.watching} watching | {rating.votes} votes | {rating.loved} loved | {rating.hated} hated</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetail;
