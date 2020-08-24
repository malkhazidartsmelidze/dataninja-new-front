import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem } from '@material-ui/core';

const bidOptimizationOptions = {
  pay_per_click: { value: 'pay_per_click', name: 'Pay Per Click' },
  pay_per_impressions: { value: 'pay_per_impressions', name: 'Pay Per Impressions' },
  maximize_clicks: { value: 'maximize_clicks', name: 'Maximize Clicks' },
  landing_page_views: { value: 'landing_page_views', name: 'Landing Page Views' },
};

export default () => {
  const { getField, setBidOptimizationType } = useNewAdContext();
  const bidOptimizationType = getField('bid_optimization_type');

  const handleBidOptimizationChange = (e) => {
    const bidOptimization = e.target.value;
    setBidOptimizationType(bidOptimization);
  };

  return (
    <PanelField
      title='Choose Bid Optimization'
      content={
        <TextField
          value={bidOptimizationType.value}
          name='bid_optimization'
          onChange={handleBidOptimizationChange}
          select={true}
        >
          {Object.values(bidOptimizationOptions).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      }
    />
  );
};
