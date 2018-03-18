import React from 'react';
import withRedux from 'next-redux-wrapper';
import MoviesList from '../components/Views/MoviesList/container';
import allMovies from '../fixtures/movies.json';
import { initStore, updateMovies } from '../store';

class Main extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(updateMovies({ movies: allMovies, isServer }));
    return { isServer };
  }

  render() {
    return (
      <MoviesList />
    );
  }
}

const mapStateToProps = ({ light, movies }) => ({ light, movies });

const mapDispatchToProps = () => ({});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Main);
