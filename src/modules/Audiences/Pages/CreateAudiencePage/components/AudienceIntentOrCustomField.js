import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { RadioField } from 'components/Fields';
import { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import ChipsCard from 'components/ChipsCard';

export default () => {
  const [intentOrCustom, setIntentOrCustom] = useState('intent');
  const [placeHolder, setPlaceHolder] = useState('');
  const [value, setValue] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const _plholder =
      intentOrCustom === 'intent'
        ? 'Add Interests Or Purchase Initentions'
        : 'Add Google Search Terms';

    setPlaceHolder(_plholder);
  }, [intentOrCustom]);

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const deleteFromValues = (key) => {
    setValues((vals) => {
      vals.splice(key, 1);
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
      content={
        <>
          <RadioField
            options={intentOrCustomFieldOptions}
            value={intentOrCustom}
            onChange={(e) => setIntentOrCustom(e.target.value)}
          />
          <ChipsCard values={values} onDelete={deleteFromValues} />
          <TextField
            placeholder={placeHolder}
            style={{ width: 400 }}
            value={value}
            onChange={onInputChange}
            onKeyPress={onInputKeyPress}
          />
        </>
      }
    />
  );
};

const intentOrCustomFieldOptions = [
  { value: 'intent', name: 'People with any of these interests or purchase intentions' },
  { value: 'custom', name: 'People who searched for any of these terms on Google' },
];
