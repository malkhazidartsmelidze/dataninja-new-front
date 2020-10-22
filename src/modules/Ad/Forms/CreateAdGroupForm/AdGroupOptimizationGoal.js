import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default (props) => {
  const [value, setValue] = useState('clicks');

  const handleChange = (e) => {
    const value = e.target.value;

    if (value == 'page_views') {
      if (window.confirm('Are you sure you want to choose this strategy? Google will turn off')) {
        setValue(value);
        window.turnOffNetwork('google');
        window.turnOnNetwork('facebook');
      }
    }

    if (value == 'maximize_clicks') {
      if (window.confirm('Are you sure you want to choose this strategy? Facebook will turn off')) {
        setValue(value);
        window.turnOffNetwork('facebook');
        window.turnOnNetwork('google');
      }
    }
  };

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
          onChange={handleChange}
          value={value}
          defaultValue='clicks'
        />
      }
    />
  );
};
