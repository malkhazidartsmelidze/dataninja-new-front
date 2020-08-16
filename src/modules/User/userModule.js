import React from 'react';
import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';
import P from 'paths';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.USER_MODULE,
        secure: true,
        component: () => <div>This is user module</div>,
      },
    ],
    layout: DashboardLayout,
  });
  return mod.render();
};
