import React, { useState, useEffect } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  const { setField, getField } = useNewAdContext();
  const field = getField('creative_business_name').value;
  const [stateField, setStateField] = useState(field);

  const onChange = (e) => {
    setStateField(e.target.value);
  };

  useEffect(() => {
    const deb = setTimeout(() => setField('creative_business_name', stateField), 500);
    return () => clearTimeout(deb);
  }, [stateField]);

  return (
    <PanelField
      content={
        <>
          <TextField value={stateField} onChange={onChange} placeholder='Enter Business Text' />
        </>
      }
    />
  );
};
