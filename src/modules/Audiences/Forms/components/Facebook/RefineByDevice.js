import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default ({ onChange, name, value: _value }) => {
  const deviceOptions = [
    { name: 'All', value: 'all' },
    { name: 'All Mobile', value: 'all_mobile' },
    { name: 'IOS', value: 'ios' },
    { name: 'Android', value: 'android' },
    { name: 'Desktop', value: 'desktop' },
  ];
  const [device, setDevice] = useState(_value);

  const onDeviceChange = (e) => {
    onChange(name, e.target.value);
    setDevice(e.target.value);
  };

  return (
    <PanelField
      content={
        <SelectField
          style={{ width: 200 }}
          value={device}
          onChange={onDeviceChange}
          options={deviceOptions}
        />
      }
    />
  );
};
