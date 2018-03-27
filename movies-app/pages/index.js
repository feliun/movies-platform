import React from 'react';
import withRedux from 'next-redux-wrapper';
import 'isomorphic-fetch';
import Landing from '../components/Views/Landing/container';
import { initStore } from '../store';

const LandingScreen = ({ cms }) => (
  <Landing cms={cms} />
);

LandingScreen.getInitialProps = async ({ query }) =>
  fetch(`${query.config.apiUrl}/api/v1/cms/1`) // eslint-disable-line no-undef
    .then(res => res.json())
    .then(cms => ({ cms }));

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(LandingScreen);
