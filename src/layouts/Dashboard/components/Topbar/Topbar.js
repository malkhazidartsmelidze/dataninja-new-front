import React from 'react';
import {
  AppBar,
  Avatar,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Tooltip,
  Icon,
  makeStyles,
  CircularProgress,
  Zoom,
} from '@material-ui/core';
import useUser from 'store/UserContext';
import { LanguageSwitcher, NetworkAccountSwitchers } from './components';

const Topbar = (props) => {
  const classes = useStyles();
  const { onDrawerToggle } = props;
  const { user, config } = useUser();
  if (!config) return <CircularProgress size='40px' />;

  return (
    <Zoom in={true}>
      <AppBar position='sticky' elevation={2} className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolBar}>
          <Grid container spacing={1} alignItems='center'>
            <Hidden smUp>
              <Grid item>
                <IconButton onClick={onDrawerToggle}>
                  <Icon>menu</Icon>
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item>
              <LanguageSwitcher />
            </Grid>
            <Grid item>
              <NetworkAccountSwitchers />
            </Grid>
            <Grid item xs />
            <Grid item>
              <Tooltip title='Alerts • No alters'>
                <IconButton>
                  <Icon>notifications</Icon>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton className={classes.iconButtonAvatar}>
                <Avatar src={config.getAvatar()} alt={user.getName()} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Zoom>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#fafafa',
    color: theme.colors.bodyColor,
  },
  toolBar: {
    padding: theme.spacing(0, 1, 0, 1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
}));

export default Topbar;
