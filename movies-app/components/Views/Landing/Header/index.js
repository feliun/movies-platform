import React from 'react';
import './style.scss';

const Header = ({ data }) => (
  <div>
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{data.title}</div>
          <div className="intro-heading text-uppercase">{data.subtitle}</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/search">{data.button}</a>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
