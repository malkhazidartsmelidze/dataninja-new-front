import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { RadioField } from 'components/Fields';

const options = [
  { name: 'People regularly living in the location', value: 'living' },
  { name: 'People recently in this location', value: 'recent' },
  { name: 'People in, or who show interest in selected locations', value: 'search' },
];

export default ({ props }) => {
  return (
    <PanelField
      title='Choose Location Type'
      content={[<RadioField options={options} {...props} />]}
    />
  );
};
