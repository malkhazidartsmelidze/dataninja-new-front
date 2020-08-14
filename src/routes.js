import React, { lazy } from 'react';
import { Redirect, Switch, Route as RawRoute } from 'react-router';
import useUser from 'store/UserContext';
// import AuthModule from 'modules/Auth/module';

const AuthModule = lazy(() => import('modules/Auth/module'));
const UserModule = lazy(() => import('modules/User'));
const CrmModule = lazy(() => import('modules/Crm'));
const AdModule = lazy(() => import('modules/Ad'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/auth/login' />,
  },
  {
    path: '/auth',
    module: AuthModule,
  },
  {
    path: '/ad',
    module: AdModule,
  },
  {
    path: '/ad',
    module: CrmModule,
  },
  {
    path: '/ad',
    module: UserModule,
  },
  {
    path: '*',
    render: () => (
      <div>
        Error 404 go to <a href='/home'>home</a>
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
            return <route.module />;
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
  if (guest && auth) return <Redirect to='/user/dashboard' />;

  return <RawRoute {...props} />;
};
