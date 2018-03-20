import React from 'react';
import withRedux from 'next-redux-wrapper';
import Landing from '../components/Views/Landing/container';
import { initStore } from '../store';

class LandingScreen extends React.Component {
  static getInitialProps({ isServer }) {
    return { isServer };
  }

  render() {
    return (
      <Landing />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(LandingScreen);
