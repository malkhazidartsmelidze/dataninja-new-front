import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

const options = [
  { name: 'Responsive', value: '1' },
  { name: 'Not Responsive', value: '0' },
];

export default () => {
  return (
    <PanelField>
      <SelectField
        style={{ width: 500 }}
        options={options}
        defaultValue='1'
        name='creative_responsive'
      />
    </PanelField>
  );
};
