import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default ({ dateStartProps, dateEndProps }) => {
  return (
    <PanelField
      content={
        <Grid container>
          <Grid item xs={6}>
            <TextField {...dateStartProps} />
          </Grid>
          <Grid item xs={6}>
            <TextField {...dateEndProps} />
          </Grid>
        </Grid>
      }
    />
  );
};
