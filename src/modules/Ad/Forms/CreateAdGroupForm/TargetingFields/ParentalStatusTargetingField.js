import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { RadioField } from 'components/Fields';

const options = [
  { name: 'Unspecified', value: '' },
  { name: 'Parents', value: 'parents' },
  { name: 'Not parents', value: 'not_parents' },
];

export default (props) => {
  const [value, setValue] = useState('');

  return (
    <PanelField
      content={
        <RadioField
          name='targetings[parental_status]'
          value={value}
          options={options}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
      }
    />
  );
};
