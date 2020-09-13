import { Button, Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import mergeFormData from 'common/mergeFormData';
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
import React, { Fragment, useEffect, useRef, useState } from 'react';
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
  const previewRef = useRef();
  const [currentStep, setCurrentStep] = useState('');
  const [successModal, setSuccessModal] = useState(false);
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
    CampaignService.createCampaign('google', data).then((res) => {
      console.log(res);
    });
  };

  const createAdGroup = (data) => {
    AdGroupService.createAdGroup('google', data).then((res) => {
      console.log(res);
    });
  };

  const createAdCreative = (data) => {
    AdCreativeService.createAdCreative('google', data).then((res) => {
      console.log(res);
    });
  };

  const createGoogleAd = () => {
    const adGroupFormData = new FormData(adGroupFormRef.current);
    const campaignFormData = new FormData(campaignFormRef.current);
    const adCreativeFormData = new FormData(adCreativeFormRef.current);

    const campaignData = mergeFormData(campaignFormData, adGroupFormData);
    const adGroupData = mergeFormData(adGroupFormData, campaignFormData);
    const adCreativeData = adCreativeFormData;

    let createdCampaign,
      createdAdGroup,
      createdAdCreative = null;

    CampaignService.createCampaign('google', campaignData).then((campaignRes) => {
      createdCampaign = campaignRes;
      console.log('campaignRes', campaignRes);

      AdGroupService.createAdGroup('google', adGroupData).then((adGroupRes) => {
        createdAdGroup = adGroupRes;
        console.log('adGroupRes', adGroupRes);

        AdCreativeService.createAdCreative('google', adCreativeData).then((adCreativeRes) => {
          createdAdCreative = adCreativeRes;
          console.log('adCreativeRes', adCreativeRes);
        });
      });
    });
  };

  const createAd = () => {
    return createGoogleAd();
    // timeOutSteps(setExisting, setCurrentStep);
    // setSuccessModal(true);
    const adgroupData = new FormData(adGroupFormRef.current);
    const adCreativeData = new FormData(adCreativeFormRef.current);
    const campaignData = mergeFormData(new FormData(campaignFormRef.current), adgroupData);
    const adGroupData = mergeFormData(adgroupData, campaignData);

    // createCampaign(campaignData);

    // createAdGroup(adgroupData);

    createAdCreative(adCreativeData);
  };

  const generatePreview = () => {
    const adCreativeData = new FormData(adCreativeFormRef.current);
    AdCreativeService.generatePreview(adCreativeData).then((res) => {
      console.log(res);
      previewRef.current.innerHTML = res;
    });
  };

  return (
    <Fragment>
      <Button variant='contained' onClick={createAd}>
        Submit
      </Button>
      <Button variant='contained' onClick={generatePreview}>
        Preview
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <NetworkSuccesses
            key={successModal}
            open={successModal}
            created={existing}
            currentStep={currentStep}
          />
          <ExpansionPanel transparent titleBefore='Campaign Configuration' title='Campaign'>
            <form ref={campaignFormRef}>
              <CreateCampaignForm
                onExistingChoose={existingCampaignChoosed}
                onNetworkChange={onNetworkChange}
              />
            </form>
          </ExpansionPanel>
          <ExpansionPanel transparent titleBefore='Adset Configuration' title='Adset'>
            <form ref={adGroupFormRef}>
              <CreateAdGroupForm
                campaign={existingCampaign}
                network={networks.length == 1 ? networks[0] : null}
              />
            </form>
          </ExpansionPanel>
          <ExpansionPanel expanded titleBefore='Ad Creative Configuration' title='Ad Creative'>
            <form ref={adCreativeFormRef}>
              <CreateAdCreativeForm adgroup={existingAdGroup} />
            </form>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={4}>
          <ExpansionPanel expanded transparent titleBefore='Ad Preview' title='Preview'>
            <div ref={previewRef}></div>
          </ExpansionPanel>
        </Grid>
      </Grid>
    </Fragment>
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

    // setTimeout(() => {
    //   setCurrentStep('google_campaign');
    //   setExisting((old) => {
    //     old.google.campaign = true;
    //     return { ...old };
    //   });
    // }, 5000);

    // setTimeout(() => {
    //   setCurrentStep('google_adgroup');
    //   setExisting((old) => {
    //     old.google.adgroup = true;
    //     return { ...old };
    //   });
    // }, 6500);

    // setTimeout(() => {
    //   setCurrentStep('google_ad');
    //   setExisting((old) => {
    //     old.google.ad = true;
    //     return { ...old };
    //   });
    // }, 8000);
  }, 1000);
};
