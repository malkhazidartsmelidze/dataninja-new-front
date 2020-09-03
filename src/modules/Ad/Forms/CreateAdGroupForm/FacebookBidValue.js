import React, { Fragment, useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField, RadioField } from 'components/Fields';

export default ({ bidValueProps, bidStrategyProps }) => {
  const [bidStrategy, setBidStrategy] = useState(bidStrategyProps.value);

  return (
    <PanelField
      content={
        <Fragment>
          <TextField {...bidValueProps} />
          <RadioField
            options={[
              { name: 'Cost Cap', value: 'cost_cap' },
              { name: 'Bid Cap', value: 'bid_cap' },
            ]}
            {...bidStrategyProps}
            onChange={(e) => setBidStrategy(e.target.value)}
            value={bidStrategy}
          />
        </Fragment>
      }
    />
  );
};
