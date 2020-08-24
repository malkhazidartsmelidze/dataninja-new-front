import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem, FormControl, FormControlLabel, Radio } from '@material-ui/core';

const aviableOptions = {
  all: { value: 'all', name: 'All' },
  male: { value: 'male', name: 'Male' },
  female: { value: 'female', name: 'Female' },
};

export default () => {
  const { getField, setField } = useNewAdContext();
  const locationType = getField('targeting_location_type');

  const handleLocationTypeRadio = (e) => {
    const chosenType = e.target.value;
    setField('targeting_location_type', chosenType);
  };

  const isLocationType = (val) => {
    return locationType.value === val;
  };

  return (
    <PanelField
      title='Choose Location Type'
      content={[
        <FormControl fullWidth key='living'>
          <FormControlLabel
            control={
              <Radio
                checked={isLocationType('living')}
                onChange={handleLocationTypeRadio}
                name='targeting_location_type'
                value='living'
              />
            }
            label='People regularly living in the location'
          />
        </FormControl>,
        <FormControl fullWidth key='recent'>
          <FormControlLabel
            control={
              <Radio
                checked={isLocationType('recent')}
                onChange={handleLocationTypeRadio}
                name='targeting_location_type'
                value='recent'
              />
            }
            label='People recently in this location'
          />
        </FormControl>,
        <FormControl fullWidth key='interest'>
          <FormControlLabel
            control={
              <Radio
                checked={isLocationType('interest')}
                onChange={handleLocationTypeRadio}
                name='targeting_location_type'
                value='interest'
              />
            }
            label='People in, or who show interest in selected locations'
          />
        </FormControl>,
      ]}
    />
  );
};
