import React from 'react';

const Header = ({ data }) => (
  <div>
    <style>{`
      a {
        color: #fed136;
      }

      a:hover {
        color: #fec503;
      }

      header.masthead {
        text-align: center;
        color: white;
        background-image: url("https://popcorn-time.to/images/bg-header.jpg");
        height: 400px;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }

      header.masthead .intro-text {
        padding-top: 150px;
        padding-bottom: 100px;
      }

      header.masthead .intro-text .intro-lead-in {
        font-size: 22px;
        font-style: italic;
        line-height: 22px;
        margin-bottom: 25px;
        font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      .form-row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -5px;
        margin-left: -5px;
      }

      .form-row>.col, .form-row>[class*=col-] {
        padding-right: 5px;
        padding-left: 5px;
      }

      .form-control-lg, {
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: .3rem;
      }

      .form-control {
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }

      a, input {
        overflow: visible;
      }

      .btn:not(:disabled):not(.disabled) {
        cursor: pointer;
      }

      .btn-block {
        display: block;
        width: 100%;
      }
      .btn-group-lg>.btn, .btn-lg {
        padding: .5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: .3rem;
      }
      .btn-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      }
      .btn {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }

      .text-primary {
        color: #fed136 !important;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 700;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      section {
        padding: 100px 0;
      }

      section h2.section-heading {
        font-size: 25px;
        margin-top: 0;
        margin-bottom: 15px;
      }

      section h3.section-subheading {
        font-size: 16px;
        font-weight: 400;
        font-style: italic;
        margin-bottom: 75px;
        text-transform: none;
        font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}
    </style>
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
