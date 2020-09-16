import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, Grid } from '@material-ui/core';

export default ({ ageFromProps, ageToProps }) => {
  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              name='targetings[age_from]'
              label='Age From'
              defaultValue='18'
              style={{ width: 200 }}
            />
          </Grid>
          <Grid item>
            <TextField
              name='targetings[age_to]'
              label='Age To'
              defaultValue='70'
              style={{ width: 200 }}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
