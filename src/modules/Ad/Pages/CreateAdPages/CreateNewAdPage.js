import { Button, Grid } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import CreateAdCreativeForm from 'modules/Ad/Forms/CreateAdCreativeForm';
import CreativeDisplayLinkField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeDisplayLinkField';
import CreativeFacebookImageField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeFacebookImageField';
import CreativeHeadlinesField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeHeadlinesField';
import CreativeLongHeadlineField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeLongHeadlineField';
import CreativeNameField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativeNameField';
import CreativePrimaryTextField from 'modules/Ad/Forms/CreateAdCreativeForm/components/CreativePrimaryTextField';
import FacebookPageField from 'modules/Ad/Forms/CreateAdCreativeForm/components/FacebookPageField';
import CreateAdGroupForm from 'modules/Ad/Forms/CreateAdGroupForm';
import CreateCampaignForm from 'modules/Ad/Forms/CreateCampaignForm';
import React, { useEffect, useRef, useState } from 'react';
import AdCreativeService from 'services/AdCreativeService';
import AdGroupService from 'services/AdGroupService';
import CampaignService from 'services/CampaignService';
import NetworkSuccesses from './components/NetworkSuccesses';

export default (props) => {
  const [ad, setAd] = useState();
  const [existingCampaign, setExistingCampaign] = useState(null);
  const [existingAdGroup, setExistingAdGroup] = useState(null);
  const [networks, setNetworks] = useState(['facebook', 'google']);
  const campaignFormRef = useRef();
  const adGroupFormRef = useRef();
  const adCreativeFormRef = useRef();
  const [currentStep, setCurrentStep] = useState('');
  const [existing, setExisting] = useState({
    google: {
      campaign: null,
      adgroup: null,
      ad: null,
    },
    facebook: {
      campaign: null,
      adgroup: null,
      ad: null,
    },
  });

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

  const createAdCreative = (data) => {
    AdCreativeService.createAdCreative('facebook', data).then((res) => {
      console.log(res);
    });
  };

  const createAd = () => {
    // const campaignData = new FormData(campaignFormRef.current);
    // createCampaign(campaignData);

    // const adgroupData = new FormData(adGroupFormRef.current);
    // createAdGroup(adgroupData);

    const adCreativeData = new FormData(adCreativeFormRef.current);
    createAdCreative(adCreativeData);
  };

  useEffect(() => {
    timeOutSteps(setExisting, setCurrentStep);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button variant='contained' onClick={createAd}>
          Submit
        </Button>
        <NetworkSuccesses open={true} created={existing} currentStep={currentStep} />
        <ExpansionPanel expanded titleBefore='Ad Creative Configuration' title='Ad Creative'>
          <form ref={adCreativeFormRef}>
            <CreateAdCreativeForm adgroup={existingAdGroup} />
          </form>
        </ExpansionPanel>
        <ExpansionPanel transparent titleBefore='Adset Configuration' title='Adset'>
          <form ref={adGroupFormRef}>
            <CreateAdGroupForm campaign={existingCampaign} />
          </form>
        </ExpansionPanel>
        <ExpansionPanel transparent titleBefore='Campaign Configuration' title='Campaign'>
          <form ref={campaignFormRef}>
            <CreateCampaignForm
              onExistingChoose={existingCampaignChoosed}
              onNetworkChange={onNetworkChange}
            />
          </form>
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
};

const timeOutSteps = (setExisting, setCurrentStep) => {
  setTimeout(() => {
    setTimeout(() => {
      setCurrentStep('facebook_campaign');
      setExisting((old) => {
        old.facebook.campaign = true;
        return { ...old };
      });
    }, 1500);

    setTimeout(() => {
      setCurrentStep('facebook_adgroup');
      setExisting((old) => {
        old.facebook.adgroup = true;
        return { ...old };
      });
    }, 2500);

    setTimeout(() => {
      setCurrentStep('facebook_ad');
      setExisting((old) => {
        old.facebook.ad = true;
        return { ...old };
      });
    }, 4000);

    setTimeout(() => {
      setCurrentStep('google_campaign');
      setExisting((old) => {
        old.google.campaign = true;
        return { ...old };
      });
    }, 5000);

    setTimeout(() => {
      setCurrentStep('google_adgroup');
      setExisting((old) => {
        old.google.adgroup = true;
        return { ...old };
      });
    }, 6500);

    setTimeout(() => {
      setCurrentStep('google_ad');
      setExisting((old) => {
        old.google.ad = true;
        return { ...old };
      });
    }, 8000);
  }, 1000);
};
