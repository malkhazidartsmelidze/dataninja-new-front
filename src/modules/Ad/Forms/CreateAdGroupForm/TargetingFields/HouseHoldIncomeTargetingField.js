import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import CheckboxField from 'components/Fields/CheckboxField';

const options = [
  { name: 'Top 10%', value: 'top_10' },
  { name: '11 - 20%', value: '11_20' },
  { name: '21 - 30%', value: '21_30' },
  { name: '31 - 40%', value: '31_40' },
  { name: '41 - 50%', value: '41_50' },
  { name: 'Lower 50%', value: 'lower_50' },
  { name: 'Unknown', value: 'unknown' },
];

export default ({ ...props }) => {
  return (
    <PanelField
      title='Choose Household Income'
      name='targetings[household_income]'
      content={<CheckboxField options={options} {...props} onChange={() => {}} />}
    />
  );
};
