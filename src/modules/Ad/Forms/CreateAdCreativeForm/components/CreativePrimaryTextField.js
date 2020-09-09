import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default (props) => {
  return (
    <PanelField
      content={
        <TextField
          label='Enter Primary Text'
          name='primary_text'
          placeholder='Enter Ad Long Headline'
          {...props}
        />
      }
    />
  );
};
