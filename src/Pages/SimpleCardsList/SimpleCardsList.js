import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import SimpleCard from '../../components/SimpleCard';
import PageAbsoluteWrapper from '../../components/PageAbsoluteWrapper';

function SimpleCardsList() {
  const [news, setNews] = useState([1]);
  return (
    <PageAbsoluteWrapper>
      <Button
        type="primary"
        onClick={() => setNews([...news, news?.length + 1])}
      >
        Increment
      </Button>
      <Button type="primary" onClick={() => setNews([1])}>
        Reset
      </Button>
      {news.map((num) => (
        <SimpleCard news={num} key={num} />
      ))}
    </PageAbsoluteWrapper>
  );
}

export default SimpleCardsList;
