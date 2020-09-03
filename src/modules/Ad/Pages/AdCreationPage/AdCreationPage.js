import React, { useState } from 'react';
import { Grid, Button, Modal, Dialog, DialogTitle, Paper, DialogContent } from '@material-ui/core';
import {
  ChooseNetworkField,
  CampaignNameField,
  AdTypeField,
  BidOptimizationField,
  BidTypeFields,
  BidOptionFields,
  BudgetField,
  AdsetNameField,
  AdDatesField,
} from './components/AdFields';
import {
  GenderTargetingField,
  AgeTargetingField,
  LocationTargetingField,
  LocationTypeField,
  LanguageTargetingField,
  TargetingExpansionField,
  DeviceTargetingField,
  ParentalStatusTargetingField,
  HouseHoldIncomeTargetingField,
  AdRotationField,
} from './components/TargetingFields';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import {
  CreativeNameField,
  CreativeHeadlineField,
  CreativeLongHeadlineField,
  CreativePrimaryTextField,
  CreativeDescriptionField,
  CreativeLinksField,
  CreativePromoTextField,
  CreativeBusinessNameField,
  CreativePlatformsField,
  CreativeGmailFields,
  CreativeParametersField,
  CreativeCallToActionField,
  CreativeFacebookPageId,
  CreativeImageField,
} from './components/CreativeFields';
import { CreateAudiencePage } from 'modules/Audiences/Pages';
import {
  SiteLinkExtension,
  CalloutExtension,
  StructuredSnippetExtension,
  CallExtension,
} from './components/Extensions';
import { useNewAdContext } from 'store/NewAdContext';
import Ad from 'Models/Ad/Ad';
import AudienceField from './components/AudienceField';

export default () => {
  const { data } = useNewAdContext();

  const createInGoogle = () => {
    Ad.service.createInGoogle(data);
  };

  const createInFacebook = () => {
    Ad.service.createInFacebook(data);
  };

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
        <div style={{ marginTop: 16 }}>
          <Button
            onClick={createInGoogle}
            size='large'
            color='primary'
            style={{ marginRight: 16 }}
            variant='contained'
          >
            Create Google Ad
          </Button>
          <Button onClick={createInFacebook} size='large' color='primary' variant='contained'>
            Create Facebook Ad
          </Button>
        </div>
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
    component: AdDatesField,
    title: 'Dates',
    subTitle: 'Choose Dates',
  },
  {
    component: AdsetNameField,
    title: 'Adset Name',
    subTitle: 'Enter Adset Name',
  },
  {
    titleBefore: 'Bidding Options',
    subTitleBefore: 'Bidding Options Subtitle',
    component: BidOptimizationField,
    title: 'Bid Optimization',
    subTitle: 'Choose Bidding Options for each networks',
  },
  // {
  //   component: BidTypeFields,
  //   title: 'Bid Types',
  //   subTitle: 'Choose Bid Types',
  // },
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
    titleBefore: 'Advanced targeting options',
    subTitleBefore: 'Income, Interests, Devices etc...',
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
  {
    component: AdRotationField,
    title: 'Ad Rotation',
    subTitle: 'Choose Ad Rotation Type',
  },
  {
    component: TargetingExpansionField,
    title: 'Targeting Expansion',
    subTitle: 'Choose targeting expansion',
  },
  {
    titleBefore: 'Audience Settings',
    subTitleBefore: 'Choose Existing Audience',
    component: AudienceField,
    title: 'Choose Audience',
    subTitle: 'Create or choose existing audience',
  },
  {
    titleBefore: 'Ad Parameters',
    subTitleBefore: 'Enter ad parameters here, Headline, image, link etc...',
    component: CreativeNameField,
    title: 'Ad Name',
    subTitle: 'Enter Ad Name. Current: Dataninja-Trafic-Ad-2223',
  },
  {
    component: CreativeFacebookPageId,
    title: 'Choose Facebook Page',
    subTitle: 'Select Facebook Page',
  },
  {
    component: CreativeImageField,
    title: 'Choose Image',
    subTitle: 'Select Image From Gallery or upload new',
  },
  {
    component: CreativeHeadlineField,
    title: 'Headline',
    subTitle: 'Enter Ad Headline',
  },
  {
    component: CreativeLongHeadlineField,
    title: 'Long Headline',
    subTitle: 'Enter Long Headline',
  },
  {
    component: CreativePromoTextField,
    title: 'Promo text',
    subTitle: 'Enter promo text',
  },
  {
    component: CreativeBusinessNameField,
    title: 'Business Name',
    subTitle: 'Enter Business Name',
  },
  {
    component: CreativePrimaryTextField,
    title: 'Primary text',
    subTitle: 'Enter Primary text',
  },
  {
    component: CreativeDescriptionField,
    title: 'Description',
    subTitle: 'Enter Description',
  },
  {
    component: CreativeLinksField,
    title: 'Links',
    subTitle: 'Choose Pages Or Enter Links',
  },
  {
    component: CreativePlatformsField,
    title: 'Choose Platforms',
    subTitle: 'Choose Platforms Here',
  },
  {
    component: CreativeGmailFields,
    title: 'Gmail Fields',
    subTitle: 'Enter Subject And Description',
  },
  {
    component: CreativeParametersField,
    title: 'Url Parameters',
    subTitle: 'Enter Url Parameters',
  },
  {
    component: CreativeCallToActionField,
    title: 'Call to action',
    subTitle: 'Choose Call to action button text',
  },
  {
    titleBefore: 'Extensions',
    subTitleBefore: 'Sitelink, Callout, Structured Snippet, Call ... (Only For Google)',
    component: SiteLinkExtension,
    title: 'Sitelink extension',
    subTitle: 'Sitelink extension module (Only For Google)',
  },
  {
    component: CalloutExtension,
    title: 'Callout extension',
    subTitle: 'Callout extension module (Only For Google)',
  },
  {
    component: StructuredSnippetExtension,
    title: 'Structured Snippet extension',
    subTitle: 'Structured Snippet module (Only For Google)',
  },
  {
    component: CallExtension,
    title: 'Call extension',
    subTitle: 'Call extension module (Only For Google)',
  },
];
