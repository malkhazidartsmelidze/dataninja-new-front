import React, { lazy } from 'react';
import Module from 'modules/Module';
import P from 'paths';

const AdCreationPage = lazy(() => import('./Pages/AdCreationPage'));

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.AD_MODULE,
        exact: true,
        component: () => <div>this is ad module</div>,
      },
      {
        path: P.AD_CREATE,
        exact: true,
        component: AdCreationPage,
      },
    ],
  });
  return mod.render();
};
