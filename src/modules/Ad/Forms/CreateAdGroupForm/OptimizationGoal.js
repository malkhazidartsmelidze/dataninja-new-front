import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default (props) => {
  return (
    <PanelField
      content={
        <SelectField
          options={[
            { value: 'link_clicks', name: 'Pay Per Click' },
            { value: 'impressions', name: 'Pay Per Impressions' },
            { value: 'page_views', name: 'Landing Page Views' },
          ]}
          width={400}
          name='optimization_goal'
          label='Choose Optimization Goal'
        />
      }
    />
  );
};
