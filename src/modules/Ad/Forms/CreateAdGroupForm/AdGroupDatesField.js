import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  return (
    <PanelField
      content={
        <Grid container>
          <Grid item xs={6}>
            <TextField name='adgroup_date_from' label='Date from' defaultValue='2020-11-09' />
          </Grid>
          <Grid item xs={6}>
            <TextField name='adgroup_date_to' label='Date to' defaultValue='' />
          </Grid>
        </Grid>
      }
    />
  );
};
