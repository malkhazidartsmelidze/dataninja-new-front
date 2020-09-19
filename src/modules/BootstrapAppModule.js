import React, { Suspense, lazy } from 'react';
import Module from 'modules/Module';
import { AppLayout } from 'layouts';
import { LinearProgress } from '@material-ui/core';
import P from 'paths';
import AdModule from 'modules/Ad';
const UserModule = lazy(() => import('modules/User'));
const CrmModule = lazy(() => import('modules/Crm'));
// const AdModule = lazy(() => import('modules/Ad'));
const DashboardModule = lazy(() => import('modules/Dashboard'));
const BuilderModule = lazy(() => import('modules/Builder'));
const AudiencesModule = lazy(() => import('modules/Audiences'));

export default () => {
  const mod = new Module({
    routes: [
      {
        path: P.DASHBOARD_MODULE,
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
      {
        path: P.AUDIENCES_MODULE,
        module: AudiencesModule,
      },
    ],
    layout: AppLayout,
  });

  return <Suspense fallback={<LinearProgress />}>{mod.render()}</Suspense>;
};
