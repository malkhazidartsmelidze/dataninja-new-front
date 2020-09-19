import React, { Fragment, useState } from 'react';
import { Checkbox, FormControlLabel, Grid, InputAdornment, TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField, RadioField } from 'components/Fields';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default () => {
  const { state, setState } = useCreateAd();
  const [enhancedBid, setEnhancedBid] = useState(false);
  const { isNetworkSelected } = useCreateAd();

  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {isNetworkSelected('facebook') && (
              <Grid item xs={12}>
                <SelectField
                  options={[
                    { value: 'automatic', name: 'Automatic' },
                    { value: 'manual', name: 'Manual' },
                  ]}
                  label='Choose Bid Type'
                  name='adgroup_bid_type'
                  value={state.bid_type}
                  onChange={(e) => setState({ bid_type: e.target.value })}
                  width={300}
                />
                {state.bid_type === 'manual' && (
                  <RadioField
                    options={[
                      { name: 'Cost Cap', value: 'cost_cap' },
                      { name: 'Bid Cap', value: 'bid_cap' },
                    ]}
                    value={state.bid_strategy}
                    onChange={(e) => setState({ bid_strategy: e.target.value })}
                    name='adgroup_bid_strategy'
                  />
                )}
                {state.bid_type === 'manual' && (
                  <TextField
                    InputProps={{
                      startAdornment: <InputAdornment>$</InputAdornment>,
                    }}
                    name='adgroup_facebook_bid_amount'
                    label='Bid Amount'
                    style={{ width: 300 }}
                  />
                )}
              </Grid>
            )}
          </Grid>
          {isNetworkSelected('google') && (
            <Grid item xs={6}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name='adgroup_google_enhanced_bid'
                      onChange={(e) => setEnhancedBid(e.target.checked)}
                      checked={enhancedBid}
                      value={enhancedBid ? 1 : 0}
                    />
                  }
                  label='Enhanced Bid'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    startAdornment: <InputAdornment>$</InputAdornment>,
                  }}
                  name='adgroup_google_bid_amount'
                  label='Bid Amount'
                  style={{ width: 300 }}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      }
    />
  );
};
