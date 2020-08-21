import React, { useEffect, useState } from 'react';
import {
  MenuItem,
  TextField,
  Grid,
  Typography,
  Hidden,
  InputAdornment,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import { mdiCurrencyEur } from '@mdi/js';
import Icon from '@mdi/react';
import PanelField from 'components/ExpansionPanel/PanelField';
/**
 * If facebook pay_per_click is chosen make link_clicks
 */
export default () => {
  const { getField, setField } = useNewAdContext();
  const bidOptimizationType = getField('bid_optimization_type');
  const payFor = getField('pay_for');
  const bidType = getField('bid_type');
  const bidAmount = getField('bid_amount');
  const cortOrBid = getField('cost_or_bid');
  const [show, setShow] = useState(false);
  const payForOption = {
    pay_for_clicks: { value: 'pay_for_clicks', name: 'Pay For Clicks' },
    pay_for_impressions: { value: 'pay_for_impressions', name: 'Pay For Impressions' },
  };

  useEffect(() => {
    if (bidOptimizationType.value == 'pay_per_click') {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [bidOptimizationType.value]);

  const handleChangePayFor = (e) => {
    setField('pay_for', e.target.value, 'facebook');
  };

  const handleFacebookBidAmountChange = (e) => {
    setField('bid_amount', e.target.value, 'facebook');
  };

  const handleCostOrBidChange = (e) => {
    setField('cost_or_bid', e.target.value, 'facebook');
  };

  if (!show) return null;

  const showBidAmountInput = bidType.facebook == 'manual';

  return (
    <PanelField
      content={[
        <TextField
          fullWidth={false}
          value={payFor.facebook}
          onChange={handleChangePayFor}
          name='pay_for'
          key='pay_for'
          select={true}
        >
          {Object.values(payForOption).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>,
        showBidAmountInput && (
          <>
            <Grid item>
              <TextField
                value={bidAmount.facebook}
                onChange={handleFacebookBidAmountChange}
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
            <Grid item>
              <FormControlLabel
                control={
                  <Radio
                    checked={cortOrBid.facebook == 'cost'}
                    onChange={handleCostOrBidChange}
                    value='cost'
                  />
                }
                label='Cost Cap'
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Radio
                    checked={cortOrBid.facebook == 'bid'}
                    onChange={handleCostOrBidChange}
                    value='bid'
                  />
                }
                label='Bid Cap'
              />
            </Grid>
          </>
        ),
      ]}
    />
  );
};
