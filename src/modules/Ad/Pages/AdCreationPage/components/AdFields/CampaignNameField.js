import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  const { setField, getField } = useNewAdContext();

  return (
    <PanelField
      title='Enter Campaign Name'
      content={
        <TextField
          name='campaign_name'
          value={getField('campaign_name').value}
          onChange={(e) => setField('campaign_name', e.target.value)}
          placeholder='Enter Campaign name'
        />
      }
    />
  );
};
