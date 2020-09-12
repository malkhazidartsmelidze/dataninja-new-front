import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default (props) => {
  return (
    <PanelField
      content={
        <TextField
          label='Display Link'
          name='creative_display_link'
          placeholder='Enter Ad Long Headline'
          defaultValue='Example Display Link'
          {...props}
        />
      }
    />
  );
};
