import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, Grid } from '@material-ui/core';

export default ({ ageFromProps, ageToProps }) => {
  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item>
            <TextField name='age_from' label='Age From' style={{ width: 200 }} />
          </Grid>
          <Grid item>
            <TextField name='age_to' label='Age To' style={{ width: 200 }} />
          </Grid>
        </Grid>
      }
    />
  );
};
