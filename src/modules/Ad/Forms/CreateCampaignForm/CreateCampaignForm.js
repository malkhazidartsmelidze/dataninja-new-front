import React from 'react';
import { Grid } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import CampaignNameField from './fields/CampaignNameField';
import CampaignTypeField from './fields/CampaignTypeField';
import CampaignStatusField from './fields/CampaignStatusField';
import ExistingCampaignField from './fields/ExistingCampaignField';

export default (props) => {
  const { onExistingChoose, onNetworkChange } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <ExpansionPanel title='Existing Campaign' subTitle='Choose Existing Campaign'>
          <ExistingCampaignField
            onCampaignChoose={onExistingChoose}
            onNetworkChange={onNetworkChange}
          />
        </ExpansionPanel>
        <ExpansionPanel title='Campaign Name' subTitle='Enter Campaign Name'>
          <CampaignNameField />
        </ExpansionPanel>
        <ExpansionPanel title='Campaign Objective' subTitle='Choose Campaign Objective'>
          <CampaignTypeField />
        </ExpansionPanel>
        <ExpansionPanel title='Campaign Status' subTitle='Choose Campaign Status'>
          <CampaignStatusField />
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
};
