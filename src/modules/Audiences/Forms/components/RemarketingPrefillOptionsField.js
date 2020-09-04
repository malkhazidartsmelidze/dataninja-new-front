import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { RadioField } from 'components/Fields';

export default () => {
  const [prefillOption, setPrefillOption] = useState('last_30');

  const onChange = (e) => {
    setPrefillOption(e.target.value);
  };

  return (
    <PanelField
      content={<RadioField value={prefillOption} options={prefilOptionsList} onChange={onChange} />}
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
