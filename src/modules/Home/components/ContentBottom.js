import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 'auto',
  },
  div: {
    width: '100px',
    margin: '50px auto',
    [theme.breakpoints.down('xs')]: {
      margin: '30px auto',
    },
  },
  break: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
  },
  main_txt: {
    fontFamily: 'FiraGO',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    linehHeight: 1.38,
    color: '#454545',
    margin: 'auto',
    marginBottom: '18px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '10px',
    },
  },
  main_color: {
    color: '#ff4e00',
    marginRight: 10,
    marginLeft: 10,
  },
  txt: {
    width: '38%',
    fontSize: 14,
    lineHeight: 1.86,
    color: '#696969',
    margin: 'auto',
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
      width: '44%',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '64%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  built: {
    fontFamily: 'FiraGO',
    fontSize: 24,
    fontWeight: 900,
    linehHeight: 1.38,
    // width: '40%',
    color: '#454545',
    textAlign: 'center',
    margin: 'auto',
    marginBottom: '8px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  media: {
    display: 'flex',
    alignItem: 'center',
    width: '42%',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '44%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '64%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  img1: {
    margin: 'auto',
    width: '100%',
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    color: '#2c7df0',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 2.29,
  },
}));

function ContentBottom() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Divider className={classes.div} />
      <Typography className={classes.main_txt}>
        From One Platform in All networks -<span className={classes.main_color}>Just 1 Click </span>
      </Typography>
      <Typography className={classes.txt}>
        Comprised of Ads Management, User Tracking, Powerful built-in optimization tool, Simple CRM,
        Real-Time Reporting system, Website Builder and Communication/Funnel Builder, we aim to give
        companies one, easy solution to build powerful marketing campaigns and make their digital
        advertising profitable.
      </Typography>
      <div className={classes.media}>
        <img className={classes.img1} alt='dataninja' src='/images/screen/screen_1.JPG' />
      </div>

      <Divider className={classes.div} />
      <Typography className={classes.main_txt}>
        Combined Real-Time Reporting for
        <span className={classes.main_color}>All Networks </span>
      </Typography>
      <Grid item className={classes._container}>
        <Typography className={classes.txt}>
          Comprised of Ads Management, User Tracking, Powerful built-in optimization tool, Simple
          CRM, Real-Time Reporting system, Website Builder and Communication/Funnel Builder, we aim
          to give companies one, easy solution to build powerful marketing campaigns and make their
          digital advertising profitable.
        </Typography>
      </Grid>
      <div className={classes.media}>
        <img className={classes.img1} alt='dataninja' src='/images/screen/screen_2.JPG' />
      </div>

      <Divider className={classes.div} />
      <Grid item className={classes.main_txt}>
        <Typography className={classes.built}>
          Built-In Automatic Audiences and
          <span className={classes.main_color}>Auto Retargeting </span>
          in Many Networks
        </Typography>
      </Grid>
      <Grid item className={classes.main_txt}>
        <Typography className={classes.txt}>
          Comprised of Ads Management, User Tracking, Powerful built-in optimization tool, Simple
          CRM, Real-Time Reporting system, Website Builder and Communication/Funnel Builder, we aim
          to give companies one, easy solution to build powerful marketing campaigns and make their
          digital advertising profitable.
        </Typography>
      </Grid>
      <div className={classes.media}>
        <img className={classes.img1} alt='dataninja' src='/images/screen/screen_3.JPG' />
      </div>

      <Divider className={classes.div} />
      <Typography className={classes.main_txt}>
        <span className={classes.main_color}> Exact Profit</span>Per Advertisement In Real-Time
      </Typography>
      <Grid item className={classes.main_txt}>
        <Typography className={classes.txt}>
          Comprised of Ads Management, User Tracking, Powerful built-in optimization tool, Simple
          CRM, Real-Time Reporting system, Website Builder and Communication/Funnel Builder, we aim
          to give companies one, easy solution to build powerful marketing campaigns and make their
          digital advertising profitable.
        </Typography>
      </Grid>
      <div className={classes.media}>
        <img className={classes.img1} alt='dataninja' src='/images/screen/screen_4.JPG' />
      </div>

      <Divider className={classes.div} />
      <Typography className={classes.info}>
        Recommendations From People who spent $1M. on Digital Advertising Yearly
      </Typography>
      <Typography className={classes.main_txt}>
        The Most <span className={classes.main_color}>Optimized</span>Advertisements
      </Typography>
      <Grid item className={classes.main_txt}>
        <Typography className={classes.txt}>
          Comprised of Ads Management, User Tracking, Powerful built-in optimization tool, Simple
          CRM, Real-Time Reporting system, Website Builder and Communication/Funnel Builder, we aim
          to give companies one, easy solution to build powerful marketing campaigns and make their
          digital advertising profitable.
        </Typography>
      </Grid>
      <div className={classes.media}>
        <img className={classes.img1} alt='dataninja' src='/images/screen/screen_5.JPG' />
      </div>
    </Grid>
  );
}

export default ContentBottom;
