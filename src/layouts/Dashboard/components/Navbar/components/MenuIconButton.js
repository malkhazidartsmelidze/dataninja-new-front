import React from 'react';
import { IconButton, Icon, makeStyles } from '@material-ui/core';

export default (props) => {
  const classes = useStyles();

  return (
    <IconButton color='main' aria-label='delete' size='small' className={classes.button} {...props}>
      <Icon className={classes.icon}>{props.icon}</Icon>
    </IconButton>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    padding: '4px',
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
      background: 'rgba(255, 255, 255,0.3)',
    },
  },
  icon: {
    fontSize: '1.1rem',
  },
}));
