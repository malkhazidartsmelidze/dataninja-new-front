import React, { lazy } from 'react';
import { Redirect, Switch, Route as ReactRouter } from 'react-router-dom';
import useUser from 'store/UserContext';
import P from 'paths';
import { Error404Page } from 'modules/Errors';
import BootstrapAppModule from 'modules/BootstrapAppModule';
import HomePageModule from 'modules/Home/HomePageModule';

const AuthModule = lazy(() => import('modules/Auth'));

export const routes = [
  {
    path: P.HOME,
    exact: true,
    component: HomePageModule,
  },
  {
    path: P.LOGIN_MODULE,
    component: AuthModule,
  },
  {
    path: P.APP,
    secured: true,
    component: BootstrapAppModule,
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
  if (secured && !auth) return <Redirect to={P.LOGIN} />;
  if (guest && auth) return <Redirect to={P.DASHBOARD_MODULE} />;

  return <ReactRouter {...props} />;
};

export const Errors = [
  {
    path: '*',
    component: Error404Page,
  },
];
