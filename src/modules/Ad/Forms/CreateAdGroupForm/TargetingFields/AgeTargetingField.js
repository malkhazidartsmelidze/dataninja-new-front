import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, Grid } from '@material-ui/core';

export default ({ ageFromProps, ageToProps }) => {
  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item>
            <TextField {...ageToProps} />
          </Grid>
          <Grid item>
            <TextField {...ageFromProps} />
          </Grid>
        </Grid>
      }
    />
  );
};
