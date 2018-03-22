import React from 'react';
import './style.scss';

const Header = ({ data }) => (
  <div>
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{data.title}</div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                  <input type="text" className="form-control form-control-lg" placeholder={data.search.title} />
                </div>
                <div className="col-12 col-md-3">
                  <a type="submit" href="/search" className="btn btn-block btn-lg btn-primary">{data.search.button}</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
