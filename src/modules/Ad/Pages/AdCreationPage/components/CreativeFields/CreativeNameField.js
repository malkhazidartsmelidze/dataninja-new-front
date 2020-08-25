import React, { useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { useEffect } from 'react';

export default () => {
  const { setField, getField } = useNewAdContext();
  const creativeName = getField('creative_name');
  const [name, setName] = useState(creativeName.value);

  useEffect(() => {
    if (name == creativeName.value) return;
    const deb = setTimeout(() => setField('creative_name', name), 500);
    return () => clearTimeout(deb);
  }, [name]);

  return (
    <PanelField
      title='Enter Ad NAme'
      content={
        <TextField
          name='creative_name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Ad NAme'
        />
      }
    />
  );
};
