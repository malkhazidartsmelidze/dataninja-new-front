import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { FormControl, FormControlLabel, Radio } from '@material-ui/core';

const options = {
  optimize: { name: 'Optimize: Prefer best performing ads (Recomended)' },
  not_optimize: { name: 'Do not optimize: Rotate ads indefinitely' },
};

export default () => {
  const { getField, setField } = useNewAdContext();
  const frequency_cap = getField('frequency_cap');

  const handleChangeRadio = (e) => {
    setField('frequency_cap', e.target.value);
  };

  const isSelected = (val) => {
    return frequency_cap.value == val;
  };

  return (
    <PanelField
      title='Choose Location Type'
      content={
        <>
          {Object.keys(options).map((key) => {
            return (
              <FormControl fullWidth key={key}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={isSelected(key)}
                      onChange={handleChangeRadio}
                      name='targeting_frequency_cap'
                      value={key}
                    />
                  }
                  label={options[key].name}
                />
              </FormControl>
            );
          })}
        </>
      }
    />
  );
};
