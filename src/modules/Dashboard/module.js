import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';
import DashboardPage from './Pages/Dashboard/DashboardPage';

export default () => {
  const AuthModule = new Module({
    routes: [
      {
        path: '/dashboard',
        secure: true,
        component: DashboardPage,
      },
    ],
    layout: DashboardLayout,
  });
  return AuthModule.render();
};