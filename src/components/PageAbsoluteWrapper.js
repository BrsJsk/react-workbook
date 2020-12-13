import React from 'react';

function PageAbsoluteWrapper({ children }) {
  return <div style={{ position: 'absolute', width: '100%' }}>{children}</div>;
}

export default PageAbsoluteWrapper;
