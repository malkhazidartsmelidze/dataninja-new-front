import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import CheckboxField from 'components/Fields/CheckboxField';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

const options = [
  { name: 'Desktop', value: 'desktop' },
  { name: 'Mobile', value: 'mobile' },
  { name: 'Tablet', value: 'tablet' },
  { name: 'TV', value: 'connected_tv' },
];

export default () => {
  const { isSearch } = useCreateAd();

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
          {!isSearch && (
            <Grid item>
              <FormControlLabel
                control={<Checkbox name='targetings[only_wifi]' value='true' />}
                label='Only On Wifi Network'
              />
            </Grid>
          )}
        </Grid>
      }
    />
  );
};
