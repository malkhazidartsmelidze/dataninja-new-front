import React, { useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField } from '@material-ui/core';
import ChipsCard from 'components/ChipsCard';

export default () => {
  const [values, setValues] = useState([]);

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
        <Fragment>
          {values.map((val) => {
            return <input key={val} type='hidden' name='keywords[]' value={val} />;
          })}
          <ChipsCard values={values} onDelete={deleteFromValues} />
          <TextField
            style={{ width: 400 }}
            label='Enter Search Keywords'
            onKeyPress={onInputKeyPress}
          />
        </Fragment>
      }
    />
  );
};
