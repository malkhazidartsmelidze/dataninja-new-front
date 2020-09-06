import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default (props) => {
  const options = [
    { name: 'All Criterions', value: 'all' },
    { name: 'Any Criterion', value: 'any' },
  ];

  return (
    <PanelField content={<SelectField style={{ width: 200 }} options={options} {...props} />} />
  );
};
