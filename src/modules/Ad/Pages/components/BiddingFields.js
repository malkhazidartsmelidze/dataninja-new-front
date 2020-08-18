import React from 'react';
import { SelectInput } from 'components/inputs';
import { Divider } from '@material-ui/core';

export default () => {
  return (
    <>
      <SelectInput
        sizes={{
          xs: 6,
        }}
        label='Bid Optimization Goal Type'
        options={[
          { value: 'pay_per_click', name: 'Pay Per Click' },
          { value: 'pay_per_impressions', name: 'Pay Per Impressions' },
          { value: 'maximize_clicks', name: 'Maximize Clicks' },
          { value: 'landing_page_views', name: 'Landing Page Views' },
        ]}
      />
    </>
  );
};
