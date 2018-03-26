import React from 'react';
import Header from './Header';
import Features from './Features';
import Timeline from './Timeline';
import Team from './Team';
import Footer from './Footer';
import './style.scss';

const Landing = ({ cms }) => (
  <div>
    <div id="page-top">
      <Header data={cms.header} />
      <Features data={cms.features} />
      <Timeline data={cms.timeline} />
      <Team data={cms.team} />
      <Footer data={cms.footer} />
    </div>
  </div>
);

export default Landing;
