import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default ({}) => {
  return (
    <PanelField
      content={
        <TextField
          name='adgroup_budget'
          type='number'
          label='Enter AdGroup Budget'
          defaultValue={10}
          InputProps={{
            startAdornment: <InputAdornment>$</InputAdornment>,
          }}
        />
      }
    />
  );
};
