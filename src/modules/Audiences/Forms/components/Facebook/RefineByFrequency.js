import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, Grid } from '@material-ui/core';
import ChipsCard from 'components/ChipsCard';
import { SelectField } from 'components/Fields';

export default () => {
  const conditionOptions = [
    { name: 'Is Greater Than Or Equal To (≥)', value: 'greater_or_equal' },
    { name: 'Is Greater Than (>)', value: 'greater_than' },
    { name: 'Equals', value: 'equal' },
    { name: "Doesn'T Equal", value: 'not_equal' },
    { name: 'Is Less Than Or Equal To (≤)', value: 'less_or_equal' },
    { name: 'Is Less Than (<)', value: 'less' },
  ];
  const frequencyOptions = [{ value: 'frequency', name: 'Frequency' }];

  const [value, setValue] = useState(2);
  const [condition, setCondition] = useState('greater_or_equal');

  const onConditionChange = (e) => {
    setCondition(e.target.value);
  };

  const onValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item>
            <SelectField value='frequency' options={frequencyOptions} />
          </Grid>
          <Grid item>
            <SelectField
              value={condition}
              onChange={onConditionChange}
              options={conditionOptions}
            />
          </Grid>
          <Grid item>
            <TextField style={{ width: 200 }} value={value} onChange={onValueChange} />
          </Grid>
        </Grid>
      }
    />
  );
};
