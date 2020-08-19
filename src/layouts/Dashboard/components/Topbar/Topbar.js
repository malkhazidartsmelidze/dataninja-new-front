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
} from '@material-ui/core';
import useLanguage from 'store/LanguageContext';
import useUser from 'store/UserContext';

const Topbar = (props) => {
  const classes = useStyles();
  const { onDrawerToggle } = props;
  const { language, changeLanguage, languages } = useLanguage();
  const { user } = useUser();
  if (!user) return <div>'asdfds'</div>;
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
          <Grid item>{LanguageSwitcher}</Grid>
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
              <Avatar src={user.getAvatar()} alt={user.getName()} />
            </IconButton>
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
    zIndex: 999999,
  },
  toolBar: {
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
