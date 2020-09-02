import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import ChipsCard from 'components/ChipsCard';

export default ({ name, onChange, value: defaultValue }) => {
  const [value, setValue] = useState([]);
  const [values, setValues] = useState(defaultValue || []);

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const deleteFromValues = (key) => {
    setValues((vals) => {
      vals.splice(key, 1);
      return [...vals];
    });
  };

  const onInputKeyPress = (e) => {
    if (e.key !== 'Enter') return;
    setValue('');
    if (values.indexOf(e.target.value) > -1) return;
    setValues([...values, e.target.value]);
  };

  useEffect(() => {
    onChange && onChange(name, values);
  }, [values]);

  return (
    <PanelField
      content={
        <>
          <ChipsCard values={values} onDelete={deleteFromValues} />
          <TextField
            style={{ width: 400 }}
            value={value}
            onChange={onInputChange}
            label='Enter Search Keywords'
            onKeyPress={onInputKeyPress}
          />
        </>
      }
    />
  );
};
