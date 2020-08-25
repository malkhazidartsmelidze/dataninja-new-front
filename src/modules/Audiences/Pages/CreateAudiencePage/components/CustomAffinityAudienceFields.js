import React, { useState } from 'react';
import { TextField, Grid, makeStyles, Chip, Typography } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  const [valueType, setvalueType] = useState('url');
  const [value, setValue] = useState('');
  const [values, setValues] = useState({});
  const classes = useStyles();

  const valueTypeChanged = (e) => {
    setvalueType(e.target.value);
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const deleteFromValues = (type, val) => {
    if (!values[type]) return;
    setValues((vals) => {
      vals[type].splice(vals[type].indexOf(val), 1);
      return [...vals];
    });
  };

  const onInputKeyPress = (e) => {
    if (!values[valueType]) values[valueType] = [];
    if (e.key !== 'Enter') return;
    setValue('');
    if (values[valueType].indexOf(e.target.value) > -1) return;
    setValues({ ...values, [valueType]: [...values[valueType], e.target.value] });
  };

  return (
    <PanelField
      content={
        <>
          <Grid container spacing={1} direction='column'>
            <Grid item>
              <SelectField
                options={valueTypeOptions}
                value={valueType}
                style={{ width: 150 }}
                onChange={valueTypeChanged}
              />
              <TextField
                placeholder='Enter Value'
                style={{ width: 700 }}
                value={value}
                onChange={onInputChange}
                onKeyPress={onInputKeyPress}
              />
            </Grid>
            <Grid item>
              {valueTypeOptions.map((opt) => {
                const type = opt.value;
                if (!values[type] || !values[type].length) return null;

                return (
                  <div key={type} className={classes.chipsContainer}>
                    <Typography variant='body1'>{opt.name}s:</Typography>
                    <ul className={classes.chipsContainerUl}>
                      {values[type].map((value) => {
                        return (
                          <li key={value}>
                            <Chip
                              color='primary'
                              size='small'
                              label={value}
                              className={classes.chip}
                              onDelete={() => deleteFromValues(type, value)}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </>
      }
    />
  );
};

const valueTypeOptions = [
  { name: 'Interest', value: 'interest' },
  { name: 'URL', value: 'url' },
  { name: 'Place', value: 'place' },
];

const useStyles = makeStyles((theme) => ({
  chipsContainerUl: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
    marginBottom: 8,
    padding: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
