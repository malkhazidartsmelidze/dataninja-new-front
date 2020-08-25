import React, { useEffect } from 'react';
import { MenuItem, TextField, Grid, Typography } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import SplittedInput from '../SplittedInput';

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

  const logitem = (item) => {
    setTimeout(() => console.log(item), item);
  };

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item>
        <Typography color='textSecondary'>Enter Campaign Budget:</Typography>
      </Grid>
      <Grid item>
        <SplittedInput
          networks={['facebook', 'google']}
          onSplitProps={{
            facebook: {
              label: 'Facebook',
              value: budget.facebook,
              onChange: handleFacebookBudgetChange,
            },
            google: {
              label: 'Google',
              value: budget.google,
              onChange: handleGoogleBudgetChange,
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
      </Grid>
    </Grid>
  );
};
