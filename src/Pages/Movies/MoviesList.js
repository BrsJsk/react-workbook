import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import { Col, Row, Skeleton } from 'antd';
import MovieCard from './MovieCard';

function MoviesList(props) {
  const [loading, movies] = useContext(MovieContext);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div style={{ margin: '0 auto', width: '80vw' }}>
      <Row gutter={16}>
        {movies.map((movie, index) => (
          <Col span={8} key={index}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MoviesList;
