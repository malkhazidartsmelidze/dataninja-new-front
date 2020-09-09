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
import CreativeNameField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeNameField';
import FacebookPageField from 'modules/Ad/Forms/CreateAdCreativeForm/components/FacebookPageField';
import CreativeFacebookImageField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeFacebookImageField';
import CreativeHeadlinesField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeHeadlinesField';
import CreativeLongHeadlineField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeLongHeadlineField';
import CreativeDisplayLinkField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeDisplayLinkField';
import CreativePrimaryTextField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativePrimaryTextField';
import ChooseExistingAdgroupField from 'modules/Ad/Forms/CreateAdGroupForm/ChooseExistingAdgroupField';

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
  const [existingCampaign, setExistingCampaign] = useState(null);
  const [networks, setNetworks] = useState(['facebook', 'google']);

  const formSubmitted = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
  };

  const isNetworkEnabled = (n) => {
    return networks.indexOf(n) !== -1;
  };

  const existingCampaignChoosed = (c) => {
    setExistingCampaign(c);
  };

  const onNetworkChange = (n) => {
    setNetworks([n]);
  };

  return (
    <form onSubmit={formSubmitted}>
      <Grid container>
        <Grid item xs={9}>
          <ExpansionPanel
            transparent
            title='Choose Campaign Config'
            subtitle='Enter Campaign Config Here'
          >
            <Grid container>
              <Grid item xs={12}>
                <ExpansionPanel title='Existing Campaign' subTitle='Choose Existing Campaign'>
                  <ExistingCampaignField
                    onCampaignChoose={existingCampaignChoosed}
                    onNetworkChange={onNetworkChange}
                  />
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
                {existingCampaign && (
                  <ExpansionPanel title='Choose Existing Adset' subTitle=''>
                    <ChooseExistingAdgroupField />
                  </ExpansionPanel>
                )}
                <ExpansionPanel title='Enter Adset Name' subTitle='Adset Name Field'>
                  <AdGroupNameField />
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
                  <GenderTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Audience Age' subTitle='Choose Ages'>
                  <AgeTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Languages' subTitle='Enter Languages'>
                  <LanguageTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Locations' subTitle='Enter Locations in both networks'>
                  <LocationTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Location Type' subTitle='Enter Location Type'>
                  <LocationTypeTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Income Targeting' subTitle='Enter HouseHold Income'>
                  <HouseHoldIncomeTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Parental Status' subTitle='Select Parental Status'>
                  <ParentalStatusTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Device Targetings' subTitle='Select Devices'>
                  <DeviceTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Ad Rotation' subTitle='Choose Ad Rotation Type'>
                  <AdRotationTargetingField />
                </ExpansionPanel>
                <ExpansionPanel title='Targeting Expansion' subTitle='Choose Targeting Expansion'>
                  <TargetingExpansionTargetingField />
                </ExpansionPanel>
              </Grid>
            </Grid>
          </ExpansionPanel>
          <ExpansionPanel expanded title='Create Ad Config' subtitle='Set Ad Config'>
            {/* <CreateAdCreativeForm networks={[network]} context={ad} setContext={setAd} /> */}
            <Grid container>
              <Grid item xs={12}>
                <ExpansionPanel title='Creative Name' subTitle='Enter Creative Name'>
                  <CreativeNameField />
                </ExpansionPanel>
                <ExpansionPanel title='Choose Facebook Page' subTitle='Choose Facebook Page'>
                  <FacebookPageField />
                </ExpansionPanel>
                <ExpansionPanel title='Choose Facebook Image' subTitle='Choose Facebook Image'>
                  <CreativeFacebookImageField />
                </ExpansionPanel>
                <ExpansionPanel
                  title='Choose Facebook Headlines'
                  subTitle='Choose Facebook Headlines'
                >
                  <CreativeHeadlinesField />
                </ExpansionPanel>
                <ExpansionPanel
                  title='Choose Facebook Description'
                  subTitle='Choose Facebook Description'
                >
                  <CreativeLongHeadlineField />
                </ExpansionPanel>
                <ExpansionPanel title='Primary Text' subTitle='Choose Facebook Primary Text'>
                  <CreativePrimaryTextField />
                </ExpansionPanel>
                <ExpansionPanel title='Display Link' subTitle='Choose Facebook Display Link'>
                  <CreativeDisplayLinkField />
                </ExpansionPanel>
              </Grid>
            </Grid>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={3}>
          Config
        </Grid>
      </Grid>
    </form>
  );
};
