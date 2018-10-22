import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = (componentPath) => Loadable({
  loader: () => import(componentPath),
  loading: () => (
      <React.Fragment>Loading...</React.Fragment>
  )
});

export default LoadableComponent;