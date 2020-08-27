import React, { useState, Fragment } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { SelectField } from 'components/Fields';
import ChipsCard from 'components/ChipsCard';
import { useEffect } from 'react';

export default ({ urlType, button, condition, index, onChange, values: _values }) => {
  const [value, setValue] = useState('');
  const [values, setValues] = useState(_values);

  const onFieldChange = (e) => {
    onChange(index, e.target.name, e.target.value);
  };

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
    onChange(index, 'values', values);
  }, [values]);

  return (
    <div style={{ marginBottom: 32 }}>
      <ChipsCard values={values} onDelete={deleteFromValues} />

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SelectField
            onChange={onFieldChange}
            name='urlType'
            fullWidth
            options={urlTypeOptions}
            disabled
            value={urlType}
          />
        </Grid>
        <Grid item xs={2}>
          <SelectField
            fullWidth
            onChange={onFieldChange}
            name='condition'
            options={conditionOptions}
            value={condition}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            placeholder='Add Urls'
            value={value}
            fullWidth
            type='url'
            onChange={onInputChange}
            onKeyPress={onInputKeyPress}
          />
        </Grid>
        <Grid item xs={2}>
          {button}
        </Grid>
      </Grid>
    </div>
  );
};

const urlTypeOptions = [{ value: 'url', name: 'URL' }];

const conditionOptions = [
  { value: 'contains', name: 'Contains' },
  { value: 'does_not_contain', name: 'Does Not Contain' },
  { value: 'equals', name: 'Equals' },
];
