import React from 'react';
import Header from './Header';
import Head from './Head';

const Main = (props) => (
  <div>
    <style>{
      `
        body {
          background-color: black;
          height: 100%;
          width: 100%;
          font-family: 'Muli', sans-serif;
        }
      `
    }
    </style>
    <Head />
    <div className="container-fluid">
      <Header />
      {props.children}
    </div>
  </div>
);

export default Main;
