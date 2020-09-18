import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default (props) => {
  const [disabled, setDisabled] = useState(false);
  const { state, setState } = useCreateAd();

  const value = state.billing_event;

  useEffect(() => {
    if (state.optimization_goal === 'views') {
      setDisabled(true);
      setState({ billing_event: 'clicks' });
    } else {
      setDisabled(false);
    }
  }, [state.optimization_goal]);

  return (
    <PanelField
      content={
        <SelectField
          options={[
            { value: 'clicks', name: 'Pay Per Click' },
            { value: 'views', name: 'Pay Per Impressions' },
          ]}
          onChange={(e) => setState({ billing_event: e.target.value })}
          width={400}
          value={value}
          disabled={disabled}
          name='adgroup_billing_event'
          label='Choose Billing Event'
          defaultValue='clicks'
        />
      }
    />
  );
};
