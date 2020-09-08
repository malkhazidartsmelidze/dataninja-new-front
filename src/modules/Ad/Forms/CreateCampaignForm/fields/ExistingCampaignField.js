import React, { useState, useEffect } from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import CampaignService from 'services/CampaignService';

const networks = [
  { name: 'Facebook', value: 'facebook' },
  { name: 'Google', value: 'google' },
];

export default () => {
  const [network, setNetwork] = useState('');
  const [campaigns, setCampaigns] = useState([]);
  const [campaign, setCampaign] = useState('');
  const [loading, setLoading] = useState(false);

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

  console.log(campaign);

  return (
    <PanelField
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SelectField
              label='Choose Network'
              fullWidth
              options={networks}
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
