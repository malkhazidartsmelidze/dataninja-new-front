import React from 'react';
import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';
import P from 'paths';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.BUILDER_MODULE,
        secure: true,
        component: () => <div>this is buiklder module</div>,
      },
    ],
    layout: DashboardLayout,
  });
  return mod.render();
};
