import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  const { setField, getField } = useNewAdContext();

  return (
    <PanelField
      title='Enter adset Name'
      content={
        <TextField
          name='adset_name'
          value={getField('adset_name').value}
          onChange={(e) => setField('adset_name', e.target.value)}
          placeholder='Enter adset name'
        />
      }
    />
  );
};
