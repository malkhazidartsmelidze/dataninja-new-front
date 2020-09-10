import React, { Fragment, useState } from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField, RadioField } from 'components/Fields';

export default () => {
  const [bidStrategy, setBidStrategy] = useState('');
  const [bidType, setBidType] = useState('manual');

  return (
    <PanelField
      content={
        <Fragment>
          <SelectField
            options={[
              { value: 'automatic', name: 'Automatic' },
              { value: 'manual', name: 'Manual' },
            ]}
            label='Choose Bid Type'
            name='adgroup_bid_type'
            value={bidType}
            onChange={(e) => setBidType(e.target.value)}
            width={300}
          />
          {bidType === 'manual' && (
            <Fragment>
              <TextField name='adgroup_bid_amount' label='Bid Amount' style={{ width: 300 }} />
              <RadioField
                options={[
                  { name: 'Cost Cap', value: 'cost_cap' },
                  { name: 'Bid Cap', value: 'bid_cap' },
                ]}
                value={bidStrategy}
                onChange={(e) => setBidStrategy(e.target.value)}
                name='adgroup_bid_strategy'
              />
            </Fragment>
          )}
        </Fragment>
      }
    />
  );
};
