import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default (props) => {
  return (
    <PanelField
      content={
        <TextField
          label='Enter Business Name'
          name='creative_business_name'
          defaultValue='Example Business Name'
          {...props}
        />
      }
    />
  );
};
