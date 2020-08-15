import React from 'react';
import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';

export default ({ route }) => {
  const AuthModule = new Module({
    routes: [
      {
        path: '/auth/login',
        component: () => <div>Thiiiiiiiiis is login route</div>,
      },
    ],
    layout: DashboardLayout,
  });
  return AuthModule.render();
};
