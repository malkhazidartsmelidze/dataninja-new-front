import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default (props) => {
  return (
    <PanelField
      content={
        <TextField
          label='Enter Description'
          defaultValue='Example Descirption'
          name='creative_description'
          placeholder='Enter Ad Long Headline'
          {...props}
        />
      }
    />
  );
};
