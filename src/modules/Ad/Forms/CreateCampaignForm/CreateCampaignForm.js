import React from 'react';
import { Grid } from '@material-ui/core';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import CampaignNameField from './fields/CampaignNameField';
import CampaignObjectiveField from './fields/CampaignObjectiveField';
import CampaignStatusField from './fields/CampaignStatusField';
import ExistingCampaignField from './fields/ExistingCampaignField';
import CampaignPartnersSwitch from './fields/CampaignPartnersSwitch';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default (props) => {
  const { onExistingChoose, onNetworkChange } = props;
  const { isSearch } = useCreateAd();

  return (
    <Grid container>
      <Grid item xs={12}>
        <ExpansionPanel title='Existing Campaign' subTitle='Choose Existing Campaign'>
          <ExistingCampaignField onCampaignChoose={onExistingChoose} />
        </ExpansionPanel>
        <ExpansionPanel title='Campaign Name' subTitle='Enter Campaign Name'>
          <CampaignNameField />
        </ExpansionPanel>
        <ExpansionPanel title='Campaign Objective' subTitle='Choose Campaign Objective'>
          <CampaignObjectiveField />
        </ExpansionPanel>
        {isSearch && (
          <ExpansionPanel title='Include Partners' subTitle='Inlcude Partners'>
            <CampaignPartnersSwitch />
          </ExpansionPanel>
        )}
        <ExpansionPanel title='Campaign Status' subTitle='Choose Campaign Status'>
          <CampaignStatusField />
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
};
