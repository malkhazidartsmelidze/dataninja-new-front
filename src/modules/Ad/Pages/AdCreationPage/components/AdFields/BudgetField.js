import React, { useEffect } from 'react';
import { MenuItem, TextField, Grid, Typography, InputAdornment } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import SplittedInput from '../SplittedInput';
import PanelField from 'components/ExpansionPanel/PanelField';
import Icon from '@mdi/react';
import { mdiCurrencyEur } from '@mdi/js';

export default () => {
  const { getField, setField } = useNewAdContext();
  const budget = getField('budget');

  const handleBudgetChangeInput = (e) => {
    const budget = e.target.value;
    setField('budget', budget);
  };

  const handleGoogleBudgetChange = (e) => {
    const budget = e.target.value;
    setField('budget', budget, 'google');
  };

  const handleFacebookBudgetChange = (e) => {
    const budget = e.target.value;
    setField('budget', budget, 'facebook');
  };

  return (
    <PanelField
      content={
        <SplittedInput
          networks={['facebook', 'google']}
          onSplitProps={{
            facebook: {
              label: 'Facebook',
              value: budget.facebook,
              onChange: handleFacebookBudgetChange,
              InputProps: {
                endAdornment: (
                  <InputAdornment position='end'>
                    <Icon path={mdiCurrencyEur} />
                  </InputAdornment>
                ),
              },
            },
            google: {
              label: 'Google',
              value: budget.google,
              onChange: handleGoogleBudgetChange,
              InputProps: {
                endAdornment: (
                  <InputAdornment position='end'>
                    <Icon path={mdiCurrencyEur} />
                  </InputAdornment>
                ),
              },
            },
          }}
        >
          <TextField
            value={budget.value}
            type='number'
            name='budget'
            onChange={handleBudgetChangeInput}
          />
        </SplittedInput>
      }
    />
  );
};
