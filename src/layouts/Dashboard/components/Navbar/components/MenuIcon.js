import React from 'react';
import { ListItemIcon, makeStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

export default (props) => {
  const { iconProps, icon, ...rest } = props;
  const classes = useStyles();

  return (
    <ListItemIcon {...rest} className={classes.itemIcon}>
      <Icon {...iconProps}>{icon}</Icon>
    </ListItemIcon>
  );
};

const useStyles = makeStyles(({ spacing }) => ({
  itemIcon: {
    minWidth: 'auto',
    color: 'inherit',
    marginRight: spacing(),
  },
}));
