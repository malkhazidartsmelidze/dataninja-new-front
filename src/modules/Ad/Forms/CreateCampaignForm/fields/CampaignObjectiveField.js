import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import useCreateAd from 'modules/Ad/store/CreateAdContext';
import { Grid } from '@material-ui/core';

export default () => {
  const { state, setState, isSearch, turnOffNetwork, isNetworkSelected, networks } = useCreateAd();
  const [searchType, setSearchType] = useState('search_traffic');

  const onObjectiveChange = (e) => {
    const val = e.target.value;
    if (val === 'search') {
      if (isNetworkSelected('facebook') && window.confirm('Facebook Will Turn Off')) {
        turnOffNetwork('facebook');
        setState({ campaign_objective: val });
      } else {
        setState({ campaign_objective: val });
      }
    } else {
      setState({ campaign_objective: val });
    }
  };

  return (
    <PanelField>
      <Grid container spacing={2} direction='column' key={state.campaign_objective}>
        <Grid item>
          <SelectField
            name='campaign_objective'
            value={state.campaign_objective}
            onChange={onObjectiveChange}
            options={Object.values(options)}
          />
        </Grid>
        {state.campaign_objective === 'search' && (
          <Grid item>
            <SelectField
              name='search_campaign_type'
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              options={Object.values(searchOptions)}
            />
          </Grid>
        )}
      </Grid>
    </PanelField>
  );
};

const options = {
  traffic: { name: 'Get More Traffic', value: 'traffic' },
  conversions: { name: 'Get More Conversions', value: 'conversions' },
  search: { name: 'Google Search Ad', value: 'search' },
  retargeting: { name: 'Retargeting Campaign', value: 'retargeting' },
};

const searchOptions = {
  cpl: { name: 'Get More Traffic', value: 'search_traffic' },
  cpa: { name: 'Get More Conversions', value: 'search_conversions' },
};
