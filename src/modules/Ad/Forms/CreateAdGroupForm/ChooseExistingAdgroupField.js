import React, { useState, useEffect } from 'react';
import { TextField, Grid } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import AdGroupService from 'services/AdGroupService';

const networks = [
  { name: 'Facebook', value: 'facebook' },
  { name: 'Google', value: 'google' },
];

export default (props) => {
  const [network, setNetwork] = useState(props.network || 'facebook');
  const [adGroups, setAdGroups] = useState([]);
  const [campaign, setCampaign] = useState(props.campaign || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!campaign) return;

    setLoading(true);
    setAdGroups([]);
    AdGroupService.getCampaignAdGroups(network)
      .then((data) => {
        setAdGroups(data.map((c) => ({ name: c.name, value: c.id })));
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
              label='Choose AdGroup'
              fullWidth
              disabled={loading}
              options={adGroups}
              onChange={(e) => setCampaign(e.target.value)}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
