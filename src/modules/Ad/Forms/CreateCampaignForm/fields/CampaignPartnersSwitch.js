import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  return (
    <PanelField
      content={<SelectField name='campaign_partner_networks' defaultValue='1' options={options} />}
    />
  );
};

const options = [
  { name: 'Include Partner Search Network', value: '1' },
  { name: "Don't Include Partner Search Network", value: '0' },
];
