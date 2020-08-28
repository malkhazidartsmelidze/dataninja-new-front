import React from 'react';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import { AudienceDescriptionField, AudienceNameField } from 'modules/Audiences/Forms/components';
import { CategoryTree } from 'modules/Audiences/Forms/components/Google';
import {
  GenderTargetingField,
  AgeTargetingField,
  LocationTargetingField,
  LocationTypeField,
  LanguageTargetingField,
  HouseHoldIncomeTargetingField,
  ParentalStatusTargetingField,
  DeviceTargetingField,
} from 'modules/Ad/Pages/AdCreationPage/components/TargetingFields';

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
    component: CategoryTree,
    title: 'Category Tree',
    subTitle: 'Categories and trees',
  },
  {
    titleBefore: '',
    subTitleBefore: 'Choose Audience Targeting Option',
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
    component: LocationTypeField,
    title: 'Location Type',
    subTitle: 'Living in location, Searching, Interested etc...',
  },
  {
    component: LanguageTargetingField,
    title: 'Languages',
    subTitle: 'Choose targeting languages',
  },
  {
    component: HouseHoldIncomeTargetingField,
    title: 'Household Income (Google)',
    subTitle: 'Choose Household Income',
  },
  {
    component: ParentalStatusTargetingField,
    title: 'Parental status (Google)',
    subTitle: 'Choose Parental Status',
  },
  {
    component: DeviceTargetingField,
    title: 'Devices',
    subTitle: 'Choose devices where your ad will be displayed',
  },
];
