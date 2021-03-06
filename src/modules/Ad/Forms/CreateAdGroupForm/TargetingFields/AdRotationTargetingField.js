import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

const options = [
  { name: 'Optimize: Prefer best performing ads (Recomended)', value: 'optimize' },
  { name: 'Do not optimize: Rotate ads indefinitely', value: 'not_optimize' },
];

export default () => {
  const [value, setValue] = useState('optimize');

  return (
    <PanelField
      content={
        <SelectField
          name='targetings[ad_rotation]'
          options={options}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      }
    />
  );
};
