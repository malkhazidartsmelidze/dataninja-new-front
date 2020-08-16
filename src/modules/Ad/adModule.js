import React from 'react';
import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: '/ad',
        secure: true,
        component: () => <div>this is ad module</div>,
      },
    ],
    layout: DashboardLayout,
  });
  return mod.render();
};
