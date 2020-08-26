import React, { useState, useEffect } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField, InputAdornment, IconButton, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import Icon from '@mdi/react';
import { mdiDelete, mdiPlus } from '@mdi/js';

export default () => {
  const { setField, getField } = useNewAdContext();
  const isResponsive = getField('is_responsive').value;
  const fields = getField('creative_descriptions').value;
  const [stateFields, setStateFields] = useState(fields);

  const onChange = (key, value) => {
    setStateFields({
      ...stateFields,
      [key]: value,
    });
  };

  const removeFeild = (key) => {
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
    setStateFields({ ...stateFields, [title]: `Example Description Text ${i}` });
  };

  const canAddField = () => {
    return Object.keys(stateFields).length < 5;
  };

  useEffect(() => {
    const deb = setTimeout(() => setField('creative_descriptions', stateFields), 500);
    return () => clearTimeout(deb);
  }, [stateFields]);

  return (
    <PanelField
      title='Enter Descriptions'
      content={
        <>
          {Object.keys(stateFields).map((key) => {
            return (
              <Grid item key={key}>
                <TextField
                  value={stateFields[key]}
                  onChange={(e) => onChange(key, e.target.value)}
                  placeholder='Enter Description'
                  InputProps={{
                    endAdornment: isResponsive ? (
                      <InputAdornment position='start' onClick={() => removeFeild(key)}>
                        <IconButton size='small'>
                          <Icon path={mdiDelete} />
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                  }}
                />
              </Grid>
            );
          })}
          {isResponsive ? (
            <IconButton size='small' onClick={addField} disabled={!canAddField()}>
              <Icon path={mdiPlus} />
            </IconButton>
          ) : null}
        </>
      }
    />
  );
};
