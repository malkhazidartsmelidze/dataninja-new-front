import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem } from '@material-ui/core';

const aviableOptions = {
  all: { value: 'all', name: 'All' },
  male: { value: 'male', name: 'Male' },
  female: { value: 'female', name: 'Female' },
};

export default () => {
  const { getField, setField } = useNewAdContext();
  const gender = getField('targeting_gender');

  const handleFieldChange = (e) => {
    const chosenGender = e.target.value;
    setField('targeting_gender', chosenGender);
  };

  return (
    <PanelField
      title='Choose Bid Optimization'
      content={
        <TextField
          value={gender.value}
          name='gender'
          onChange={handleFieldChange}
          select={true}
          fullWidth
        >
          {Object.values(aviableOptions).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      }
    />
  );
};
