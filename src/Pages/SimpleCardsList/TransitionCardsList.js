import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import SimpleCard from '../../components/SimpleCard';
import { animated, useTransition } from 'react-spring';
import PageAbsoluteWrapper from '../../components/PageAbsoluteWrapper';

function TransitionCardsList() {
  const [news, setNews] = useState([1, 2, 3, 4]);
  const transitions = useTransition(news, (item) => item, {
    from: { opacity: 0, marginTop: -30 },
    enter: { opacity: 1, marginTop: 0 },
    leave: { opacity: 0, marginLeft: -60 },
  });

  const eagerReset = () => {
    let newNews = [];
    for (let i = 0; i < news?.length - 1; i++) {
      newNews = [...newNews, i];
    }

    setNews(newNews);
  };

  return (
    <PageAbsoluteWrapper>
      <Button
        type="primary"
        onClick={() => setNews([...news, news?.length + 1])}
      >
        Increment
      </Button>
      <Button type="primary" onClick={() => eagerReset()}>
        Reset
      </Button>

      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <SimpleCard news={item} />
        </animated.div>
      ))}
    </PageAbsoluteWrapper>
  );
}

export default TransitionCardsList;
