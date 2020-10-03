import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '60px',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      marginRight: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
    },
  },
  primaryText: {
    fontSize: '14px',
    fontWeight: '800',
    fontFamily: 'FiraGO',
    padding: 0,
    margin: 0,
    color: '#696969',
    cursor: 'pointer',
  },
  secondary: {
    fontSize: '10px',
    fontFamily: 'FiraGO',
    color: '#bababa',
    padding: 0,
    margin: 0,
    cursor: 'pointer',
  },
}));

function HeaderList(props) {
  const classes = useStyles();
  const text = props.text;
  const secondary = props.secondary;
  return (
    <Grid item className={classes.root}>
      <Link
        style={{ color: props.color, secondcolor: props.color }}
        className={classes.primaryText}
      >
        {text}
      </Link>
      <Link
        style={{ color: props.secondcolor, fontWeight: props.fontWeight }}
        className={classes.secondary}
      >
        {secondary}
      </Link>
    </Grid>
  );
}

export default HeaderList;
