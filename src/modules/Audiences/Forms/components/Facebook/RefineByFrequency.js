import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, Grid } from '@material-ui/core';
import ChipsCard from 'components/ChipsCard';
import { SelectField } from 'components/Fields';

export default ({
  onChange,
  frequencyConditionName,
  frequencyCondition,
  frequencyValueName,
  frequencyValue,
}) => {
  const conditionOptions = [
    { name: 'Is Greater Than Or Equal To (≥)', value: 'greater_or_equal' },
    { name: 'Is Greater Than (>)', value: 'greater_than' },
    { name: 'Equals', value: 'equal' },
    { name: "Doesn'T Equal", value: 'not_equal' },
    { name: 'Is Less Than Or Equal To (≤)', value: 'less_or_equal' },
    { name: 'Is Less Than (<)', value: 'less' },
  ];
  const frequencyOptions = [{ value: 'frequency', name: 'Frequency' }];

  const [value, setValue] = useState(frequencyValue);
  const [condition, setCondition] = useState(frequencyCondition);

  const onConditionChange = (e) => {
    onChange(frequencyConditionName, e.target.value);
    setCondition(e.target.value);
  };

  const onValueChange = (e) => {
    onChange(frequencyValueName, e.target.value);
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
