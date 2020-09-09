import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default (props) => {
  return (
    <PanelField
      content={
        <SelectField
          options={[
            { value: 'automatic', name: 'Automatic' },
            { value: 'manual', name: 'Manual' },
          ]}
          label='Choose Bid Type'
          name='bid_type'
          width={300}
        />
      }
    />
  );
};
