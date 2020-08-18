import React from 'react';
import { SelectInput, NumberInput } from 'components/inputs';
import { InputAdornment } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';

export default () => {
  const { getState, setBidOptimization } = useNewAdContext();
  const bidType = getState('bid_optimization');
  const bidAmount = getState('bid_amount');

  const handleBidOptimizationChange = (e) => {
    const type = e.target.value;
    setBidOptimization(type);
  };

  return (
    <>
      <SelectInput
        sizes={{
          xs: 6,
        }}
        label='Bid Optimization Goal Type'
        value={bidType.value}
        name='bid_optimization'
        onChange={handleBidOptimizationChange}
        options={[
          { value: 'pay_per_click', name: 'Pay Per Click' },
          { value: 'pay_per_impressions', name: 'Pay Per Impressions' },
          { value: 'maximize_clicks', name: 'Maximize Clicks' },
          { value: 'landing_page_views', name: 'Landing Page Views' },
        ]}
      />

      <NumberInput
        sizes={{
          xs: 6,
        }}
        label='Bid Amount'
        InputProps={{
          startAdornment: <InputAdornment position='start'>$</InputAdornment>,
        }}
        value={bidAmount.value}
      />
    </>
  );
};
