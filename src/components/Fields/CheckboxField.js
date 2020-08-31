import React, { useEffect, useState } from 'react';
import { FormControl, FormControlLabel, Radio, Checkbox } from '@material-ui/core';

export default (props) => {
  const { options, name, value: _defaultValue, onChange } = props;
  const [values, setValues] = useState(_defaultValue || []);

  const _onChange = (e) => {
    const val = e.target.value;
    setValues((old) => {
      if (isChecked(val)) {
        old.splice(values.indexOf(val), 1);
      } else {
        old.push(val);
      }
      return [...old];
    });
  };

  useEffect(() => {
    onChange(values);
  }, [values]);

  const isChecked = (val) => {
    return values.indexOf(val) > -1;
  };

  return options.map((option) => {
    return (
      <FormControl fullWidth key={option.value}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked(option.value)}
              onChange={_onChange}
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
