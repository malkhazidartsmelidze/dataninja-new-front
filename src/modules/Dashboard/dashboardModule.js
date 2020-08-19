import Module from 'modules/Module';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import P from 'paths';

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.DASHBOARD_MODULE,
        secured: true,
        component: DashboardPage,
      },
    ],
  });
  return mod.render();
};
