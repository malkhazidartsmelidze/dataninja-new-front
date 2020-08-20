import React, { useEffect, useState } from 'react';
import { MenuItem, TextField, Grid, Typography, Hidden } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import SplittedInput from '../SplittedInput';

export default () => {
  const { getField, setField } = useNewAdContext();
  const bidOptimizationType = getField('bid_optimization_type');
  const payFor = getField('pay_for');
  const [show, setShow] = useState(false);
  const payForOption = {
    pay_for_clicks: { value: 'pay_for_clicks', name: 'Pay For Clicks' },
    pay_for_impressions: { value: 'pay_for_impressions', name: 'Pay For Impressions' },
  };

  useEffect(() => {
    if (bidOptimizationType.value == 'pay_per_click') {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [bidOptimizationType.value]);

  const handleChangePayFor = (e) => {
    setField('pay_for', e.target.value, 'facebook');
  };

  if (!show) return null;

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item>
        <Typography color='textSecondary'>Pay For:</Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth={false}
          value={payFor.facebook}
          onChange={handleChangePayFor}
          name='pay_for'
          select={true}
        >
          {Object.values(payForOption).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};
