import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
  const campaign = props.campaign || null;
  const [loading, setLoading] = useState(false);
  const [adgroup, setAdGroup] = useState('');

  useEffect(() => {
    console.log(campaign);
    if (!campaign) return;
    ReactDOM.unstable_batchedUpdates(() => {
      setAdGroup('');
      setLoading(true);
      setAdGroups([]);
    });
    AdGroupService.getCampaignAdGroups(network, campaign)
      .then((data) => {
        console.log(data);
        setAdGroups(data.map((c) => ({ name: c.name, value: c.id })));
      })
      .then(() => setLoading(false));
  }, [network, campaign]);

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
              onChange={(e) => setAdGroup(e.target.value)}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
