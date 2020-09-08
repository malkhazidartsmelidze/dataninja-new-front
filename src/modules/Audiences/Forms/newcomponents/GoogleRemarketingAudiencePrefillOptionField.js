import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { RadioField } from 'components/Fields';

export default () => {
  const [value, setValue] = useState('last_30');

  return (
    <PanelField
      content={
        <RadioField
          value={value}
          name='prefill_option'
          options={prefilOptionsList}
          onChange={(e) => setValue(e.target.value)}
        />
      }
    />
  );
};

const prefilOptionsList = [
  {
    name: 'Pre-fill list with people who matched the rules within the past 30 days',
    value: 'last_30',
  },
  { name: 'Start with an empty list', value: 'empty' },
];
