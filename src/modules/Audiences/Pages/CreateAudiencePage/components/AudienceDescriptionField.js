import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  return (
    <PanelField
      title='Enter Audience Description'
      content={
        <TextField
          name='audience_description'
          // value={getField('audience_name').value}
          // onChange={(e) => setField('audience_name', e.target.value)}
          placeholder='Enter audience description'
        />
      }
    />
  );
};
