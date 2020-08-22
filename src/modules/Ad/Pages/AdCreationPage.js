import React from 'react';
import { Grid, Button } from '@material-ui/core';
import {
  ChooseNetworkField,
  CampaignNameField,
  AdTypeField,
  BidOptimizationField,
  BidTypeFields,
  BidOptionFields,
  BudgetField,
} from './components/AdFields';
import {
  GenderTargetingField,
  AgeTargetingField,
  LocationTargetingField,
} from './components/TargetingFields';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';

export default () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {steps.map((step) => (
          <>
            <ExpansionPanel
              key={step.title}
              title={step.title}
              subTitle={step.subTitle}
              titleWhenOpen={step.titleWhenOpen}
              subTitleWhenOpen={step.subTitleWhenOpen}
              titleBefore={step.titleBefore}
              subTitleBefore={step.subTitleBefore}
            >
              <step.component />
            </ExpansionPanel>
          </>
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
    titleBefore: 'Bidding Options',
    subTitleBefore: 'Bidding Options Subtitle',
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
  {
    titleBefore: 'Targeting Options',
    subTitleBefore: 'Targeting Options Subtitle',
    component: GenderTargetingField,
    title: 'Choose Gender',
    subTitle: 'Gender of audience',
  },
  {
    component: AgeTargetingField,
    title: 'Choose Age Range',
    subTitle: 'Age of audience',
  },
  {
    component: LocationTargetingField,
    title: 'Choose Location',
    subTitle: 'Exclude or include targeting location',
  },
  {
    component: LocationTargetingField,
    title: 'Location Type',
    subTitle: 'Living in location, Searching, Interested etc...',
  },
  {
    component: LocationTargetingField,
    title: 'Languages',
    subTitle: 'Choose targeting languages',
  },
  {
    titleBefore: 'Advanced targeting options',
    subTitleBefore: 'Income, Interests, Devices etc...',
    component: LocationTargetingField,
    title: 'Household Income (Google)',
    subTitle: 'Choose Household Income',
  },
  {
    component: LocationTargetingField,
    title: 'Parental status (Google)',
    subTitle: 'Choose Parental Status',
  },
  {
    component: LocationTargetingField,
    title: 'Devices',
    subTitle: 'Choose devices where your ad will be displayed',
  },
  {
    component: LocationTargetingField,
    title: 'Targeting Expansion',
    subTitle: 'Choose targeting expansion',
  },
  {
    titleBefore: 'Audience Settings',
    subTitleBefore: 'Choose Existing Audience',
    component: LocationTargetingField,
    title: 'Choose Audience',
    subTitle: (
      <span>
        Choose from existing audiences <Button variant='outlined'>Or Create New</Button>
      </span>
    ),
  },
  {
    titleBefore: 'Ad Parameters',
    subTitleBefore: 'Enter ad parameters here, Headline, image, link etc...',
    component: LocationTargetingField,
    title: 'Choose Image',
    subTitle: 'Select Image From Gallery or upload new',
  },
  {
    component: LocationTargetingField,
    title: 'Ad Name',
    subTitle: 'Enter Ad Name. Current: Dataninja-Trafic-Ad-2223',
  },
  {
    component: LocationTargetingField,
    title: 'Headline',
    subTitle: 'Enter Ad Headline',
  },
  {
    component: LocationTargetingField,
    title: 'Long Headline',
    subTitle: 'Enter Long Headline',
  },
  {
    component: LocationTargetingField,
    title: 'Primary text',
    subTitle: 'Enter Primary text',
  },
  {
    component: LocationTargetingField,
    title: 'Description',
    subTitle: 'Enter Description',
  },
  {
    component: LocationTargetingField,
    title: 'Links',
    subTitle: 'Choose Pages Or Enter Links',
  },
  {
    component: LocationTargetingField,
    title: 'Call to action',
    subTitle: 'Choose Call to action button text',
  },
];
