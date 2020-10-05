import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: '#151a22',
    paddingBottom: 50,
    paddingTop: 90,
    marginTop: 50,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '50px',
    },
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    color: '#2c7df0',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 2.29,
    [theme.breakpoints.down('sm')]: {
      marginTop: '90px',
    },
  },
  h1: {
    fontSize: 54,
    color: '#ffffff',
    fontWeight: 900,
    lineHeight: 1.11,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    fontFamily: 'FiraGO',
    background: '#2c7df0',
    color: '#ffffff',
    borderRadius: 19,
    fontSize: 12,
    textTransform: 'none',
    lineHeight: 2.29,
    fontWeight: 800,
    width: 158,
    height: 38,
    marginTop: 20,
    '&:hover': {
      background: '#2c7df0',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '70px',
    },
  },
  nested_grid: {
    width: '100%',
    borderTop: '1px solid #2e3641',
    display: 'flex',
    color: '#ffffff',
    fontSize: 14,
    marginTop: 90,
    padding: '50px 130px 10px 130px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 30px 0 30px ',
      borderTop: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '30px',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px 0 0 0',
      textAlign: 'center',
    },
  },
  link: {
    fontSize: 14,
    fontWeight: 800,
    lineHeight: 2.29,
    color: '#ffffff',
    marginRight: 60,
    [theme.breakpoints.down('sm')]: {
      marginRight: '30px',
    },
    [theme.breakpoints.down('xs')]: {
      fontWeight: 'normal',
      textAlign: 'center',
      margin: '0',
    },
  },
  _container: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '20px',
      // display: 'none',
    },
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      justifyContent: 'center',
      '& div:nth-child(2)': {
        marginLeft: '10px',
        marginRight: '10px',
      },
    },
  },
  icons: {
    marginRight: '12px',
    [theme.breakpoints.down('xs')]: {
      margin: '0',
      '& :nth-child(2)': {
        marginLeft: '10px',
      },
    },
  },
  copyright: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: '20px',
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.footer}>
      <Typography className={classes.info}>That’s not all:</Typography>

      <Typography variant='h1' className={classes.h1}>
        Be amazed by our product?
      </Typography>

      <Grid item align='center'>
        <a href='#header' className={classes.button} variant='filled' color='primary'>
          Try Beta For Free
        </a>
      </Grid>

      {/* <Grid item className={classes.grid}> */}
      <Grid item className={classes.nested_grid}>
        <Grid item className={classes.copyright}>
          Dataninja LLC © 2020
        </Grid>
        <Grid item className={classes._container}>
          <Link href='#' className={classes.link}>
            Legal address: Georgia, Tbilisi, Saburtalo district, Adam Mickiewicz str., bl. No1,
            floor 1, apt., No67
          </Link>
          <Link href='#' className={classes.link}>
            I/C 405383393
          </Link>
        </Grid>
        <Grid item className={classes.icon}>
          <div className={classes.icons}>
            <i
              className='fa fa-facebook'
              style={{
                color: '#000000',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            ></i>
          </div>
          <div className={classes.icons}>
            <i
              className='fa fa-twitter'
              style={{
                color: '#000000',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            ></i>
          </div>
          <div className={classes.icons}>
            <i
              className='fa fa-instagram'
              style={{
                color: '#ffffff',
                backgroundColor: '#151a22',
                fontSize: '24px',
                borderRadius: '50 % ',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            ></i>
          </div>
        </Grid>
      </Grid>
      {/* </Grid> */}
    </Box>
  );
}

export default Footer;
