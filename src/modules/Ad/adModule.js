import React, { lazy } from 'react';
import Module from 'modules/Module';
import P from 'paths';
import { NewAdContextProvider } from 'store/NewAdContext';
import IndexPage from './Pages/IndexPage';
import CreateAdPage from './Pages/CreateAdPage';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.AD_MODULE,
        exact: true,
        component: IndexPage,
      },
      {
        path: P.AD_CREATE,
        exact: true,
        component: CreateAdPage,
      },
    ],
  });

  return <NewAdContextProvider>{mod.render()}</NewAdContextProvider>;
};
