import { Button, Grid } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { mdiAbTesting, mdiFacebook, mdiGoogle } from '@mdi/js';
import Icon from '@mdi/react';
import mergeFormData from 'common/mergeFormData';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import CreateAdCreativeForm from 'modules/Ad/Forms/CreateAdCreativeForm';
import CreateAdGroupForm from 'modules/Ad/Forms/CreateAdGroupForm';
import CreateCampaignForm from 'modules/Ad/Forms/CreateCampaignForm';
import React, { Fragment, useRef, useState } from 'react';
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

  const turnOffNetwork = (n) => {
    setNetworks((o) => {
      o.splice(o.indexOf(n), 1);
      return [...o];
    });
  };

  const turnOnNetwork = (n) => {
    setNetworks((o) => {
      if (o.indexOf(n) !== -1) return o;

      return [...o, n];
    });
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
    setSuccessModal(true);

    const adGroupFormData = new FormData(adGroupFormRef.current);
    const campaignFormData = new FormData(campaignFormRef.current);
    const adCreativeFormData = new FormData(adCreativeFormRef.current);

    const campaignData = mergeFormData(campaignFormData, adGroupFormData);
    const adGroupData = mergeFormData(adGroupFormData, campaignFormData);
    const adCreativeData = adCreativeFormData;

    let createdCampaign,
      createdAdGroup,
      createdAdCreative = null;
    // return AdGroupService.createAdGroup('google', adGroupData).then((adGroupRes) => {
    //   createdAdGroup = adGroupRes;
    //   console.log('adGroupRes', adGroupRes);
    //   // adCreativeData.append('creative_adgroup_id', createdAdGroup.id);
    // });
    setCurrentStep('google_campaign');
    CampaignService.createCampaign('google', campaignData).then((campaignRes) => {
      createdCampaign = campaignRes;
      console.log('campaignRes', campaignRes);
      adGroupData.append('adgroup_campaign_id', createdCampaign.id);

      setCurrentStep('google_adgroup');
      AdGroupService.createAdGroup('google', adGroupData).then((adGroupRes) => {
        createdAdGroup = adGroupRes;
        console.log('adGroupRes', adGroupRes);
        adCreativeData.append('creative_adgroup_id', createdAdGroup.id);

        setCurrentStep('google_ad');
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

  const handleNetworkChage = (e, newValue) => {
    setNetworks(newValue);
  };

  const generatePreview = () => {
    const adCreativeData = new FormData(adCreativeFormRef.current);
    AdCreativeService.generatePreview(adCreativeData).then((res) => {
      console.log(res);
      previewRef.current.innerHTML = res;
    });
  };

  window.turnOffNetwork = turnOffNetwork;
  window.turnOnNetwork = turnOnNetwork;

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
          <ExpansionPanel titleBefore='Ad Creative Configuration' title='Ad Creative'>
            <form ref={adCreativeFormRef}>
              <CreateAdCreativeForm adgroup={existingAdGroup} />
            </form>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={4}>
          <ExpansionPanel expanded title='Choose Network'>
            <ToggleButtonGroup value={networks} onChange={handleNetworkChage}>
              <ToggleButton value='all'>
                <Icon path={mdiAbTesting} />
                All
              </ToggleButton>
              <ToggleButton value='google'>
                <Icon path={mdiGoogle} />
                Google
              </ToggleButton>
              <ToggleButton value='facebook'>
                <Icon path={mdiFacebook} />
                Facebook
              </ToggleButton>
            </ToggleButtonGroup>
          </ExpansionPanel>
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