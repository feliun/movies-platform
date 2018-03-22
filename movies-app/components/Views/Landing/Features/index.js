import React from 'react';

const Features = ({ data }) => (
  <section id="features">
    <style>{`
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
    `
    }
    </style>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">{data.title}</h2>
          <h3 className="section-subheading text-muted">{data.subtitle}</h3>
        </div>
      </div>
      <div className="row text-center">
        {
          data.values.map((feat) => (
            <div className={`col-md-${12 / (data.values.length)}`}>
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary" />
                <i className={`fa ${feat.icon} fa-stack-1x fa-inverse`} />
              </span>
              <h4 className="service-heading">{feat.title}</h4>
              <p className="text-muted">{feat.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  </section>
);

export default Features;
