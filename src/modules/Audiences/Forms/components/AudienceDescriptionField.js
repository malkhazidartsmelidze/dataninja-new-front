import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default ({ onChange, name, value: _value }) => {
  const [value, setValue] = useState(_value);

  const onDescriptionChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === _value) return;
    const deb = setTimeout(() => onChange(name, value), 500);
    return () => clearTimeout(deb);
  }, [value]);

  return (
    <PanelField
      title='Enter Audience Description'
      content={
        <TextField
          name={name}
          value={value}
          onChange={onDescriptionChange}
          placeholder='Enter audience Description'
        />
      }
    />
  );
};
