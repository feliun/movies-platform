import React from 'react';
import withRedux from 'next-redux-wrapper';
import MoviesList from '../components/Views/MoviesList/container';
import Layout from '../components/Layout/Main';
import allMovies from '../fixtures/movies.json';
import { initStore, updateMovies } from '../store';

class MainScreen extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(updateMovies({ movies: allMovies, isServer }));
    return { isServer };
  }

  render() {
    return (
      <Layout>
        <MoviesList />
      </Layout>
    );
  }
}

const mapStateToProps = ({ light, movies }) => ({ light, movies });

const mapDispatchToProps = () => ({});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(MainScreen);
