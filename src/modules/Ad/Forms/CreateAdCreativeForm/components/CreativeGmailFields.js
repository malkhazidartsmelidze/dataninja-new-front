import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default (props) => {
  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label='Subject Line'
              defaultValue='Example Subject Line'
              name='creative_gmail_subject_name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Description'
              defaultValue='Example Description'
              name='creative_gmail_description'
            />
          </Grid>
        </Grid>
      }
    />
  );
};
