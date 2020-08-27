import React from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { AudienceDescriptionField, AudienceNameField } from 'modules/Audiences/Forms/components';
import PeopleAudienceOptions from '../components/Facebook/PeopleAudienceOptions';
import { AudienceVideoEngagmentType, AudienceVideoDaysField } from '../components/Facebook';

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
    component: AudienceVideoEngagmentType,
    title: 'Engagement Type',
    subTitle: 'Choose the type of content that you want to use to create your audience',
  },
  {
    component: AudienceVideoDaysField,
    title: 'In the past',
    subTitle: 'Choose Days Here',
  },
];
