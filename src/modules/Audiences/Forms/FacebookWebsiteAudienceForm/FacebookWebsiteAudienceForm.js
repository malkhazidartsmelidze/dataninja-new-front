import React from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { AudienceDescriptionField, AudienceNameField } from 'modules/Audiences/Forms/components';
import {
  RefineByFrequency,
  RefineByDevice,
  AudienceCriterionType,
  PeopleAudienceOptions,
} from 'modules/Audiences/Forms/components/Facebook';

export default () => {
  return steps.map((step) => (
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
  ));
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
    component: AudienceCriterionType,
    title: 'Criterion Type',
    subTitle: 'Include people who meet following criterions ',
  },
  {
    component: PeopleAudienceOptions,
    title: 'Include People',
    subTitle: 'Include People Based on following conditions: ',
  },
  {
    component: PeopleAudienceOptions,
    title: 'Exclude People',
    subTitle: 'Exclude People Based on following conditions: ',
  },
  {
    component: RefineByFrequency,
    title: 'Frequency Refine',
    subTitle: 'Refine Audience By Frequency: ',
  },
  {
    component: RefineByDevice,
    title: 'Frequency Devices',
    subTitle: 'Refine Audience By Device: ',
  },
];
