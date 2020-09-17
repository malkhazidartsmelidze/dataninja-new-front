import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import CheckboxField from 'components/Fields/CheckboxField';

const options = [
  { name: 'Android', value: 'android' },
  { name: 'IOS', value: 'ios' },
];
export default () => {
  return (
    <PanelField
      content={
        <CheckboxField
          onChange={() => {}}
          options={options}
          name='targetings[os][]'
          value={['android', 'ios']}
        />
      }
    />
  );
};
