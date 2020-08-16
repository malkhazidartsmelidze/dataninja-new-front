import Module from 'modules/Module';
import { LoginPage } from 'modules/Auth/Pages';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: '/auth/login',
        guest: true,
        component: LoginPage,
      },
    ],
  });
  return mod.render();
};
