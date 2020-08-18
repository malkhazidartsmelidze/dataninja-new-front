import React from 'react';
import { Grid } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import { TextInput, SelectInput } from 'components/inputs';
import BiddingFields from './BiddingFields';

export default () => {
  const { networks, setNetwork } = useNewAdContext();

  return (
    <Grid container spacing={1}>
      <TextInput
        sizes={{
          xs: 6,
        }}
        name='campaign_name'
        value='Traffic Campaign 22'
        label='Campaign Name'
      />
      <TextInput
        sizes={{
          xs: 6,
        }}
        name='Asdas'
        value='Traffic Campaign 22'
      />
      <BiddingFields />
    </Grid>
  );
};
