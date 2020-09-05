import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import CheckboxField from 'components/Fields/CheckboxField';

const options = [
  { name: 'Desktop', value: 'desktop' },
  { name: 'Mobile', value: 'mobile' },
  { name: 'Tablet', value: 'tablet' },
];

export default () => {
  return (
    <PanelField
      title='Choose Location Type'
      content={<CheckboxField onChange={() => {}} options={options} />}
    />
  );
};
