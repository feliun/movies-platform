import React from 'react';
import Header from './Header';
import Head from './Head';

const Main = (props) => (
  <div>
    <Head />
    <div className="container-fluid">
      <Header />
      {props.children}
    </div>
  </div>
);

export default Main;
