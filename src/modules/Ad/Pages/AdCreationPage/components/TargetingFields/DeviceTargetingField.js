import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { FormControl, FormControlLabel, Checkbox, Tooltip } from '@material-ui/core';

const deviceOptions = {
  desktop: { tooltip: 'Aviable In All Networks', name: 'Desktop' },
  mobile: { tooltip: 'Aviable In All Networks', name: 'Mobile' },
  tablet: { tooltip: 'Aviable Only in google', name: 'Tablet' },
};

export default () => {
  const { getField, setField } = useNewAdContext();
  const devices = getField('targeting_devices');

  const handleDeviceChangeRadio = (e) => {
    const chosenDevice = e.target.value;
    const checked = e.target.checked;

    if (!checked && isDeviceSelected(chosenDevice)) {
      devices.value.splice(devices.value.indexOf(chosenDevice), 1);
      setField('targeting_devices', devices.value);
    } else {
      setField('targeting_devices', [...devices.value, chosenDevice]);
    }
  };

  const isDeviceSelected = (val) => {
    return devices.value.indexOf(val) !== -1;
  };

  return (
    <PanelField
      title='Choose Location Type'
      content={
        <>
          {Object.keys(deviceOptions).map((device) => {
            return (
              <FormControl fullWidth key={device}>
                <FormControlLabel
                  control={
                    <Tooltip title={deviceOptions[device].tooltip}>
                      <Checkbox
                        checked={isDeviceSelected(device)}
                        onChange={handleDeviceChangeRadio}
                        name='targeting_device'
                        value={device}
                      />
                    </Tooltip>
                  }
                  label={deviceOptions[device].name}
                />
              </FormControl>
            );
          })}
        </>
      }
    />
  );
};
