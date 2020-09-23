import { Button, Grid } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
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
  const [ad, setAd] = useState();
  const [existingCampaign, setExistingCampaign] = useState(null);
  const [existingAdGroup, setExistingAdGroup] = useState(null);
  const N = 'google';
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
      campaign: 1,
      // adgroup: 38,
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

  const createGoogleSearchAd = (callback) => {
    // setSuccessModal(true);
    console.log(existing);
    const afrom = mergeFormData(adGroupFormData, new FormData(adGroupFormRef.current));
    const cform = mergeFormData(campaignFormData, new FormData(campaignFormRef.current));
    const crform = mergeFormData(creativeFormData, new FormData(adCreativeFormRef.current));

    const campaignData = mergeFormData(cform, afrom);
    const adGroupData = mergeFormData(afrom, cform);
    const adCreativeData = crform;
    campaignData.delete('campaign_type');
    campaignData.append('campaign_type', 'search');
    let createdCampaign,
      createdAdGroup,
      createdAdCreative = null;

    if (!existing.google.campaign) {
      CampaignService.createCampaign('google', campaignData).then((campaignRes) => {
        createdCampaign = campaignRes;
        console.log('campaignRes', campaignRes);
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
    createGoogleSearchAd();
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
          <ExpansionPanel expanded transparent titleBefore='Ad Preview' title='Preview'>
            <div ref={previewRef}></div>
          </ExpansionPanel>
        </Grid>
      </Grid>
    </Fragment>
  );
};
