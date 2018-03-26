import React from 'react';
import withRedux from 'next-redux-wrapper';
import 'isomorphic-fetch';
import MoviesList from '../components/Views/MoviesList/container';
import Layout from '../components/Layout/Main';
import { initStore, updateMovies } from '../store';

class MainScreen extends React.Component {
  static async getInitialProps({ store }) {
    return fetch('http://localhost:3000/api/v1/movies') // eslint-disable-line no-undef
      .then(res => res.json())
      .then(movies => store.dispatch(updateMovies({ movies })));
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
