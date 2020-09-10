import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default (props) => {
  return (
    <PanelField
      content={
        <SelectField
          options={[
            { value: 'clicks', name: 'Pay Per Click' },
            { value: 'views', name: 'Pay Per Impressions' },
          ]}
          width={400}
          name='adgroup_billing_event'
          label='Choose Billing Event'
          defaultValue='clicks'
        />
      }
    />
  );
};
