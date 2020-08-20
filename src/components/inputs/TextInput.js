import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default (p) => {
  return (
    <TextField fullWidth autoComplete='off' type='text' style={{ marginBottom: '4px' }} {...p} />
  );
};
