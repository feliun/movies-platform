import React from 'react';
import './style.scss';

const Team = ({ data }) => (
  <section id="team" className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">{data.title}</h2>
          <h3 className="section-subheading">{data.subtitle}</h3>
        </div>
      </div>
      <div className="row">
        {
          data.members.map((member) => (
            <div className={`col-sm-${12 / data.members.length}`}>
              <div className="team-member">
                <img className="mx-auto" src={member.img} alt="" />
                <h4>{member.name}</h4>
                <p>{member.position}</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href={member.twitter} target="_blank">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={member.linkedin} target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={member.github} target="_blank">
                      <i className="fa fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))
        }
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large">{data.bottom}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
