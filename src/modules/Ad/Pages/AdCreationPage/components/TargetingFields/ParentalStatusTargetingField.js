import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { FormControl, FormControlLabel, Checkbox, Tooltip, Radio } from '@material-ui/core';

const options = {
  parents: { name: 'Parents' },
  not_parents: { name: 'Not parents' },
  unspecified: { name: 'Unspecified' },
};

export default () => {
  const { getField, setField } = useNewAdContext();
  const parental_status = getField('targeting_parental_status');

  const handleChangeRadio = (e) => {
    setField('targeting_parental_status', e.target.value);
  };

  const isStatusSelected = (val) => {
    return parental_status.value == val;
  };

  return (
    <PanelField
      title='Choose Location Type'
      content={
        <>
          {Object.keys(options).map((status) => {
            return (
              <FormControl fullWidth key={status}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={isStatusSelected(status)}
                      onChange={handleChangeRadio}
                      name='targeting_parental_status'
                      value={status}
                    />
                  }
                  label={options[status].name}
                />
              </FormControl>
            );
          })}
        </>
      }
    />
  );
};
