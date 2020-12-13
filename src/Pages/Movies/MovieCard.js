import React, { useState } from 'react';
import { Card } from 'antd';
import { animated, useSpring } from 'react-spring';

function MovieCard({ movie }) {
  const [movieHover, setMovieHover] = useState(false);
  const animProps = useSpring({
    from: { opacity: movieHover ? 1 : 0, marginLeft: movieHover ? 0 : -90 },
    to: {
      opacity: movieHover ? 0.7 : 1,
      marginLeft: 0,
      marginTop: movieHover ? -10 : 0,
    },
  });

  const triggerHover = () => {
    setMovieHover(!movieHover);
  };

  return (
    <animated.div
      style={animProps}
      onMouseEnter={triggerHover}
      onMouseLeave={triggerHover}
    >
      <Card
        title={movie.Title}
        bordered={true}
        cover={<img alt="example" src={movie.Poster} />}
      >
        Year: {movie.Year}
        <br />
        Type: {movie.Type}
      </Card>
    </animated.div>
  );
}

export default MovieCard;
