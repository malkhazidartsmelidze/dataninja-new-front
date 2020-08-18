import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

export default (p) => {
  const { sizes, options, ...rest } = p;

  return (
    <Grid item {...sizes}>
      <TextField
        fullWidth
        variant='outlined'
        size='small'
        autoComplete='off'
        select={true}
        style={{ marginBottom: '4px' }}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};
