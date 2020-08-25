import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ChooseAdType from './components/ChooseAdType';
import ChooseNetworks from './components/ChooseNetworks';
import CampaignNameInput from './components/CampaignNameInput';
import BiddingInputs from './components/BidInputs/BidInputs';
import BudgetInputs from './components/BudgetInputs/BudgetInputs';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';

export default () => {
  const classes = useStyles();
  const [activeAccordions, setActiveAccordions] = useState(['networks', 'ad_type', 'ad_create']);

  const handleAccordionChange = (name) => {
    setActiveAccordions((old) => {
      if (old.indexOf(name) > -1) {
        old.splice(old.indexOf(name), 1);
      } else {
        old.push(name);
      }
      return [...old];
    });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        {steps.map((step) => (
          <ExpansionPanel text={step.title} subText={step.subTitle}>
            <step.component />
          </ExpansionPanel>
        ))}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionDetails: {
    display: 'block',
  },
}));

const steps = [
  {
    component: ChooseNetworks,
    title: 'Choose Networks',
    subTitle: 'Select Networks where you want to create ads',
    name: 'networks',
  },
  {
    component: ChooseAdType,
    title: 'Select Ad Type',
    subTitle: 'Choose Ad types',
    name: 'ad_types',
  },
  {
    component: CampaignNameInput,
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
