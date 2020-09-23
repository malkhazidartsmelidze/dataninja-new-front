import React, { useState, useEffect } from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import CampaignService from 'services/CampaignService';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default (props) => {
  const { type } = useCreateAd();
  const [campaigns, setCampaigns] = useState([]);
  const [campaign, setCampaign] = useState('');
  const [loading, setLoading] = useState(false);
  const [network, setNetwork] = useState('');
  const [networks, setNetworks] = useState({
    facebook: { name: 'Facebook', value: 'facebook', diabled: true },
    google: { name: 'Google', value: 'google' },
  });

  useEffect(() => {
    if (!network) return;

    setLoading(true);
    setCampaigns([]);
    CampaignService.getCampaigns(network)
      .then((data) => {
        setCampaigns(data.map((c) => ({ name: c.name, value: c.id })));
      })
      .then(() => setLoading(false));
  }, [network]);

  useEffect(() => {
    if (!campaign) return;
    props.onCampaignChoose && props.onCampaignChoose(campaign);
    props.onNetworkChange && props.onNetworkChange(network);
  }, [campaign]);

  useEffect(() => {
    console.log(type);
    if (type === 'search') {
      setNetworks((o) => {
        o.facebook.disabled = true;
        return { ...o };
      });
      setNetwork('google');
    }
  }, [type]);

  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SelectField
              label='Choose Network'
              fullWidth
              options={Object.values(networks)}
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectField
              label='Choose Campaign'
              fullWidth
              disabled={loading}
              options={campaigns}
              onChange={(e) => setCampaign(e.target.value)}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
