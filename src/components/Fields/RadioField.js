import React from 'react';
import { FormControl, FormControlLabel, Radio } from '@material-ui/core';

export default (props) => {
  const { options, name, value, onChange } = props;

  return options.map((option) => {
    return (
      <FormControl fullWidth key={option.value}>
        <FormControlLabel
          control={
            <Radio
              checked={value == option.value}
              onChange={onChange}
              name={name}
              value={option.value}
            />
          }
          label={option.name}
        />
      </FormControl>
    );
  });
};
