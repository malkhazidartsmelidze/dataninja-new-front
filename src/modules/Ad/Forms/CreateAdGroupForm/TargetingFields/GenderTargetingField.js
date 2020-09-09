import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem } from '@material-ui/core';

const options = {
  all: { value: 'all', name: 'All' },
  male: { value: 'male', name: 'Male' },
  female: { value: 'female', name: 'Female' },
  unspecified: { value: 'unspecified', name: 'Unspecified' },
};

export default (props) => {
  return (
    <PanelField
      content={
        <TextField name='targetings[gender]' select={true} style={{ width: 300 }} {...props}>
          {Object.values(options).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      }
    />
  );
};
