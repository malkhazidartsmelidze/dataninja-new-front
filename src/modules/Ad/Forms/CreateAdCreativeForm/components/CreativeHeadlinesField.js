import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import Icon from '@mdi/react';
import { mdiDelete, mdiPlus } from '@mdi/js';

export default () => {
  const [stateFields, setStateFields] = useState({
    headline1: 'Example Headline Title',
  });

  const onChange = (key, value) => {
    setStateFields({
      ...stateFields,
      [key]: value,
    });
  };

  const removeHeadline = (key) => {
    delete stateFields[key];
    setStateFields({ ...stateFields });
  };

  const addField = () => {
    let i = Object.keys(stateFields).length;
    let title;
    do {
      title = 'headline' + i;
      i++;
    } while (stateFields[title] !== undefined);
    setStateFields({ ...stateFields, [title]: `Example Headline ${i}` });
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
                  name='creative_headlines[]'
                  onChange={(e) => onChange(key, e.target.value)}
                  placeholder='Enter Ad NAme'
                  defaultValue='Example Headline Text'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start' onClick={() => removeHeadline(key)}>
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
