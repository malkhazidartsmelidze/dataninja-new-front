import React, { useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { useEffect } from 'react';

export default () => {
  const { setField, getField } = useNewAdContext();
  const _parameters = getField('url_parameters');
  const [parameters, setParameters] = useState(_parameters.value);

  useEffect(() => {
    if (parameters == _parameters.value) return;
    const deb = setTimeout(() => setField('url_parameters', parameters), 500);
    return () => clearTimeout(deb);
  }, [parameters]);

  return (
    <PanelField
      title='Enter Ad parameters'
      content={
        <TextField
          name='url_parameters'
          value={parameters}
          onChange={(e) => setParameters(e.target.value)}
          placeholder='name=value&name2=value'
        />
      }
    />
  );
};
