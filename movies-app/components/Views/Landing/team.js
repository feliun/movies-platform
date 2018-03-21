import React from 'react';

const Team = ({ data }) => (
  <section id="about" className="bg-light">
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

      .team-member {
        margin-bottom: 50px;
        text-align: center;
      }

      .team-member img {
        width: 225px;
        height: 225px;
        border: 7px solid #fff;
      }

      .team-member h4 {
        margin-top: 25px;
        margin-bottom: 0;
        text-transform: none;
      }

      .team-member p {
        margin-top: 0;
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
      <div className="row">
        {
          data.members.map((member) => (
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={member.img} alt="" />
                <h4>{member.name}</h4>
                <p className="text-muted">{member.position}</p>
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
          <p className="large text-muted">{data.bottom}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
