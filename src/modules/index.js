import { DashboardLayout } from 'layouts/Dashboard';
import { renderRoutes } from 'routes';

export default ({ route }) => {
  return <DashboardLayout>{renderRoutes(route.routes)}</DashboardLayout>;
};
