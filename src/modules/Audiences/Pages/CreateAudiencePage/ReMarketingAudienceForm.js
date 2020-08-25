import React from 'react';
import { Grid } from '@material-ui/core';
import AudienceNameField from './components/AudienceNameField';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import AudienceDescriptionField from './components/AudienceDescriptionField';
import ListMembersField from './components/ListMembersField';
import PrefillOptionsField from './components/PrefillOptionsField';
import MemberShipDurationField from './components/MemberShipDurationField';
import VisitedPagesField from './components/VisitedPagesField';

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
    component: AudienceNameField,
    title: 'Audience Name',
    subTitle: 'Enter Audience Name',
  },
  {
    component: AudienceDescriptionField,
    title: 'Audience Description',
    subTitle: 'Enter Audience Description',
  },
  {
    component: ListMembersField,
    title: 'List Members',
    subTitle: "Select the type of visitors from which you'd like to create an audience",
  },
  {
    component: VisitedPagesField,
    title: 'Visited pages',
    subTitle: 'Include people that visited a page with the following rules',
  },
  {
    component: PrefillOptionsField,
    title: 'Pre-fill options',
    subTitle: 'Choose between pre-filling the list or starting with an empty one',
  },
  {
    component: MemberShipDurationField,
    title: 'Membership duration',
    subTitle: 'Enter the number of days someone stays in this audience',
  },
];
