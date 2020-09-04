import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { AdCreationBlock, AdTypeChooser } from 'modules/Ad/components';

export default () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper elevation={4}>
          <AdTypeChooser />
        </Paper>
      </Grid>
    </Grid>
  );
};
