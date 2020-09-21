import React, { lazy } from 'react';
import Module from 'modules/Module';
import P from 'paths';
import IndexPage from './Pages/IndexPage';
import CreateAdPage from './Pages/CreateAdPage';
import { CreateAdContextProvider } from './store/CreateAdContext';
import CreateSearchAdPage from './Pages/CreateSearchAdPage';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.AD_MODULE,
        exact: true,
        component: IndexPage,
      },
      {
        path: P.AD_CREATE_SEARCH,
        exact: true,
        component: CreateSearchAdPage,
      },
      {
        path: P.AD_CREATE,
        exact: true,
        component: CreateAdPage,
      },
    ],
  });

  return <CreateAdContextProvider>{mod.render()}</CreateAdContextProvider>;
};
