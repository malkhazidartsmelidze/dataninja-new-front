import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  return (
    <PanelField content={<TextField name='campaign_name' defaultValue='Exampe Campaign Name' />} />
  );
};
