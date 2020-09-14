import React, { Fragment, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { IconButton, Grid, TextField, Icon } from '@material-ui/core';
import { RadioField, SelectField } from 'components/Fields';
import { useEffect } from 'react';
import { mdiPlus, mdiMinus } from '@mdi/js';

const options = {
  optimize: { name: 'Optimize: Prefer best performing ads (Recomended)' },
  not_optimize: { name: 'Do not optimize: Rotate ads indefinitely' },
};

export default () => {
  const [attached, setAttached] = useState('adgroup');
  const [country, setCountry] = useState('');
  const [number, setNumber] = useState('');

  return (
    <PanelField
      content={
        <Fragment>
          <RadioField
            value={attached}
            options={attachedToOptions}
            onChange={(e) => setAttached(e.target.value)}
          />
          <SelectField
            value={country}
            style={{ width: 200, marginBottom: 16 }}
            label='Select Country'
            options={countryOptions}
            onChange={(e) => setCountry(e.target.value)}
          />
          <br />
          <TextField
            placeholder='Add Phone Number'
            name='phone_number'
            style={{ width: 200, marginBottom: 16 }}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Fragment>
      }
    />
  );
};

const attachedToOptions = [
  { name: 'AdGroup', value: 'adgroup' },
  { name: 'Campaign', value: 'campaign' },
];

const countryOptions = [
  { name: 'United States', value: 'usa' },
  { name: 'Georgia', value: 'georgia' },
  { name: 'Russia', value: 'rus' },
  { name: 'Armenia', value: 'arm' },
];

const SingleExtension = ({ extension, index, onAdd, onChange, onDelete }) => {
  const [value, setValue] = useState(extension);

  const _onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    onChange(index, value);
  }, [value]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <TextField
          placeholder='Add Text'
          name='text'
          value={value.text}
          fullWidth
          onChange={_onChange}
        />
      </Grid>
      <Grid item xs={4}>
        <IconButton onClick={onAdd}>
          <Icon path={mdiPlus} />
        </IconButton>
        <IconButton onClick={() => onDelete(index)}>
          <Icon path={mdiMinus} />
        </IconButton>
      </Grid>
    </Grid>
  );
};
