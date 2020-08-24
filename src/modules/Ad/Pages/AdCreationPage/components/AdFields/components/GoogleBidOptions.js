import React, { useEffect, useState } from 'react';
import {
  MenuItem,
  TextField,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import { mdiCurrencyEur } from '@mdi/js';
import Icon from '@mdi/react';
/**
 * If facebook pay_per_click is chosen make link_clicks
 */
export default () => {
  const { getField, setField } = useNewAdContext();
  const bidOptimizationType = getField('bid_optimization_type');
  const isEnhanced = getField('enhanced_bid');
  const bidAmount = getField('bid_amount');
  const [show, setShow] = useState(false);
  const bidTypeOption = {
    manual_cpc: { value: 'manual_cpc', name: 'Manual Cpc' },
  };

  useEffect(() => {
    if (bidOptimizationType.value == 'pay_per_click') {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [bidOptimizationType.value]);

  const handleGoogleBidAmountChange = (e) => {
    setField('bid_amount', e.target.value, 'google');
  };

  const handleEnhancedCheck = (e) => {
    setField('enhanced_bid', e.target.checked, 'google');
  };

  if (!show) return null;

  return (
    <>
      <Grid item>
        <TextField
          fullWidth={true}
          value='manual_cpc'
          name='google_bid_type'
          select={true}
          disabled
        >
          {Object.values(bidTypeOption).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox checked={isEnhanced.google} onChange={handleEnhancedCheck} name='facebook' />
          }
          label='Enhanced'
        />
      </Grid>
      <Grid item>
        <TextField
          value={bidAmount.google}
          onChange={handleGoogleBidAmountChange}
          name='bid_amount'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon path={mdiCurrencyEur} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </>
  );
};
