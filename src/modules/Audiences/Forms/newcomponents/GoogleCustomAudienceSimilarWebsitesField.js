import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField } from '@material-ui/core';
import ChipsCard from 'components/ChipsCard';

export default () => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(false);

  const deleteFromValues = (key) => {
    setValues((vals) => {
      vals.splice(key, 1);
      return [...vals];
    });
  };

  const onInputKeyPress = (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    if (values.indexOf(e.target.value) > -1) return;
    setValues([...values, e.target.value]);
    e.target.value = '';
  };

  return (
    <PanelField
      content={
        <>
          {values.map((val) => {
            return <input key={val} type='hidden' name='websites[]' value={val} />;
          })}
          <ChipsCard values={values} onDelete={deleteFromValues} />
          <TextField
            style={{ width: 400 }}
            type='text'
            error={error}
            placeholder='Enter correct url'
            label='Enter correct url'
            onKeyPress={onInputKeyPress}
          />
        </>
      }
    />
  );
};
