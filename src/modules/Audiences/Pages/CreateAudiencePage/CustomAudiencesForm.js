import React, { Fragment, useState } from 'react';
import { SelectField } from 'components/Fields';
import CustomIntentAudienceForm from './CustomIntentAudienceForm';
import CustomAffinityAudienceForm from './CustomAffinityAudienceForm';
import { Divider } from '@material-ui/core';

export default () => {
  const [customAudienceType, setCustomAudienceType] = useState('intent');

  const onAudienceTypeChange = (e) => {
    setCustomAudienceType(e.target.value);
  };

  return (
    <Fragment>
      <SelectField
        options={customAudienceTypes}
        value={customAudienceType}
        label='Choose Custom Audience Type'
        style={{ width: 400 }}
        onChange={onAudienceTypeChange}
      />
      <Divider style={{ marginTop: 8, marginBottom: 8 }} />
      {customAudienceType == 'intent' && <CustomIntentAudienceForm />}
      {customAudienceType == 'affinity' && <CustomAffinityAudienceForm />}
    </Fragment>
  );
};

const customAudienceTypes = [
  { name: 'Custom Affinity Audience', value: 'affinity' },
  { name: 'Custom Intent Audience', value: 'intent' },
];
