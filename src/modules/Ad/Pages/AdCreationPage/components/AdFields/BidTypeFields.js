import React, { Fragment } from 'react';
import { MenuItem, TextField, Grid, Typography } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import SplittedInput from '../SplittedInput';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  const { getField, setField } = useNewAdContext();
  const bidOptimizationType = getField('bid_optimization_type');
  const bidType = getField('bid_type');

  const facebookBidTypeChanged = (e) => {
    setField('bid_type', e.target.value, 'facebook');
  };

  const googleBidTypeChanged = (e) => {
    setField('bid_type', e.target.value, 'google');
  };

  if (bidOptimizationType == 'pay_per_impressions') {
    bidType.google = 'viewable_cpm';
  }

  return (
    <PanelField
      title='Bid Type Fields'
      content={[
        <SplittedInput
          key='optimization_fields'
          networks={['facebook', 'google']}
          onSplitProps={{
            facebook: {
              value: bidType.facebook,
              label: 'Facebook',
              select: true,
              onChange: facebookBidTypeChanged,
              children: Object.values(bidTypeFacebookOptions).map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              )),
            },
            google: {
              value: bidType.google,
              select: true,
              label: 'Google',
              onChange: googleBidTypeChanged,
              children: Object.values(bidTypeGoogleOptions).map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              )),
            },
          }}
          disableMerge={true}
          key={bidType.facebook + bidType.google}
          splitted={true}
        >
          <TextField fullWidth={false} value={bidType.value} name='bid_optimization' />
        </SplittedInput>,
      ]}
    />
  );
};

const bidTypeFacebookOptions = {
  auto: { value: 'auto', name: 'Automatic' },
  manual: { value: 'manual', name: 'Manual' },
};

const bidTypeGoogleOptions = {
  manual_cpc: { value: 'manual_cpc', name: 'Manual CPC' },
  viewable_cpm: { value: 'viewable_cpm', name: 'Viewable CPM' },
  // maximize_clicks: { value: 'maximize_clicks', name: 'Maximize Clicks' },
  // maximize_clicks: { value: 'landing_page_views', name: 'Landing Page Views' },
};
