import React from 'react';
import Header from './Header';
import './main.scss';

const Main = (props) => (
  <div id="movies-container">
    <div className="container-fluid">
      <Header />
      {props.children}
    </div>
  </div>
);

export default Main;
