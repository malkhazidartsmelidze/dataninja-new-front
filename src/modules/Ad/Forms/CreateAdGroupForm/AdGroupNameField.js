import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default ({ value, ...rest }) => {
  return <PanelField content={<TextField {...rest} />} />;
};
