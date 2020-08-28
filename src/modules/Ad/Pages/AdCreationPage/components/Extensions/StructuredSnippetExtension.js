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
  const [extensions, setExtensions] = useState([{ text: '' }]);
  const [attached, setAttached] = useState('adgroup');

  const onExtensionChange = (idx, val) => {
    setExtensions((v) => {
      v[idx] = val;
      return [...v];
    });
  };

  const onExtensionDelete = (idx) => {
    setExtensions((v) => {
      v.splice(idx, 1);
      return [...v];
    });
  };

  const onAdd = () => {
    setExtensions([...extensions, { text: '' }]);
  };

  return (
    <PanelField
      content={
        <Fragment>
          <RadioField
            value={attached}
            options={attachedToOptions}
            onChange={(e) => setAttached(e.target.value)}
          />
          <div style={{ marginTop: 16 }}>
            {extensions.map((e, key) => {
              return (
                <SingleExtension
                  key={key}
                  extension={e}
                  onAdd={onAdd}
                  onChange={onExtensionChange}
                  onDelete={onExtensionDelete}
                />
              );
            })}
          </div>
        </Fragment>
      }
    />
  );
};

const attachedToOptions = [
  { name: 'AdGroup', value: 'adgroup' },
  { name: 'Campaign', value: 'campaign' },
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
