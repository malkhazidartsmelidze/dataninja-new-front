import React from 'react';
import { Checkbox, FormControlLabel, FormControl } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  const { networks, setNetwork } = useNewAdContext();

  const handleNetworkCheck = (e) => {
    setNetwork(e.target.name, e.target.checked);
  };

  return (
    <PanelField
      title='Choose Network'
      content={[
        <FormControl fullWidth key='fb'>
          <FormControlLabel
            control={
              <Checkbox checked={networks.facebook} onChange={handleNetworkCheck} name='facebook' />
            }
            label='Facebook'
          />
        </FormControl>,
        <FormControl fullWidth key='google'>
          <FormControlLabel
            control={
              <Checkbox checked={networks.google} onChange={handleNetworkCheck} name='google' />
            }
            label='Google'
          />
        </FormControl>,
      ]}
    />
  );
};
