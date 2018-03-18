import React from 'react';
import withRedux from 'next-redux-wrapper';
import MoviesList from '../components/Views/MoviesList/container';
import { initStore } from '../store';

class Main extends React.Component {
  static getInitialProps({ isServer }) {
    return { isServer };
  }

  render() {
    return (
      <MoviesList isServer={this.props.isServer} />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({ });

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Main);
