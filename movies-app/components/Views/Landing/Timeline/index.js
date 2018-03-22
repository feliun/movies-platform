import React from 'react';
import './style.scss';

const Timeline = ({ data }) => (
  <section id="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">{data.title}</h2>
          <h3 className="section-subheading text-muted">{data.subtitle}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            {
              data.values.map((item, i) => (
                <li className={i % 2 === 0 ? '' : 'timeline-inverted'}>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={item.img} alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading">{item.title}</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))
            }
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>And
                  <br />many
                  <br />more!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
