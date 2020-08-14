import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'Bpg-Arial', 'Helvetica', 'Arial'].join(','),
    fontSize: 13,
    body2: {
      color: '#476282',
    },
  },
  colors: {
    yellow: 'rgb(255, 242, 18)',
    mainText: 'rgba(255, 255, 255, 0.7)',
    secondaryText: 'rgba(255, 255, 255, 0.3)',
    borderColor: '#051e34',
    appbarBackground: '#fafafa',
    bodyColor: '#476282',
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        padding: 8,
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
});
