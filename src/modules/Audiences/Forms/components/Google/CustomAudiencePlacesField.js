import React, { useState, useEffect } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField } from '@material-ui/core';
import ChipsCard from 'components/ChipsCard';

export default ({ onChange, name, value: similarWebsites }) => {
  const [value, setValue] = useState([]);
  const [values, setValues] = useState([]);

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
            placeholder={'Add Places'}
            style={{ width: 400 }}
            value={value}
            onChange={onInputChange}
            onKeyPress={onInputKeyPress}
          />
        </>
      }
    />
  );
};
