import Module from 'modules/Module';
import { LoginPage } from 'modules/Auth/Pages';
import P from 'paths';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.LOGIN,
        guest: true,
        component: LoginPage,
      },
    ],
  });
  return mod.render();
};
