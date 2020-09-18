import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import CheckboxField from 'components/Fields/CheckboxField';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';

const options = [
  { name: 'Desktop', value: 'desktop' },
  { name: 'Mobile', value: 'mobile' },
  { name: 'Tablet', value: 'tablet' },
  { name: 'TV', value: 'connected_tv' },
];

export default () => {
  return (
    <PanelField
      content={
        <Grid container spacing={4}>
          <Grid item>
            <CheckboxField
              options={options}
              name='targetings[devices][]'
              value={['desktop', 'mobile', 'tablet']}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Checkbox name='targetings[only_wifi]' value='true' />}
              label='Only On Wifi Network'
            />
          </Grid>
        </Grid>
      }
    />
  );
};
