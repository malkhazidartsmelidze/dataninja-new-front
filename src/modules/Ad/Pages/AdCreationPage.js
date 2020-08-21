import React from 'react';
import { Grid } from '@material-ui/core';
import {
  ChooseNetworkField,
  CampaignNameField,
  AdTypeField,
  BidOptimizationField,
  BidTypeFields,
  BidOptionFields,
  BudgetField,
} from './components/AdFields';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';

export default () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {steps.map((step) => (
          <ExpansionPanel
            key={step.title}
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
  },
  {
    component: AdTypeField,
    title: 'Select Ad Type',
    subTitle: 'Choose Ad types',
  },
  {
    component: CampaignNameField,
    title: 'Campaign Name',
    subTitle: 'Choose Campaign Name',
  },
  {
    component: BidOptimizationField,
    title: 'Bid Optimization',
    subTitle: 'Choose Bidding Options for each networks',
  },
  {
    component: BidTypeFields,
    title: 'Bid Types',
    subTitle: 'Choose Bid Types',
  },
  {
    component: BidOptionFields,
    title: 'Additional Bid Options',
    subTitle: 'Google And Facebook bid Option Fields',
  },
  {
    component: BudgetField,
    title: 'Budgets',
    subTitle: 'Enter Campaign Budgets Here',
  },
];
