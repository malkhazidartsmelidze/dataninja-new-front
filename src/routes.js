import React, { lazy } from 'react';
import { Redirect, Switch, Route as ReactRouter } from 'react-router';
import useUser from 'store/UserContext';
import P from 'paths';

const AuthModule = lazy(() => import('modules/Auth'));
const UserModule = lazy(() => import('modules/User'));
const CrmModule = lazy(() => import('modules/Crm'));
const AdModule = lazy(() => import('modules/Ad'));
const DashboardModule = lazy(() => import('modules/Dashboard'));
const BuilderModule = lazy(() => import('modules/Builder'));

export const routes = [
  {
    path: P.HOME,
    exact: true,
    component: () => <Redirect to='/auth/login' />,
  },
  {
    path: P.LOGIN_MODULE,
    component: AuthModule,
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
    path: P.DASHBOARD_MODULE,
    secured: true,
    module: DashboardModule,
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
    path: '*',
    render: () => (
      <div>
        Error 404 go to <a href={P.HOME}>home</a>
      </div>
    ),
  },
];

export const renderRoutes = (routes, extraProps = {}, switchProps = {}) => {
  return (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        const render = (props) => {
          if (route.render) {
            return route.render({ ...props, ...extraProps, route: route });
          } else if (route.component) {
            return <route.component {...props} {...extraProps} route={route} />;
          } else if (route.module) {
            return <route.module module={route} />;
          }
        };

        return (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            guest={route.guest}
            secured={route.secured}
            strict={route.strict}
            render={render}
          />
        );
      })}
    </Switch>
  );
};

export const Route = ({ secured, guest, ...props }) => {
  const { auth } = useUser();
  if (secured && !auth) return <Redirect to='/auth/login' />;
  if (guest && auth) return <Redirect to='/dashboard' />;

  return <ReactRouter {...props} />;
};
