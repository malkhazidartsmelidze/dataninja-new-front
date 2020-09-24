import { Button, Grid } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { mdiAbTesting, mdiFacebook, mdiGoogle } from '@mdi/js';
import Icon from '@mdi/react';
import mergeFormData from 'common/mergeFormData';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { SelectField } from 'components/Fields';
import CreateAdCreativeForm from 'modules/Ad/Forms/CreateAdCreativeForm';
import CreateAdGroupForm from 'modules/Ad/Forms/CreateAdGroupForm';
import CreateCampaignForm from 'modules/Ad/Forms/CreateCampaignForm';
import useCreateAd from 'modules/Ad/store/CreateAdContext';
import React, { Fragment, useRef, useState } from 'react';
import AdCreativeService from 'services/AdCreativeService';
import AdGroupService from 'services/AdGroupService';
import CampaignService from 'services/CampaignService';
import NetworkSuccesses from './components/NetworkSuccesses';

export default (props) => {
  const { state, isSearch } = useCreateAd();
  const [existingCampaign, setExistingCampaign] = useState(null);
  const [existingAdGroup, setExistingAdGroup] = useState(null);
  const [N, setN] = useState('google');
  const {
    networks,
    setNetworks,
    campaignFormData,
    adGroupFormData,
    creativeFormData,
  } = useCreateAd();
  const campaignFormRef = useRef();
  const adGroupFormRef = useRef();
  const adCreativeFormRef = useRef();
  const previewRef = useRef();
  const [currentStep, setCurrentStep] = useState('');
  const [successModal, setSuccessModal] = useState(false);
  const [existing, setExisting] = useState({
    google: {
      campaign: null,
      campaign: 57,
      adgroup: 39,
      ad: null,
    },
    facebook: {
      campaign: 868,
      adgroup: 6857,
      ad: null,
    },
  });

  const existingCampaignChoosed = (c) => {
    setExistingCampaign(c);
  };

  const onNetworkChange = (n) => {
    setNetworks([n]);
  };

  const createFacebookAd = (callback) => {
    setSuccessModal(true);
    console.log(existing);
    const afrom = mergeFormData(new FormData(adGroupFormRef.current), adGroupFormData);
    const cform = mergeFormData(new FormData(campaignFormRef.current), campaignFormData);
    const crform = mergeFormData(new FormData(adCreativeFormRef.current), creativeFormData);

    const campaignData = mergeFormData(cform, afrom);
    const adGroupData = mergeFormData(afrom, cform);
    const adCreativeData = crform;

    let createdCampaign,
      createdAdGroup,
      createdAdCreative = null;

    if (!existing.facebook.campaign) {
      CampaignService.createCampaign('facebook', campaignData).then((campaignRes) => {
        createdCampaign = campaignRes;
        console.log('campaignRes', campaignRes);
        adGroupData.append('adgroup_facebook_campaign_id', createdCampaign.id);
        setExisting((o) => {
          o.facebook.campaign = createdCampaign.id;
          return { ...o };
        });

        AdGroupService.createAdGroup('facebook', adGroupData).then((adGroupRes) => {
          createdAdGroup = adGroupRes;
          console.log('adGroupRes', adGroupRes);
          adCreativeData.append('creative_facebook_adset_id', createdAdGroup.id);
          setExisting((o) => {
            o.facebook.adgroup = createdAdGroup.id;
            return { ...o };
          });

          AdCreativeService.createAdCreative('facebook', adCreativeData).then((adCreativeRes) => {
            createdAdCreative = adCreativeRes;
            console.log('adCreativeRes', adCreativeRes);
            setExisting((o) => {
              o.facebook.ad = adCreativeRes.id;
              return { ...o };
            });
          });
        });
      });
    } else if (!existing.facebook.adgroup) {
      adGroupData.append('adgroup_facebook_campaign_id', existing.facebook.campaign);
      AdGroupService.createAdGroup('facebook', adGroupData).then((adGroupRes) => {
        createdAdGroup = adGroupRes;
        console.log('adGroupRes', adGroupRes);
        adCreativeData.append('creative_facebook_adset_id', createdAdGroup.id);
        setExisting((o) => {
          o.facebook.adgroup = createdAdGroup.id;
          return { ...o };
        });

        AdCreativeService.createAdCreative('facebook', adCreativeData).then((adCreativeRes) => {
          createdAdCreative = adCreativeRes;
          console.log('adCreativeRes', adCreativeRes);
          setExisting((o) => {
            o.facebook.ad = adCreativeRes.id;
            return { ...o };
          });
        });
      });
    } else if (!existing.facebook.ad) {
      adCreativeData.append('creative_facebook_adset_id', existing.facebook.adgroup);

      AdCreativeService.createAdCreative('facebook', adCreativeData).then((adCreativeRes) => {
        createdAdCreative = adCreativeRes;
        console.log('adCreativeRes', adCreativeRes);
        setExisting((o) => {
          o.facebook.ad = adCreativeRes.id;
          return { ...o };
        });
      });
    }
    callback && callback();
  };

  const createGoogleAd = (callback) => {
    setSuccessModal(true);

    const afrom = mergeFormData(new FormData(adGroupFormRef.current), adGroupFormData);
    const cform = mergeFormData(new FormData(campaignFormRef.current), campaignFormData);
    const crform = mergeFormData(new FormData(adCreativeFormRef.current), creativeFormData);

    const campaignData = mergeFormData(cform, afrom);
    const adGroupData = mergeFormData(afrom, cform);
    const adCreativeData = crform;

    let createdCampaign,
      createdAdGroup,
      createdAdCreative = null;

    if (!existing.google.campaign) {
      CampaignService.createCampaign('google', campaignData).then((campaignRes) => {
        createdCampaign = campaignRes;
        console.log(createdCampaign);
        adGroupData.append('adgroup_google_campaign_id', createdCampaign.id);
        setExisting((o) => {
          o.google.campaign = createdCampaign.id;
          return { ...o };
        });

        AdGroupService.createAdGroup('google', adGroupData).then((adGroupRes) => {
          createdAdGroup = adGroupRes;
          console.log('adGroupRes', adGroupRes);
          adCreativeData.append('creative_google_adset_id', createdAdGroup.id);
          setExisting((o) => {
            o.google.adgroup = createdAdGroup.id;
            return { ...o };
          });

          AdCreativeService.createAdCreative('google', adCreativeData).then((adCreativeRes) => {
            createdAdCreative = adCreativeRes;
            console.log('adCreativeRes', adCreativeRes);
            setExisting((o) => {
              o.google.ad = adCreativeRes.id;
              return { ...o };
            });
          });
        });
      });
    } else if (!existing.google.adgroup) {
      adGroupData.append('adgroup_google_campaign_id', existing.google.campaign);
      AdGroupService.createAdGroup('google', adGroupData).then((adGroupRes) => {
        createdAdGroup = adGroupRes;
        console.log('adGroupRes', adGroupRes);
        adCreativeData.append('creative_google_adset_id', createdAdGroup.id);
        setExisting((o) => {
          o.google.adgroup = createdAdGroup.id;
          return { ...o };
        });

        AdCreativeService.createAdCreative('google', adCreativeData).then((adCreativeRes) => {
          createdAdCreative = adCreativeRes;
          console.log('adCreativeRes', adCreativeRes);
          setExisting((o) => {
            o.google.ad = adCreativeRes.id;
            return { ...o };
          });
        });
      });
    } else if (!existing.google.ad) {
      adCreativeData.append('creative_google_adset_id', existing.google.adgroup);

      AdCreativeService.createAdCreative('google', adCreativeData).then((adCreativeRes) => {
        createdAdCreative = adCreativeRes;
        console.log('adCreativeRes', adCreativeRes);
        setExisting((o) => {
          o.google.ad = adCreativeRes.id;
          return { ...o };
        });
      });
    }
    callback && callback();
  };

  const createAd = () => {
    createGoogleAd();
    // createFacebookAd(() => {});
    /* () => {
    } */
    // if (N === 'facebook') {
    //   return createFacebookAd();
    // } else if (N === 'google') {
    //   return ;
    // }
  };

  const handleNetworkChage = (e, newValue) => {
    if (newValue.indexOf('facebook') >= -1 && isSearch) {
      return alert("Can't run search on facebook");
    }
    setNetworks(newValue);
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
      <SelectField
        style={{ width: 200 }}
        options={[
          { name: 'Facebook', value: 'facebook' },
          { name: 'Google', value: 'google' },
        ]}
        value={N}
        onChange={(e) => setN(e.target.value)}
      />
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
          <ExpansionPanel expanded transparent titleBefore='Adset Configuration' title='Adset'>
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
