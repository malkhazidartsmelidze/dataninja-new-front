import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HeaderList from './HeaderList';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuFunction from './Menu';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MobileHeader from './mobile/MobileHeader';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '80px',
    width: '100%',
    alignItems: 'center',
    marginBottom: '40px',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
      padding: '0',
      margin: '0',
    },
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '900',
    fontFamily: 'FiraGO',
    marginRight: '30px',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      margin: '0',
      marginLeft: '40px',
    },
  },
  paragraph: {
    margin: 0,
    padding: 0,
    paddingRight: '30px',
    borderRight: '1px solid #c4c4c4',
    cursor: 'default',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  listItem: {
    display: 'flex',
    marginRight: '50px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  primary: {
    fontSize: '14px',
    fontWeight: '800',
    fontFamily: 'FiraGO',
    padding: 0,
    margin: 0,
    color: '#959595',
    cursor: 'pointer',
  },
  secondary: {
    fontSize: '10px',
    fontFamily: 'FiraGO',
    padding: 0,
    margin: 0,
    color: '#000000',
    fontWeight: '800',
    cursor: 'pointer',
  },
  button: {
    textTransform: 'none',
    fontFamily: 'FiraGO',
    borderRadius: '24px',
    backgroundColor: '#2c7df0',
    color: '#ffffff',
    fontSize: '14px',
    padding: '8px 24px',
    fontWeight: 'bold',
    '&:hover': {
      background: '#2c7df0',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
      padding: '8px 12px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      padding: '12px 20px',
    },
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '10px',
    marginRight: '50px',
    [theme.breakpoints.down('md')]: {
      marginRight: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '16px',
      display: 'none',
    },
  },
  menu: {
    backgroundColor: '#ff4e00',
    color: '#ffffff',
    borderRadius: '50%',
    minWidth: '26px',
    marginLeft: '4px',
    padding: '10px',
    '&:hover': {
      background: '#ff4e00',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '20px',
    },
  },
  displayNone: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  orange: {
    backgroundColor: '#ff4e00',
  },
  white: {
    backgroundColor: '#ffffff !important',
    color: '#000000 !important',
  },
}));

function Header() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Grid container className={`${classes.container} ${menuOpen ? classes.orange : ''}`}>
      <Grid item className={classes.logo}>
        <img style={{ marginRight: '10px' }} alt='ninja' src='/images/home/dataninja.svg' />
        <p className={classes.paragraph}>DataNinja</p>
      </Grid>
      <Grid className={classes.displayNone}>
        <Grid item>
          <HeaderList text='Home' secondary='Learn More' />
        </Grid>
        <Grid item>
          <HeaderList text='Product Story' secondary='Timeline' />
        </Grid>
        <Grid item>
          <HeaderList text='About us' secondary='Team' />
        </Grid>
        <Grid item>
          <HeaderList text='Contact' secondary='Get in Touch' />
        </Grid>
      </Grid>
      <Grid className={classes.listItem} item>
        <img alt='graduation-hat' src='/images/home/graduation-hat.svg' />
        <div className={classes.div}>
          <Link className={classes.primary}>Dataninja Academy</Link>
          <Link className={classes.secondary}>Soon</Link>
        </div>
      </Grid>
      <Grid item>
        <MobileHeader />
      </Grid>
      {/* <Grid item >
                <Button className={classes.button}>Try Beta for Free</Button>
            </Grid> */}
      <Grid item>
        <Button
          className={`${classes.menu} ${menuOpen ? classes.white : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuRoundedIcon />}
        </Button>
      </Grid>
      <MenuFunction open={menuOpen} onClose={() => setMenuOpen(false)} />
    </Grid>
  );
}

export default Header;
