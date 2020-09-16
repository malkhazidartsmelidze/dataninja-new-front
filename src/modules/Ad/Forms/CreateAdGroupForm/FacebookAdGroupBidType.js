import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default (props) => {
  const [value, setValue] = useState('automatic');

  return (
    <PanelField
      content={
        <SelectField
          options={[
            { value: 'automatic', name: 'Automatic' },
            { value: 'manual', name: 'Manual' },
          ]}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label='Choose Bid Type'
          name='adgroup_bid_type'
          width={300}
        />
      }
    />
  );
};
