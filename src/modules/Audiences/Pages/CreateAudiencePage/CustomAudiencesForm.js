import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import AudienceNameField from './components/AudienceNameField';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import AudienceDescriptionField from './components/AudienceDescriptionField';
import AudienceIntentOrCustomField from './components/AudienceIntentOrCustomField';
import CustomAudienceUrlField from './components/CustomAudienceUrlField';
import CustomAudienceAppField from './components/CustomAudienceAppField';
import CustomAudiencePlacesField from './components/CustomAudiencePlacesField';

export default (props) => {
  return (
    <Grid container {...props}>
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
    component: AudienceIntentOrCustomField,
    title: 'Choose Audience Type',
    subTitle:
      'People with any of these interests or purchase intentions Or People who searched for any of these terms on Google',
  },
  {
    component: CustomAudienceUrlField,
    title: 'people who browse websites similar to',
    subTitle: 'Enter website addresses (URLs) that your ideal customer might visit',
  },
  {
    component: CustomAudienceAppField,
    title: 'people who use apps similar to',
    subTitle: 'Enter the names of apps that you think your ideal customer might use',
  },
  {
    component: CustomAudiencePlacesField,
    title: 'people who visited these places',
    subTitle: 'Enter the types of places where your ideal customer might spend time',
  },
];
