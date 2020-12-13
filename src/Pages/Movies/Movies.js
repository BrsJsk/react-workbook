import React from 'react';
import { MovieProvider } from './MovieContext';
import MoviesList from './MoviesList';
import MoviesFooter from './MoviesFooter';
import PageAbsoluteWrapper from '../../components/PageAbsoluteWrapper';

function Movies() {
  return (
    <PageAbsoluteWrapper>
      <MovieProvider>
        <MoviesList></MoviesList>
        <MoviesFooter />
      </MovieProvider>
    </PageAbsoluteWrapper>
  );
}

export default Movies;
