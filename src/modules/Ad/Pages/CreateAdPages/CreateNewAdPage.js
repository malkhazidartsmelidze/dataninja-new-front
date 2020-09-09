import React, { useState } from 'react';
import CreateAdGroupForm from 'modules/Ad/Forms/CreateAdGroupForm';
import CreateAdCreativeForm from 'modules/Ad/Forms/CreateAdCreativeForm';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { Grid } from '@material-ui/core';
import CreateCampaignForm from 'modules/Ad/Forms/CreateCampaignForm';
import ExistingCampaignField from 'modules/Ad/Forms/CreateCampaignForm/fields/ExistingCampaignField';
import CampaignNameField from 'modules/Ad/Forms/CreateCampaignForm/fields/CampaignNameField';
import CampaignObjectiveField from 'modules/Ad/Forms/CreateCampaignForm/fields/CampaignObjectiveField';
import CampaignStatusField from 'modules/Ad/Forms/CreateCampaignForm/fields/CampaignStatusField';
import AdGroupDatesField from 'modules/Ad/Forms/CreateAdGroupForm/AdGroupDatesField';
import OptimizationGoal from 'modules/Ad/Forms/CreateAdGroupForm/OptimizationGoal';
import FacebookAdGroupBidType from 'modules/Ad/Forms/CreateAdGroupForm/FacebookAdGroupBidType';
import FacebookBidValue from 'modules/Ad/Forms/CreateAdGroupForm/FacebookBidValue';
import GenderTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/GenderTargetingField';
import AgeTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/AgeTargetingField';
import LocationTypeTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/LocationTypeTargetingField';
import LanguageTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/LanguageTargetingField';
import HouseHoldIncomeTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/HouseHoldIncomeTargetingField';
import ParentalStatusTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/ParentalStatusTargetingField';
import DeviceTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/DeviceTargetingField';
import AdRotationTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/AdRotationTargetingField';
import TargetingExpansionTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/TargetingExpansionTargetingField';
import LocationTargetingField from 'modules/Ad/Forms/CreateAdGroupForm/TargetingFields/LocationTargetingField';
import ChooseAudienceField from 'modules/Ad/Forms/CreateAdGroupForm/ChooseAudienceField';
import AdGroupNameField from 'modules/Ad/Forms/CreateAdGroupForm/AdGroupNameField';

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
            transparent
            title='Choose Campaign Config'
            subtitle='Enter Campaign Config Here'
          >
            <Grid container>
              <Grid item xs={12}>
                <ExpansionPanel title='Existing Campaign' subTitle='Choose Existing Campaign'>
                  <ExistingCampaignField />
                </ExpansionPanel>
                <ExpansionPanel title='Campaign Name' subTitle='Enter Campaign Name'>
                  <CampaignNameField />
                </ExpansionPanel>
                <ExpansionPanel title='Campaign Objective' subTitle='Choose Campaign Objective'>
                  <CampaignObjectiveField />
                </ExpansionPanel>
                <ExpansionPanel title='Campaign Status' subTitle='Choose Campaign Status'>
                  <CampaignStatusField />
                </ExpansionPanel>
              </Grid>
            </Grid>
          </ExpansionPanel>
          <ExpansionPanel
            expanded
            transparent
            title='Ad Group Config'
            subtitle='Set Ad Group Config'
          >
            {/* <CreateAdGroupForm networks={[network]} context={adgroup} setContext={setAdGroup} /> */}
            <Grid container>
              <Grid item>
                <ExpansionPanel title='Enter Adset Name' subTitle='Adset Name Field'>
                  <AdGroupNameField name='name' onChange={(e) => console.log(e.target.value)} />
                </ExpansionPanel>
                <ExpansionPanel
                  title='Choose Audience'
                  subTitle='Choose Existing Audince Or Creat New One'
                >
                  <ChooseAudienceField />
                </ExpansionPanel>
                <ExpansionPanel title='Enter Dates' subTitle='Start And End Dates'>
                  <AdGroupDatesField />
                </ExpansionPanel>
                <ExpansionPanel title='Optimize Bid To' subTitle='Enter Bid Optimization'>
                  <OptimizationGoal />
                </ExpansionPanel>
                <ExpansionPanel title='Bid Options' subTitle='Enter Bid Options'>
                  <FacebookAdGroupBidType />
                </ExpansionPanel>
                <ExpansionPanel title='Bid Value' subTitle='Enter Bid Value'>
                  <FacebookBidValue />
                </ExpansionPanel>
                <ExpansionPanel
                  title='Gender'
                  subTitle='Choose Gender'
                  titleBefore='Targeting Options'
                  subTitleBefore='Targeting Options'
                >
                  <GenderTargetingField name='targetings[gender]' style={{ width: 300 }} />
                </ExpansionPanel>
                <ExpansionPanel title='Audience Age' subTitle='Choose Ages'>
                  <AgeTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Languages' subTitle='Enter Languages'>
                  <LanguageTargetingField name='targetings[locations]' />
                </ExpansionPanel>
                <ExpansionPanel title='Locations' subTitle='Enter Locations in both networks'>
                  <LocationTargetingField name='targetings[locations]' />
                </ExpansionPanel>
                <ExpansionPanel title='Location Type' subTitle='Enter Location Type'>
                  <LocationTypeTargetingField name='targetings[location_type]' />
                </ExpansionPanel>
                <ExpansionPanel title='Income Targeting' subTitle='Enter HouseHold Income'>
                  <HouseHoldIncomeTargetingField name='targetings[household_income]' />
                </ExpansionPanel>
                <ExpansionPanel title='Parental Status' subTitle='Select Parental Status'>
                  <ParentalStatusTargetingField name='targetings[parental_status]' />
                </ExpansionPanel>
                <ExpansionPanel title='Device Targetings' subTitle='Select Devices'>
                  <DeviceTargetingField name='targetings[devices]' />
                </ExpansionPanel>
                <ExpansionPanel title='Ad Rotation' subTitle='Choose Ad Rotation Type'>
                  <AdRotationTargetingField name='targetings[ad_rotation]' />
                </ExpansionPanel>
                <ExpansionPanel title='Targeting Expansion' subTitle='Choose Targeting Expansion'>
                  <TargetingExpansionTargetingField name='targetings[targeting_expansion]' />
                </ExpansionPanel>
              </Grid>
            </Grid>
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
