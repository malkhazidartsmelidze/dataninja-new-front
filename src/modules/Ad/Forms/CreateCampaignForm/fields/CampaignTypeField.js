import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  return (
    <PanelField
      content={<SelectField name='campaign_type' defaultValue='traffic' options={options} />}
    />
  );
};

const options = [{ name: 'Traffic To Website', value: 'traffic' }];
