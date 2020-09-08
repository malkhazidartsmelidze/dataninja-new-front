import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import CampaignNameField from './fields/CampaignNameField';
import CampaignObjectiveField from './fields/CampaignObjectiveField';
import CampaignStatusField from './fields/CampaignStatusField';
import ExistingCampaignField from './fields/ExistingCampaignField';

export default (props) => {
  const { context, setContext, networks } = props;
  const [bidType, setBidType] = useState('automatic');

  const isNetworkEnabled = (n) => {
    return networks.indexOf(n) !== -1;
  };

  const handleBidTypeChange = (e) => {
    setBidType(e.target.value);
  };

  return (
    <form>
      <Grid container>
        <Grid item xs={12}>
          <ExpansionPanel title='Existing Campaign' subTitle='Choose Existing Campaign'>
            <ExistingCampaignField />
          </ExpansionPanel>
          <ExpansionPanel title='Campaign Name' subTitle='Enter Campaign Name'>
            <CampaignNameField />
          </ExpansionPanel>
          <ExpansionPanel title='Campaign Objective' subTitle='Choose Campaign Objective'>
            <CampaignObjectiveField />
          </ExpansionPanel>
          <ExpansionPanel title='Campaign Status' subTitle='Choose Campaign Status'>
            <CampaignStatusField />
          </ExpansionPanel>
        </Grid>
      </Grid>
    </form>
  );
};
