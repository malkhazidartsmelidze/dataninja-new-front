import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem } from '@material-ui/core';
import { SelectField } from 'components/Fields';

const options = [
  { value: 'all', name: 'All' },
  { value: 'male', name: 'Male' },
  { value: 'female', name: 'Female' },
  { value: 'unspecified', name: 'Unspecified' },
];

export default (props) => {
  return (
    <PanelField
      content={
        <SelectField name='targetings[gender]' width={200} options={options} defaultValue='all' />
      }
    />
  );
};
