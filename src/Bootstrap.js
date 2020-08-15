import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from 'common/@mui';
import { LanguageContextProvider } from 'store/LanguageContext';
import { UserContextProvider } from 'store/UserContext';
import './index.css';

const Bootstrap = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <UserContextProvider>
        <CssBaseline />
        <LanguageContextProvider>
          <BrowserRouter>
            <Suspense fallback={<LinearProgress />}>{children}</Suspense>
          </BrowserRouter>
        </LanguageContextProvider>
      </UserContextProvider>
    </MuiThemeProvider>
  );
};

export default Bootstrap;
