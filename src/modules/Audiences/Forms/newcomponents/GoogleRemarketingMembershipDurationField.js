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
              name='membership_life_span'
              type='number'
              defaultValue={365}
              placeholder='Enter Membership Duration'
            />
          </Grid>
          <Grid item> Days</Grid>
        </Grid>
      }
    />
  );
};
