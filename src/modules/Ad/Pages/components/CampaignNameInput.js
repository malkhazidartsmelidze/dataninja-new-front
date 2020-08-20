import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField, Grid, FormControlLabel, Typography } from '@material-ui/core';

export default () => {
  const { setField, getField } = useNewAdContext();

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item>
        <Typography color='textSecondary'>Campaign name:</Typography>
      </Grid>
      <Grid item>
        <TextField
          name='campaign_name'
          value={getField('campaign_name').value}
          onChange={(e) => setField('campaign_name', e.target.value)}
          placeholder='Enter Campaign name'
        />
      </Grid>
    </Grid>
  );
};
