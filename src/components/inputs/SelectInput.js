import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

export default (p) => {
  const { options, ...rest } = p;

  return (
    <TextField autoComplete='off' select={true} {...rest}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
