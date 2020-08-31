import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  const { setField, getField } = useNewAdContext();

  return (
    <PanelField
      content={
        <Grid container>
          <Grid item xs={6}>
            <TextField
              label='Start Date'
              name='start_date'
              value={getField('start_date').value}
              onChange={(e) => setField('start_date', e.target.value)}
              type='date'
              placeholder='Enter Start Date'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='End Date'
              name='end_date'
              value={getField('end_date').value}
              onChange={(e) => setField('end_date', e.target.value)}
              type='date'
              placeholder='Enter Start Date'
            />
          </Grid>
        </Grid>
      }
    />
  );
};
