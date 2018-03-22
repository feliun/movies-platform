import React from 'react';
import Header from './Header';

const Main = (props) => (
  <div>
    <div className="container-fluid">
      <Header />
      {props.children}
    </div>
  </div>
);

export default Main;
