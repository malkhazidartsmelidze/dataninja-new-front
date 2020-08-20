import React, { Fragment } from 'react';
import { MenuItem, TextField, Grid, Typography } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import SplittedInput from '../SplittedInput';

export default () => {
  const { getField, setBidOptimization, setField } = useNewAdContext();
  const bidOptimizationType = getField('bid_optimization_type');
  const bidType = getField('bid_type');
  const bidAmount = getField('bid_amount');

  const facebookBidTypeChanged = (e) => {
    setField('bid_type', e.target.value, 'facebook');
  };

  const googleBidTypeChanged = (e) => {
    setField('bid_type', e.target.value, 'google');
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item>
        <Typography color='textSecondary'>Bid Optimization Goal Type:</Typography>
      </Grid>
      <Grid item>
        <SplittedInput
          networks={['facebook', 'google']}
          onSplitProps={{
            facebook: {
              value: bidType.facebook,
              onChange: facebookBidTypeChanged,
              children: <FacebookBidTypeOptions />,
            },
            google: {
              value: bidType.google,
              children: <GoogleBidTypeOptions />,
            },
          }}
          splitted={true}
        >
          <TextField fullWidth={false} value={bidType.value} name='bid_optimization' select={true}>
            <MenuItem />
          </TextField>
        </SplittedInput>
      </Grid>
    </Grid>
  );
};

const FacebookBidTypeOptions = () => {
  const bidTypeFacebookOptions = {
    auto: { value: 'auto', name: 'Automatic' },
    manual: { value: 'manual', name: 'Manual' },
  };

  return Object.values(bidTypeFacebookOptions).map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.name}
    </MenuItem>
  ));
};

const GoogleBidTypeOptions = () => {
  const bidTypeGoogleOptions = {
    target_cpa: { value: 'target_cpa', name: 'Pay Per Click' },
    target_roas: { value: 'target_roas', name: 'Target Roas' },
    maximize_clicks: { value: 'maximize_clicks', name: 'Maximize Clicks' },
    maximize_clicks: { value: 'landing_page_views', name: 'Landing Page Views' },
  };

  return bidTypeGoogleOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.name}
    </MenuItem>
  ));
};
