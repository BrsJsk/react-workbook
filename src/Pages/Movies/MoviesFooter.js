import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

function MoviesFooter() {
  const [loading, movies] = useContext(MovieContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <div>Loaded {movies.length || 0} movies</div>;
}

export default MoviesFooter;
