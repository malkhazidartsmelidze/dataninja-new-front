import React, { useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { FormControl, FormControlLabel, Checkbox, Tooltip, Radio } from '@material-ui/core';
import { RadioField } from 'components/Fields';

const options = [
  { name: 'Parents', value: 'parents' },
  { name: 'Not parents', value: 'not_parents' },
  { name: 'Unspecified', value: 'unspecified' },
];

export default (props) => {
  const [value, setValue] = useState('');

  return (
    <PanelField
      content={
        <RadioField
          name='targetings[parental_status]'
          value={value}
          options={options}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
      }
    />
  );
};
