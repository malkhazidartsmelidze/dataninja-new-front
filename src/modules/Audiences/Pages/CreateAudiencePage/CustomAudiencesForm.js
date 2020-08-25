import React, { Fragment, useState } from 'react';
import { SelectField } from 'components/Fields';
import CustomIntentAudienceForm from './CustomIntentAudienceForm';
import CustomAffinityAudienceForm from './CustomAffinityAudienceForm';
import { Divider, Grow } from '@material-ui/core';

export default () => {
  const [customAudienceType, setCustomAudienceType] = useState('affinity');

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
      {customAudienceType == 'intent' && (
        <Grow in={true}>
          <CustomIntentAudienceForm />
        </Grow>
      )}
      {customAudienceType == 'affinity' && (
        <Grow in={true}>
          <CustomAffinityAudienceForm />
        </Grow>
      )}
    </Fragment>
  );
};

const customAudienceTypes = [
  { name: 'Custom Affinity Audience', value: 'affinity' },
  { name: 'Custom Intent Audience', value: 'intent' },
];
