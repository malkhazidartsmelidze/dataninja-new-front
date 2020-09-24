import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default (props) => {
  return (
    <PanelField>
      <Grid container spacing={2}>
        <Grid item>
          <TextField label='Enter Path 1' defaultValue='path1' name='creative_paths[]' />
        </Grid>
        <Grid item>
          <TextField label='Enter Path 2' defaultValue='path2' name='creative_paths[]' />
        </Grid>
      </Grid>
    </PanelField>
  );
};
