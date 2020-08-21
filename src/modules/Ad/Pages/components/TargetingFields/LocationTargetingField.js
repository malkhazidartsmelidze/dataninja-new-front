import React, { useEffect } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem } from '@material-ui/core';

export default () => {
  const { getField, setField } = useNewAdContext();
  const locations = getField('targeting_locations');
  const aviableOptions = [];

  useEffect(() => {}, []);

  return (
    <PanelField
      title='Enter Location'
      content={
        <TextField label='Choose Location' select={true} fullWidth>
          {aviableOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      }
    />
  );
};
