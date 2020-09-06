import React, { useState, Fragment } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { SelectField } from 'components/Fields';
import ChipsCard from 'components/ChipsCard';

export default (props) => {
  const [rules, setRules] = useState({
    contains: [],
    does_not_contain: [],
    equals: [],
  });
  const [condition, setCondition] = useState('contains');
  const { peopletype } = props;
  const deleteFromValues = (type, index) => {
    setRules((rules) => {
      rules[type].splice(index, 1);
      return { ...rules };
    });
  };

  const onInputKeyPress = (e) => {
    if (e.key !== 'Enter') return;
    const val = e.target.value;
    setRules({
      ...rules,
      [condition]: [...rules[condition], val],
    });

    e.target.value = '';
  };

  return (
    <div style={{ marginBottom: 32 }}>
      {Object.keys(rules).map((type) => {
        const val = rules[type];
        if (!val.length) return;
        return (
          <Fragment onKeyPress={type}>
            {val.map((v) => {
              return (
                <input
                  type='hidden'
                  key={v}
                  name={`rules[${peopletype}][conditions][${type}][]`}
                  value={v}
                />
              );
            })}
            <Typography variant='body1'>{conditionOptions[type].name}:</Typography>
            <ChipsCard values={val} onDelete={(index) => deleteFromValues(type, index)} />
          </Fragment>
        );
      })}

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SelectField value='url' fullWidth options={urlTypeOptions} disabled />
        </Grid>
        <Grid item xs={2}>
          <SelectField
            fullWidth
            value={condition}
            options={Object.values(conditionOptions)}
            onChange={(e) => setCondition(e.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField placeholder='Add Urls' fullWidth onKeyPress={onInputKeyPress} />
        </Grid>
      </Grid>
    </div>
  );
};

const urlTypeOptions = [{ value: 'url', name: 'URL' }];

const conditionOptions = {
  contains: { value: 'contains', name: 'Contains' },
  not_contains: { value: 'not_contains', name: 'Does Not Contain' },
  equals: { value: 'equals', name: 'Equals' },
};
