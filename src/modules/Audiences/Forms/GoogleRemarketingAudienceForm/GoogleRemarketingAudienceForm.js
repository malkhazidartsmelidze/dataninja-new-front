import React from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import {
  AudienceDescriptionField,
  AudienceNameField,
  RemarketingListMembersField,
  RemarketingPrefillOptionsField,
  RemarketingMemberShipDurationField,
  RemarketingVisitedPagesField,
} from 'modules/Audiences/Forms/components';

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
    component: RemarketingListMembersField,
    title: 'List Members',
    subTitle: "Select the type of visitors from which you'd like to create an audience",
  },
  {
    component: RemarketingVisitedPagesField,
    title: 'Visited pages',
    subTitle: 'Include people that visited a page with the following rules',
  },
  {
    component: RemarketingPrefillOptionsField,
    title: 'Pre-fill options',
    subTitle: 'Choose between pre-filling the list or starting with an empty one',
  },
  {
    component: RemarketingMemberShipDurationField,
    title: 'Membership duration',
    subTitle: 'Enter the number of days someone stays in this audience',
  },
];
