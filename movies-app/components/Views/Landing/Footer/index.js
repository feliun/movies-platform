import React from 'react';
import './style.scss';

const Footer = ({ data }) => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <span className="copyright">
            <p>{data.copyright}</p>
          </span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href={data.twitter} target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href={data.linkedin} target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href={data.github} target="_blank">
                <i className="fa fa-github" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href={data.privacy}>Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href={data.termsOfUse}>Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
