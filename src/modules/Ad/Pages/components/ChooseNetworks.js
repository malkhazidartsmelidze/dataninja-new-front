import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';

export default () => {
  const { networks, setNetwork } = useNewAdContext();

  const handleNetworkCheck = (e) => {
    setNetwork(e.target.name, e.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox checked={networks.facebook} onChange={handleNetworkCheck} name='facebook' />
        }
        label='Facebook'
      />
      <FormControlLabel
        control={<Checkbox checked={networks.google} onChange={handleNetworkCheck} name='google' />}
        label='Google'
      />
    </>
  );
};
