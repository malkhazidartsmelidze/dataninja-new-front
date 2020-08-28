import React from 'react';
import Module from 'modules/Module';
import P from 'paths';
import { CreateAudiencePage } from './Pages';
import { NewAdContextProvider } from 'store/NewAdContext';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.AUDIENCES_MODULE,
        exact: true,
        secured: true,
        component: () => <div>this is Audience Module</div>,
      },
      {
        path: P.AUDIENCES_CREATE,
        secured: true,
        exact: true,
        component: CreateAudiencePage,
      },
    ],
  });

  return <NewAdContextProvider>{mod.render()}</NewAdContextProvider>;
};
