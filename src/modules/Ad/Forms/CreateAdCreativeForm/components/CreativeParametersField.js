import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default (props) => {
  return (
    <PanelField
      content={
        <TextField label='Enter Parameters' name='creative_parameters' defaultValue='' {...props} />
      }
    />
  );
};
