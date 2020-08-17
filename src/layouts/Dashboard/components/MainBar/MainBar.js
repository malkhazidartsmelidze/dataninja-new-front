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
  TextField,
  MenuItem,
  makeStyles,
  Divider,
} from '@material-ui/core';
import useLanguage from 'store/LanguageContext';
import { useUserData } from 'store/UserDataContext';

const Topbar = (props) => {
  const classes = useStyles();
  const { language, changeLanguage, languages } = useLanguage();
  const { userData } = useUserData();
  if (!userData) return <div>'asdfds'</div>;

  const googleAccounts = userData.getGoogleAccounts();
  const facebokAccounts = userData.getFacebookAccounts();

  const LanguageSwitcher = (
    <TextField
      select
      variant='outlined'
      size='small'
      value={language}
      InputProps={{
        classes: { notchedOutline: classes.noBorder, input: classes.langSwitcher },
      }}
      onChange={(event) => changeLanguage(event.target.value)}
    >
      {languages.map((lang) => (
        <MenuItem key={lang.getCode()} value={lang.getCode()}>
          {lang.getName()}
        </MenuItem>
      ))}
    </TextField>
  );

  return (
    <AppBar position='sticky' elevation={0} className={classes.appBar}>
      <Toolbar disableGutters className={classes.mainBar}>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs />
          <Grid item>
            <TextField
              select
              variant='outlined'
              size='small'
              InputProps={{
                classes: { notchedOutline: classes.noBorder, input: classes.langSwitcher },
              }}
              // onChange={(event) => }
            >
              {googleAccounts.map((acc) => (
                <MenuItem key={acc.id} value={acc.id}>
                  {acc.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              variant='outlined'
              size='small'
              InputProps={{
                classes: { notchedOutline: classes.noBorder, input: classes.langSwitcher },
              }}
            >
              {facebokAccounts.map((acc) => (
                <MenuItem key={acc.id} value={acc.id}>
                  {acc.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#fafafa',
    color: theme.colors.bodyColor,
  },
  mainBar: {
    minHeight: theme.spacing(4),
    padding: theme.spacing(0, 1, 0, 1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  noBorder: {
    border: 0,
  },
  langSwitcher: {
    marginLeft: theme.spacing(),
  },
}));

export default Topbar;
