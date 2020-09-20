import React, { useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

const options = [
  { name: 'Expansion all', value: 'expansion_all' },
  { name: 'None', value: 'none' },
];

export default (props) => {
  const [value, setValue] = useState('expansion_all');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <PanelField
      content={
        <SelectField
          width={400}
          name='targetings[targeting_expansion]'
          value={value}
          options={options}
          onChange={handleChange}
          label='Choose Expansion'
        />
      }
    />
  );
};
