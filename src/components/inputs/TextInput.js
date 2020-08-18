import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default p => {
  const { sizes, ...rest } = p;

  return (
    <Grid item {...sizes}>
      <TextField
        fullWidth
        variant='outlined'
        size='small'
        autoComplete='off'
        type='text'
        style={{ marginBottom: '4px' }}
        {...rest}
      />
    </Grid>
  );
};
