import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '16%',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '20px',
    },
  },
  div: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    backgroundColor: 'rgb(255,78,0, 0.2)',
    display: 'flex',
    fontSize: '14px',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  // break: {
  //     [theme.breakpoints.down('sm')]: {
  //         display: 'none'
  //     },
  // },
  text: {
    fontFamily: 'FiraGO',
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#000000',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '12px',
    },
  },
}));

function BlockComponent(props) {
  const text = props.text;
  const text2 = props.text2;
  const img = props.img;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.div}>{img}</div>
      <Typography className={classes.text}>
        {text}
        <br className={classes.break} />
        {text2}
      </Typography>
    </div>
  );
}

export default BlockComponent;
