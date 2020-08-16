import React from 'react';
import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';

export default () => {
  const BuilderModule = new Module({
    routes: [
      {
        path: '/builder',
        secure: true,
        component: () => <div>this is buiklder module</div>,
      },
    ],
    layout: DashboardLayout,
  });
  return BuilderModule.render();
};
