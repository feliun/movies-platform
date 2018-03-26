import React from 'react';
import withRedux from 'next-redux-wrapper';
import 'isomorphic-fetch';
import Layout from '../components/Layout/Main';
import MovieDetail from '../components/Views/MovieDetail/container';
import { initStore } from '../store';

const MovieScreen = ({ movie }) => (
  <Layout>
    <MovieDetail {...movie} />
  </Layout>
);

MovieScreen.getInitialProps = async ({ query }) => {
  const { id } = query;
  return fetch(`http://localhost:3000/api/v1/movies/${id}`) // eslint-disable-line no-undef
    .then(res => res.json())
    .then(movie => ({ movie }));
};

const mapStateToProps = ({ light, movies }) => ({ light, movies });

const mapDispatchToProps = () => ({});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(MovieScreen);
