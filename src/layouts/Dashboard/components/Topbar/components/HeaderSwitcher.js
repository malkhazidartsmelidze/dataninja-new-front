import React from 'react';
import { TextField, MenuItem, InputAdornment, makeStyles } from '@material-ui/core';
import Icon from '@mdi/react';

export default ({ icon, options, onChange, value }) => {
  const classes = useStyles();

  const _InputProps = {
    classes: {
      notchedOutline: classes.noBorder,
      input: classes.switcher,
      adornedStart: classes.adornedStart,
    },
    startAdornment: icon && (
      <InputAdornment position='start'>
        <Icon path={icon} />
      </InputAdornment>
    ),
  };

  return (
    <TextField
      select
      variant='outlined'
      size='small'
      value={value}
      InputProps={_InputProps}
      onChange={(event) => onChange && onChange(event.target.value)}
    >
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

const useStyles = makeStyles((theme) => ({
  noBorder: {
    border: 0,
  },
  switcher: {
    // marginLeft: theme.spacing(),
  },
  adornedStart: {
    paddingLeft: theme.spacing(),
  },
}));
