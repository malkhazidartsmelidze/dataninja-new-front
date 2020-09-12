import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default (props) => {
  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              label='Subject Line'
              defaultValue='Example Subject Line'
              name='creative_gmail_subject_name'
            />
          </Grid>
          <Grid item>
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
