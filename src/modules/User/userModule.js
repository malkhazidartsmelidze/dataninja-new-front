import React from 'react';
import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: '/user',
        secure: true,
        component: () => <div>This is user module</div>,
      },
    ],
    layout: DashboardLayout,
  });
  return mod.render();
};
