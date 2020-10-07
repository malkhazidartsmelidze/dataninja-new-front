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

  const campaignFormSubmitted = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <Grid container>
      <Grid item xs={9}>
        <ExpansionPanel transparent titleBefore='Campaign Configuration' title='Campaign'>
          <CreateCampaignForm
            onExistingChoose={existingCampaignChoosed}
            onNetworkChange={onNetworkChange}
            onSubmit={campaignFormSubmitted}
          />
        </ExpansionPanel>
        <ExpansionPanel transparent titleBefore='Adset Configuration' title='Adset'>
          <CreateAdGroupForm campaign={existingCampaign} />
        </ExpansionPanel>
        <ExpansionPanel expanded titleBefore='Ad Creative Configuration' title='Ad Creative'>
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
  );
};
