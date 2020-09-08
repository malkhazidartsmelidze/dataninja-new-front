import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  return (
    <PanelField
      content={
        <SelectField width={200} name='campaign_status' defaultValue='active' options={options} />
      }
    />
  );
};

const options = [
  { value: 'active', name: 'Active' },
  { value: 'paused', name: 'Paused' },
];
