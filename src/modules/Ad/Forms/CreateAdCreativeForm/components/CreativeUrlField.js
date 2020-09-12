import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default (props) => {
  return (
    <PanelField
      content={
        <TextField
          label='Enter Creative Url'
          defaultValue='https://facebook.com'
          name='creative_url'
        />
      }
    />
  );
};
