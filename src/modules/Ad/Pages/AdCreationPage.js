import React from 'react';
import { Grid } from '@material-ui/core';
import { ChooseNetworkField, CampaignNameField, AdTypeField } from './components/AdFields';
import BiddingInputs from './components/BidInputs/BidInputs';
import BudgetInputs from './components/BudgetInputs/BudgetInputs';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';

export default () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {steps.map((step) => (
          <ExpansionPanel
            title={step.title}
            subTitle={step.subTitle}
            titleWhenOpen={step.titleWhenOpen}
            subTitleWhenOpen={step.subTitleWhenOpen}
          >
            <step.component />
          </ExpansionPanel>
        ))}
      </Grid>
    </Grid>
  );
};

const steps = [
  {
    component: ChooseNetworkField,
    title: 'Choose Networks',
    titleWhenOpen: 'Check Networks',
    subTitle: 'Select Networks where you want to create ads',
    subTitleWhenOpen: 'Choose From facebook and google',
    name: 'networks',
  },
  {
    component: AdTypeField,
    title: 'Select Ad Type',
    subTitle: 'Choose Ad types',
    name: 'ad_types',
  },
  {
    component: CampaignNameField,
    title: 'Campaign Name',
    subTitle: 'Choose Campaign Name',
    name: 'campaign_name',
  },
  {
    component: BiddingInputs,
    title: 'Bidding Options',
    subTitle: 'Choose Bidding Options for each networks',
    name: 'bidding_options',
  },
  {
    component: BudgetInputs,
    title: 'Budgets',
    subTitle: 'Enter Campaign Budgets Here',
    name: 'budget_options',
  },
];
