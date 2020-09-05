import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { RadioField } from 'components/Fields';

const options = [
  { name: 'Optimize: Prefer best performing ads (Recomended)', value: 'optimize' },
  { name: 'Do not optimize: Rotate ads indefinitely', value: 'not_optimize' },
];

export default () => {
  return <PanelField content={<RadioField options={options} onChange={() => {}} />} />;
};
