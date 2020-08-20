import React from 'react';
import { MenuItem, TextField, Grid, Typography } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import SplittedInput from '../SplittedInput';

export default () => {
  const { getField, setBidOptimizationType } = useNewAdContext();
  const bidOptimizationType = getField('bid_optimization_type');

  const handleBidOptimizationChange = (e) => {
    const bidOptimization = e.target.value;
    setBidOptimizationType(bidOptimization);
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item>
        <Typography color='textSecondary'>Bid Optimization Goal Type:</Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth={false}
          value={bidOptimizationType.value}
          name='bid_optimization'
          onChange={handleBidOptimizationChange}
          select={true}
        >
          <GoogleBidOptimizationOptions />
        </TextField>
      </Grid>
    </Grid>
  );
};

const GoogleBidOptimizationOptions = () => {
  const bidOptimizationOptions = {
    pay_per_click: { value: 'pay_per_click', name: 'Pay Per Click' },
    pay_per_impressions: { value: 'pay_per_impressions', name: 'Pay Per Impressions' },
    maximize_clicks: { value: 'maximize_clicks', name: 'Maximize Clicks' },
    landing_page_views: { value: 'landing_page_views', name: 'Landing Page Views' },
  };

  return Object.values(bidOptimizationOptions).map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.name}
    </MenuItem>
  ));
};
