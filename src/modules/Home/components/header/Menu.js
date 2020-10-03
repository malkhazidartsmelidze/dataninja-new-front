import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HeaderList from './HeaderList';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexDirection: 'column',
    color: '#ffffff',
    cursor: 'pointer',
  },
  background: {
    width: '100%',
    backgroundColor: '#ff4e00',
    padding: '32px 48px',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
    marginTop: '-0.5px',
  },
  gridOpen: {
    height: '120px',
    width: '100%',
    position: 'absolute',
    zIndex: '7000',
    top: '76px',
  },
  gridClosed: {
    display: 'none',
  },
});

function Menu() {
  const classes = useStyles();
  return (
    <Grid container item className={classes.root}>
      <Grid item className={classes.background}>
        <HeaderList
          color='#ffffff'
          secondcolor='#722300'
          fontWeight='bold'
          text='Home'
          secondary='Learn More'
        />
        <HeaderList
          color='#ffffff'
          secondcolor='#722300'
          fontWeight='bold'
          text='Product Story'
          secondary='Timeline'
        />
        <HeaderList
          color='#ffffff'
          secondcolor='#722300'
          fontWeight='bold'
          text='About us'
          secondary='Team'
        />
        <HeaderList
          color='#ffffff'
          secondcolor='#722300'
          fontWeight='bold'
          text='Contact'
          secondary='Get in Touch'
        />
      </Grid>
      <Grid>
        <img className={classes.img} alt='bottom' src='/images/home/liquid.svg' />
      </Grid>
    </Grid>
  );
}

function MenuFunction(props) {
  const classes = useStyles();
  const open = props.open;
  return (
    <Grid className={open ? classes.gridOpen : classes.gridClosed}>
      <Menu />
    </Grid>
  );
}

export default MenuFunction;
