import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default () => {
  const [disabled, setDisabled] = useState(false);
  const { state, setState } = useCreateAd();

  const value = state.billing_event;

  useEffect(() => {
    if (state.optimization_goal === 'views') {
      setDisabled(true);
      setState({ billing_event: 'views' });
    } else {
      setDisabled(false);
    }

    if (state.bid_strategy === 'cost_cap') {
      setState({ billing_event: 'views' });
    }
  }, [state.optimization_goal, state.bid_strategy]);

  const handleChange = (e) => {
    if (state.bid_strategy === 'cost_cap' && e.target.value === 'clicks') {
      e.preventDefault();
      return alert('Please choose bid cap');
    }
    setState({ billing_event: e.target.value });
  };

  return (
    <PanelField
      content={
        <SelectField
          options={[
            { value: 'clicks', name: 'Pay Per Click' },
            { value: 'views', name: 'Pay Per Impressions' },
          ]}
          onChange={handleChange}
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
