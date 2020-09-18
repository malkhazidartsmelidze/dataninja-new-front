import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default () => {
  const {
    turnOffNetwork,
    turnOnNetwork,
    networks,
    isNetworkSelected,
    state,
    setState,
  } = useCreateAd();
  const value = state.optimization_goal;

  const handleChange = (e) => {
    const value = e.target.value;

    if (value == 'page_views') {
      if (window.confirm('Are you sure you want to choose this strategy? Google will turn off')) {
        setState({ optimization_goal: value });
        turnOffNetwork('google');
        turnOnNetwork('facebook');
      }
      return;
    }

    if (value == 'maximize_clicks') {
      if (window.confirm('Are you sure you want to choose this strategy? Facebook will turn off')) {
        setState({ optimization_goal: value });
        turnOffNetwork('facebook');
        turnOnNetwork('google');
      }
      return;
    }
    setState({ optimization_goal: value });
  };

  useEffect(() => {
    if (isNetworkSelected('facebook') && value === 'maximize_clicks') {
      setState({ optimization_goal: 'clicks' });
    }

    if (isNetworkSelected('google') && value === 'page_views') {
      setState({ optimization_goal: 'clicks' });
    }
  }, [networks]);

  return (
    <PanelField
      content={
        <SelectField
          options={[
            { value: 'clicks', name: 'Optimize For Clicks' },
            { value: 'views', name: 'Optimize For Impressions' },
            { value: 'page_views', name: 'Optimize For Landing Page Views' },
            { value: 'maximize_clicks', name: 'Optimize For Maximum Clicks' },
          ]}
          width={400}
          name='adgroup_optimization_goal'
          label='Choose Optimization Goal'
          onChange={handleChange}
          value={value}
          defaultValue='clicks'
        />
      }
    />
  );
};
