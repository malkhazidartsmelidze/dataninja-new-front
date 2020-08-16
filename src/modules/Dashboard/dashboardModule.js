import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';
import DashboardPage from './Pages/Dashboard/DashboardPage';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: '/dashboard',
        secure: true,
        component: DashboardPage,
      },
    ],
    layout: DashboardLayout,
  });
  return mod.render();
};
