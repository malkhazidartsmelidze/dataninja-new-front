import React from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import {
  AudienceDescriptionField,
  AudienceNameField,
  CustomAudienceIntentOrCustomField,
  CustomAudienceUrlsField,
  CustomAudienceAppsField,
  CustomAudiencePlacesField,
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
    component: CustomAudienceIntentOrCustomField,
    title: 'Choose Audience Type',
    subTitle:
      'People with any of these interests or purchase intentions Or People who searched for any of these terms on Google',
  },
  {
    component: CustomAudienceUrlsField,
    title: 'people who browse websites similar to',
    subTitle: 'Enter website addresses (URLs) that your ideal customer might visit',
  },
  {
    component: CustomAudienceAppsField,
    title: 'people who use apps similar to',
    subTitle: 'Enter the names of apps that you think your ideal customer might use',
  },
  {
    component: CustomAudiencePlacesField,
    title: 'people who visited these places',
    subTitle: 'Enter the types of places where your ideal customer might spend time',
  },
];
