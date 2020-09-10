import React, { Fragment, useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField, RadioField } from 'components/Fields';

export default () => {
  return (
    <PanelField
      content={
        <Fragment>
          <TextField name='adgroup_bid_amount' label='Bid Amount' style={{ width: 300 }} />
          <RadioField
            options={[
              { name: 'Cost Cap', value: 'cost_cap' },
              { name: 'Bid Cap', value: 'bid_cap' },
            ]}
            name='adgroup_bid_strategy'
          />
        </Fragment>
      }
    />
  );
};
