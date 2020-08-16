import React from 'react';
import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: '/crm',
        secure: true,
        component: () => <div>this is CRM Module</div>,
      },
      {
        path: '/crm/forms',
        secure: true,
        component: () => <div>this is Crm</div>,
      },
    ],
    layout: DashboardLayout,
  });

  return mod.render();
};
