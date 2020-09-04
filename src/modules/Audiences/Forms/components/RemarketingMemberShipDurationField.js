import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  const [value, setValue] = useState(30);

  return (
    <PanelField
      title='Enter MemberShip Duration'
      content={
        <Grid container alignItems='center'>
          <Grid item>
            <TextField
              name='audience_name'
              type='number'
              value={value}
              // value={getField('audience_name').value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Enter Membership Duration'
            />
          </Grid>
          <Grid item> Days</Grid>
        </Grid>
      }
    />
  );
};
