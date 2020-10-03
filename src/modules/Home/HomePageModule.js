import React from 'react';
import Module from 'modules/Module';
import P from 'paths';
import HomePage from './HomePage';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.HOME_PAGE,
        component: HomePage,
      },
    ],
  });
  return mod.render();
};
