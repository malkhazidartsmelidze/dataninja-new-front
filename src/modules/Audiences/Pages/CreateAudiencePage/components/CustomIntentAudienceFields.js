import React, { useState } from 'react';
import { TextField, Grid, makeStyles, Chip, Typography } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  const [intentType, setIntentType] = useState('keywords');
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);
  const classes = useStyles();

  const intentTypeChanged = (e) => {
    setIntentType(e.target.value);
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const deleteFromValues = (val) => {
    setValues((vals) => {
      vals.splice(vals.indexOf(val), 1);
      return [...vals];
    });
  };

  const onInputKeyPress = (e) => {
    if (e.key !== 'Enter') return;
    setValue('');
    if (values.indexOf(e.target.value) > -1) return;
    setValues([...values, e.target.value]);
  };

  return (
    <PanelField
      title='Enter Audience Name'
      content={
        <>
          <Grid container spacing={1} direction='column'>
            <Grid item>
              <SelectField
                label='Include people based on their:'
                options={intentTypeOptions}
                value={intentType}
                style={{ width: 300, marginBottom: 16 }}
                onChange={intentTypeChanged}
              />
            </Grid>
            <Grid item>
              <Typography variant='body2'>
                Enter keywords and URLs related to products and services this audience is actively
                researching
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                label='Enter Keywords Here'
                value={value}
                onChange={onInputChange}
                onKeyPress={onInputKeyPress}
              />
            </Grid>

            <Grid item>
              {values.length ? (
                <div className={classes.chipsContainer}>
                  <ul className={classes.chipsContainerUl}>
                    {values.map((value) => {
                      return (
                        <li key={value}>
                          <Chip
                            color='primary'
                            size='small'
                            label={value}
                            className={classes.chip}
                            onDelete={() => deleteFromValues(value)}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </Grid>
          </Grid>
        </>
      }
    />
  );
};

const intentTypeOptions = [
  { name: 'In-market keywords', value: 'keywords' },
  { name: 'Google Search Terms', value: 'search_terms' },
];

const useStyles = makeStyles((theme) => ({
  chipsContainerUl: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
