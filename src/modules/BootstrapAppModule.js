import React, { Suspense, lazy } from 'react';
import Module from 'modules/Module';
import { DashboardLayout } from 'layouts';
import { UserDataContextProvider } from 'store/UserDataContext';
import { LinearProgress } from '@material-ui/core';
import P from 'paths';

const UserModule = lazy(() => import('modules/User'));
const CrmModule = lazy(() => import('modules/Crm'));
const AdModule = lazy(() => import('modules/Ad'));
const DashboardModule = lazy(() => import('modules/Dashboard'));
const BuilderModule = lazy(() => import('modules/Builder'));

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.DASHBOARD_MODULE,
        secured: true,
        module: DashboardModule,
      },
      {
        path: P.AD_MODULE,
        module: AdModule,
      },
      {
        path: P.CRM_MODULE,
        module: CrmModule,
      },
      {
        path: P.BUILDER_MODULE,
        module: BuilderModule,
      },
      {
        path: P.USER_MODULE,
        module: UserModule,
      },
    ],
    layout: DashboardLayout,
  });

  return (
    <UserDataContextProvider>
      <Suspense fallback={<LinearProgress />}>{mod.render()}</Suspense>
    </UserDataContextProvider>
  );
};
