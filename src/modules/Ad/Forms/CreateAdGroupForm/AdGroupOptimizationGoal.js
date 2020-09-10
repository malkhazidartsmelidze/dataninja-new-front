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
            { value: 'clicks', name: 'Optimize For Clicks' },
            { value: 'views', name: 'Optimize For Impressions' },
            { value: 'page_views', name: 'Optimize For Landing Page Views' },
            { value: 'maximize_clicks', name: 'Optimize For Maximum Clicks' },
          ]}
          width={400}
          name='adgroup_optimization_goal'
          label='Choose Optimization Goal'
          defaultValue='clicks'
        />
      }
    />
  );
};
