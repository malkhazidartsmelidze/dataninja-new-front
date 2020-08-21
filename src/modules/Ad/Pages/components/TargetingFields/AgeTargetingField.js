import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem, Grid } from '@material-ui/core';

export default () => {
  const { getField, setField } = useNewAdContext();
  const ageFrom = getField('targeting_age_from');
  const ageTo = getField('targeting_age_to');

  const handleFieldChange = (e) => {
    const chosenGender = e.target.value;
    setField(e.target.name, chosenGender);
  };

  return (
    <PanelField
      title='Choose Bid Optimization'
      content={
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              value={ageFrom.value}
              label='Minimum Age'
              name='targeting_age_from'
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item>
            <TextField
              value={ageTo.value}
              label='Maximum Age'
              name='targeting_age_to'
              onChange={handleFieldChange}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
