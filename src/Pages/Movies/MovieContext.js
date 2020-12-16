import React, { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    setLoading(true);
    const url = 'http://www.omdbapi.com/?s=harry&apikey=b7f769c3';

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result ? result?.Search : []);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <MovieContext.Provider value={[loading, movies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
