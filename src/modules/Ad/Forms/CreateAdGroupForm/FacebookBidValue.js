import React, { Fragment, useState } from 'react';
import { Checkbox, FormControlLabel, Grid, InputAdornment, TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField, RadioField } from 'components/Fields';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default () => {
  const [bidStrategy, setBidStrategy] = useState('cost_cap');
  const [bidType, setBidType] = useState('automatic');
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
                  value={bidType}
                  onChange={(e) => setBidType(e.target.value)}
                  width={300}
                />
                {bidType === 'manual' && (
                  <RadioField
                    options={[
                      { name: 'Cost Cap', value: 'cost_cap' },
                      { name: 'Bid Cap', value: 'bid_cap' },
                    ]}
                    value={bidStrategy}
                    onChange={(e) => setBidStrategy(e.target.value)}
                    name='adgroup_bid_strategy'
                  />
                )}
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  startAdornment: <InputAdornment>$</InputAdornment>,
                }}
                name='adgroup_bid_amount'
                label='Bid Amount'
                style={{ width: 300 }}
              />
            </Grid>
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
                    />
                  }
                  label='Enhanced Bid'
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      }
    />
  );
};
