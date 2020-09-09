import React, { useState } from 'react';
import CreateAdGroupForm from 'modules/Ad/Forms/CreateAdGroupForm';
import CreateAdCreativeForm from 'modules/Ad/Forms/CreateAdCreativeForm';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { Grid } from '@material-ui/core';
import CreateCampaignForm from 'modules/Ad/Forms/CreateCampaignForm';

export default (props) => {
  const {
    match: {
      params: { network, campaign: campaignId, adgroup: adgroupId },
    },
  } = props;

  const [adgroup, setAdGroup] = useState({
    name: 'Example Adset Name',
    type: 'conversions',
    status: 'active',
    campaign_id: 23845574488410561,
    budget: 2,
    start_date: '2020-09-24',
    billing_event: 'clicks',
    end_date: '2020-09-25',
    optimization_goal: 'link_clicks',
    bid_amount: 1,
    bid_strategy: 'cost_cap',
    targetings: {
      locations: {
        countries: ['US', 'GEO'],
        cities: [
          '2430536',
          {
            key: 3847,
            radius: 11,
            distance_unit: 'km',
          },
        ],
        regions: ['3847'],
        location_type: 'recent',
      },
      gender: 'male',
      age_max: 44,
      age_min: 32,
      parental_status: 'parents',
      targeting_expansion: 50,
      audiences: [23845468848830561],
    },
  });

  const [ad, setAd] = useState();

  const formSubmitted = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
  };

  return (
    <form onSubmit={formSubmitted}>
      <Grid container>
        <Grid item xs={8}>
          <ExpansionPanel
            expanded
            transparent
            title='Choose Campaign Config'
            subtitle='Enter Campaign Config Here'
          >
            <CreateCampaignForm networks={[network]} context={adgroup} setContext={setAdGroup} />
          </ExpansionPanel>
          <ExpansionPanel transparent title='Ad Group Config' subtitle='Set Ad Group Config'>
            <CreateAdGroupForm networks={[network]} context={adgroup} setContext={setAdGroup} />
          </ExpansionPanel>
          <ExpansionPanel title='Create Ad Config' subtitle='Set Ad Config'>
            <CreateAdCreativeForm networks={[network]} context={ad} setContext={setAd} />
          </ExpansionPanel>
        </Grid>
        <Grid item xs={4}>
          Config
        </Grid>
      </Grid>
    </form>
  );
};
