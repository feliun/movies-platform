import React from 'react';
import Header from './Header';
import Head from './Head';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Main = (props) => (
  <div>
    <Head />
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </div>
);

export default Main;
