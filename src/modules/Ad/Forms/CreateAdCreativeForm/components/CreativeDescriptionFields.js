import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import Icon from '@mdi/react';
import { mdiDelete, mdiPlus } from '@mdi/js';

export default () => {
  const [stateFields, setStateFields] = useState({
    description: 'Example Description Title',
  });

  const onChange = (key, value) => {
    setStateFields({
      ...stateFields,
      [key]: value,
    });
  };

  const removeField = (key) => {
    delete stateFields[key];
    setStateFields({ ...stateFields });
  };

  const addField = () => {
    let i = Object.keys(stateFields).length;
    let title;
    do {
      title = 'description' + i;
      i++;
    } while (stateFields[title] !== undefined);
    setStateFields({ ...stateFields, [title]: `Example description ${i}` });
  };

  const canAddField = () => {
    return Object.keys(stateFields).length < 5;
  };

  return (
    <PanelField
      content={
        <>
          {Object.keys(stateFields).map((key) => {
            return (
              <Grid item key={key}>
                <TextField
                  value={stateFields[key]}
                  name='creative_descriptions[]'
                  onChange={(e) => onChange(key, e.target.value)}
                  placeholder='Enter Ad NAme'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start' onClick={() => removeField(key)}>
                        <IconButton size='small'>
                          <Icon path={mdiDelete} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            );
          })}
          <IconButton size='small' onClick={addField} disabled={!canAddField()}>
            <Icon path={mdiPlus} />
          </IconButton>
        </>
      }
    />
  );
};
