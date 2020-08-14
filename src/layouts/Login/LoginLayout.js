import React, { Suspense } from 'react';
import { renderRoutes } from 'routes';
import { LinearProgress } from '@material-ui/core';

export default (props) => {
  const { route } = props;
  return <Suspense fallback={<LinearProgress />}>{renderRoutes(route.routes)}</Suspense>;
};
