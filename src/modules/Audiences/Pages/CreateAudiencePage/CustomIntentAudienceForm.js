import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import AudienceNameField from './components/AudienceNameField';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import AudienceDescriptionField from './components/AudienceDescriptionField';
import ListMembersField from './components/ListMembersField';
import PrefillOptionsField from './components/PrefillOptionsField';
import MemberShipDurationField from './components/MemberShipDurationField';
import VisitedPagesField from './components/VisitedPagesField';
import CustomIntentAudienceFields from './components/CustomIntentAudienceFields';

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
    component: CustomIntentAudienceFields,
    title: 'Audience Config',
    subTitle: 'Enter Keyowords Or Search Terms',
  },
];
