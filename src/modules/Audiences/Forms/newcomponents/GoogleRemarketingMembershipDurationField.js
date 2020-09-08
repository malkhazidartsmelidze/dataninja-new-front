import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  return (
    <PanelField
      title='Enter MemberShip Duration'
      content={
        <Grid container alignItems='center'>
          <Grid item>
            <TextField
              name='membership_duration'
              type='number'
              placeholder='Enter Membership Duration'
            />
          </Grid>
          <Grid item> Days</Grid>
        </Grid>
      }
    />
  );
};
