import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import P from 'paths';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.DASHBOARD_MODULE,
        secure: true,
        component: DashboardPage,
      },
    ],
    layout: DashboardLayout,
  });
  return mod.render();
};
