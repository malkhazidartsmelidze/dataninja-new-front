import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { mdiFacebook, mdiGoogle } from '@mdi/js';
import Icon from '@mdi/react';
import { makeStyles, Typography, Button, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { SelectField } from 'components/Fields';
import CampaignService from 'services/CampaignService';
import SyncCampaignButton from 'modules/Ad/components/SyncCampaignButton';
import SyncAdGroupButton from 'modules/Ad/components/SyncAdGroupButton';
import AdGroupService from 'services/AdGroupService';

export default (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [network, setNetwork] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [adgroups, setAdGroups] = useState([]);
  const [campaign, setCampaign] = useState(null);
  const [adgroup, setAdGroup] = useState(null);

  const handleNetworkChange = (_e, newNetwork) => {
    setNetwork(newNetwork);
  };

  const handleCampaignChange = (e) => {
    setCampaign(e.target.value);
  };

  const handleAdGroupChange = (e) => {
    setAdGroup(e.target.value);
  };

  const startAdCreation = () => {
    const url = `/app/ad/existing/${network}/${campaign}/${adgroup ? adgroup : ''}`;
    history.push(url);
  };

  const fetchCampaigns = () => {
    if (!network) return;
    CampaignService.getCampaigns(network).then((data) => {
      if (!Array.isArray(data)) return;
      setCampaigns(
        data.map((camp) => {
          return { name: camp.name, value: camp.id };
        })
      );
    });
  };

  const fetchAdGroups = () => {
    if (!network || !campaign) return;
    AdGroupService.getCampaignAdGroups(network, campaign).then((data) => {
      if (!Array.isArray(data)) return;
      setAdGroups(
        data.map((camp) => {
          return { name: camp.name, value: camp.id };
        })
      );
    });
  };

  useEffect(() => {
    setCampaigns([]);
    setAdGroups([]);
    fetchCampaigns();
  }, [network]);

  useEffect(() => {
    if (!campaign) return;
    fetchAdGroups();
  }, [campaign]);

  return (
    <Grid container spacing={2} direction='column'>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <SelectField
          fullWidth
          label='Choose Campaign'
          options={campaigns}
          value={campaign}
          onChange={handleCampaignChange}
          InputProps={{
            startAdornment: (
              <SyncCampaignButton network={network} onDone={() => fetchCampaigns()} />
            ),
          }}
        />
      </Grid>
      <Grid item className={classes.adGroupSelectGrid}>
        <SelectField
          value={adgroup}
          disabled={!campaign > 0}
          fullWidth
          label='Choose Adgroup'
          onChange={handleAdGroupChange}
          options={adgroups}
          InputProps={{
            startAdornment: <SyncAdGroupButton network={network} onDone={() => fetchAdGroups()} />,
          }}
        />
      </Grid>
      <Grid item>
        <Button variant='contained' color='primary' onClick={startAdCreation}>
          Start Creation
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: '#000',
  },
  adGroupSelectGrid: {
    paddingLeft: '32px !important',
  },
}));
