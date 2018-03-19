import React from 'react';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layout/Main';
import MovieDetail from '../components/Views/MovieDetail/container';
import allMovies from '../fixtures/movies.json';
import { initStore } from '../store';

const MovieScreen = ({ movie }) => (
  <Layout>
    <MovieDetail {...movie} />
  </Layout>
);

MovieScreen.getInitialProps = (context) => {
  const { id } = context.query;
  const movie = allMovies.find((currentMovie) => currentMovie.id === id);
  return { movie };
};

const mapStateToProps = ({ light, movies }) => ({ light, movies });

const mapDispatchToProps = () => ({});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(MovieScreen);
