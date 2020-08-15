import React from 'react';
import Module from 'modules/Module';
import { LoginPage } from 'modules/Auth/Pages';

export default ({ route }) => {
  const AuthModule = new Module({
    routes: [
      {
        path: '/auth/login',
        guest: true,
        component: LoginPage,
      },
    ],
  });
  return AuthModule.render();
};
