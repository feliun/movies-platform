import React from 'react';

const Footer = ({ data }) => (
  <footer id="footer">
    <style>{`
      footer {
        padding: 25px 0;
        text-align: center;
      }

      footer span.copyright {
        font-size: 90%;
        line-height: 40px;
        text-transform: none;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      footer ul.quicklinks {
        font-size: 90%;
        line-height: 40px;
        margin-bottom: 0;
        text-transform: none;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      footer ul.social-buttons {
        margin-bottom: 0;
      }

      footer ul.social-buttons li a {
        font-size: 20px;
        line-height: 40px;
        display: block;
        width: 40px;
        height: 40px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        color: white;
        border-radius: 100%;
        outline: none;
        background-color: #212529;
      }

      footer ul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {
        background-color: #fed136;
      }
    `
    }
    </style>

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <span className="copyright">{data.copyright}</span>
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
