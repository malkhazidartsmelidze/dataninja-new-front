import { Button, Grid } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import CreativeDisplayLinkField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeDisplayLinkField';
import CreativeFacebookImageField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeFacebookImageField';
import CreativeHeadlinesField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeHeadlinesField';
import CreativeLongHeadlineField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeLongHeadlineField';
import CreativeNameField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeNameField';
import CreativePrimaryTextField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativePrimaryTextField';
import FacebookPageField from 'modules/Ad/Forms/CreateAdCreativeForm/components/FacebookPageField';
import CreateAdGroupForm from 'modules/Ad/Forms/CreateAdGroupForm';
import CreateCampaignForm from 'modules/Ad/Forms/CreateCampaignForm';
import React, { useRef, useState } from 'react';
import AdGroupService from 'services/AdGroupService';
import CampaignService from 'services/CampaignService';

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
  const campaignFormRef = useRef();
  const adGroupFormRef = useRef();

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

  const createCampaign = (data) => {
    CampaignService.createCampaign('facebook', data).then((res) => {
      console.log(res);
    });
  };

  const createAdGroup = (data) => {
    AdGroupService.createAdGroup('facebook', data).then((res) => {
      console.log(res);
    });
  };

  const createAd = () => {
    // const campaignData = new FormData(campaignFormRef.current);
    // createCampaign(campaignData);

    const adgroupData = new FormData(adGroupFormRef.current);
    createAdGroup(adgroupData);
  };

  return (
    <Grid container>
      <Grid item xs={9}>
        <Button variant='contained' onClick={createAd}>
          Submit
        </Button>
        <ExpansionPanel transparent titleBefore='Campaign Configuration' title='Campaign'>
          <form ref={campaignFormRef}>
            <CreateCampaignForm
              onExistingChoose={existingCampaignChoosed}
              onNetworkChange={onNetworkChange}
            />
          </form>
        </ExpansionPanel>
        <ExpansionPanel expanded transparent titleBefore='Adset Configuration' title='Adset'>
          <form ref={adGroupFormRef}>
            <CreateAdGroupForm campaign={existingCampaign} />
          </form>
        </ExpansionPanel>
        <ExpansionPanel titleBefore='Ad Creative Configuration' title='Ad Creative'>
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
