import React from 'react';
import { Card } from 'antd';
import { animated, useSpring } from 'react-spring';

function SimpleCard({ news }) {
  const animProps = useSpring({
    from: { opacity: 0, marginTop: -30 },
    to: { opacity: 1, marginTop: 0 },
  });

  return (
    <animated.div style={animProps}>
      <Card type="inner" title={news}>
        Inner Card content
      </Card>
    </animated.div>
  );
}

export default SimpleCard;
