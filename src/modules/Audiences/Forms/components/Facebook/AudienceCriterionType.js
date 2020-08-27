import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  const criterionOptiions = [
    { name: 'All Criterions', value: 'all' },
    { name: 'Any Criterion', value: 'any' },
  ];
  const [criterion, setCriterion] = useState('all');

  const onCriterionChange = (e) => {
    setCriterion(e.target.value);
  };

  return (
    <PanelField
      content={
        <SelectField
          style={{ width: 200 }}
          value={criterion}
          onChange={onCriterionChange}
          options={criterionOptiions}
        />
      }
    />
  );
};
