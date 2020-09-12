import React from 'react';
import { Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default (props) => {
  const facebookOptions = [
    { value: 'open_link', name: 'Open Link' },
    { value: 'like_page', name: 'Like Page' },
    { value: 'shop_now', name: 'Shop Now' },
    { value: 'play_game', name: 'Play Game' },
    { value: 'learn_more', name: 'Learn More' },
    { value: 'watch_video', name: 'Watch Video' },
    { value: 'apply_now', name: 'Apply Now' },
    { value: 'message_page', name: 'Message Page' },
    { value: 'see_more', name: 'See More' },
  ];

  const googleOptions = [
    { value: 'open_link', name: 'Open Link' },
    { value: 'like_page', name: 'Like Page' },
    { value: 'shop_now', name: 'Shop Now' },
    { value: 'play_game', name: 'Play Game' },
    { value: 'learn_more', name: 'Learn More' },
    { value: 'watch_video', name: 'Watch Video' },
    { value: 'apply_now', name: 'Apply Now' },
    { value: 'message_page', name: 'Message Page' },
    { value: 'see_more', name: 'See More' },
  ];

  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SelectField
              fullWidth
              options={facebookOptions}
              defaultValue='open_link'
              label='Call To Action For Google'
              name='creative_facebook_call_to_action'
            />
          </Grid>
          <Grid item xs={6}>
            <SelectField
              fullWidth
              options={googleOptions}
              defaultValue='open_link'
              label='Call To Action For Google'
              name='creative_google_call_to_action'
            />
          </Grid>
        </Grid>
      }
    />
  );
};
