import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import CheckboxField from 'components/Fields/CheckboxField';

export default () => {
  const { setField, getField } = useNewAdContext();

  const platforms = getField('platforms').value || [];

  const platformOptions = [
    { name: 'Facebook', value: 'facebook' },
    { name: 'Instagram', value: 'instagram' },
    { name: 'Messenger', value: 'messenger' },
    { name: 'Audience network', value: 'audience_network' },
    { name: 'Standard display banners', value: 'standard_display_banners' },
    { name: 'Gmail', value: 'gmail' },
  ];

  const onPlatformChange = (platforms) => {
    setField('platforms', platforms);
  };

  return (
    <PanelField
      title='Enter Campaign Name'
      content={
        <CheckboxField value={platforms} onChange={onPlatformChange} options={platformOptions} />
      }
    />
  );
};
