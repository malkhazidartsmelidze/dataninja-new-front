import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from 'common/@mui';
import { LanguageContextProvider } from 'store/LanguageContext';
import { UserContextProvider } from 'store/UserContext';
import Icon from '@mdi/react';
import { NotificationsContextProvider, RenderedNotifications } from 'store/NotificationsContext';
import './index.css';

Icon.defaultProps.size = '1em';

const Bootstrap = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <UserContextProvider>
          <CssBaseline />
          <LanguageContextProvider>
            <NotificationsContextProvider>
              <Suspense fallback={<LinearProgress />}>{children}</Suspense>
              <RenderedNotifications />
            </NotificationsContextProvider>
          </LanguageContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default Bootstrap;
