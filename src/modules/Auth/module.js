import Module from 'modules/Module';
import { LoginPage } from 'modules/Auth/Pages';

export default () => {
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
