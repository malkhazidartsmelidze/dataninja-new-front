import React from 'react';
import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';
import P from 'paths';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.CRM_MODULE,
        secure: true,
        component: () => <div>this is CRM Module</div>,
      },
      {
        path: P.CRM_FORMS,
        secure: true,
        component: () => <div>this is Crm</div>,
      },
    ],
    layout: DashboardLayout,
  });

  return mod.render();
};
