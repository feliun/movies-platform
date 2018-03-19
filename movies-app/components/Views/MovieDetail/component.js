import React from 'react';

const MovieDetail = ({ title, synopsis, images }) => (
  <div className="container">
    <style>{
      `
      #movie-detail-pic {
        width: 250px;
      }
      `
    }
    </style>
    <div className="row">
      <div className="col-xs-4 item-photo">
        <img id="movie-detail-pic" alt={title} src={images.banner} />
      </div>
      <div className="col-xs-5">
        <h3>{title}</h3>
        <h5>{synopsis}</h5>
        <h6 className="title-price"><small>PRECIO OFERTA</small></h6>
        <h3>U$S 399</h3>
        <div className="section">
          <h6 className="title-attr"><small>COLOR</small></h6>
          <div>
            <div className="attr" />
            <div className="attr" />
          </div>
        </div>
        <div className="section">
          <h6 className="title-attr"><small>CAPACIDAD</small></h6>
          <div>
            <div className="attr2">16 GB</div>
            <div className="attr2">32 GB</div>
          </div>
        </div>
        <div className="section">
          <h6 className="title-attr"><small>CANTIDAD</small></h6>
          <div>
            <div className="btn-minus"><span className="glyphicon glyphicon-minus" /></div>
            <input value="1" />
            <div className="btn-plus"><span className="glyphicon glyphicon-plus" /></div>
          </div>
        </div>
        <div className="section">
          <button className="btn btn-success"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /> Agregar al carro</button>
          <h6><a href="#"><span className="glyphicon glyphicon-heart-empty" /> Agregar a lista de deseos</a></h6>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetail;
