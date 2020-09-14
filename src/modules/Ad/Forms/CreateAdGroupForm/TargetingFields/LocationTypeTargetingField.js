import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { RadioField } from 'components/Fields';

const options = [
  { name: 'People regularly living in the location', value: 'living' },
  { name: 'People recently in this location', value: 'recent' },
  { name: 'People in, or who show interest in selected locations', value: 'search' },
];

export default ({ props }) => {
  const [value, setValue] = useState('');

  return (
    <PanelField
      content={
        <RadioField
          options={options}
          name='targetings[location_type]'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
      }
    />
  );
};
