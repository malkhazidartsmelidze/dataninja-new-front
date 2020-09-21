import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import AdGroupNameField from './AdGroupNameField';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import AdGroupDatesField from './AdGroupDatesField';
import OptimizationGoal from './AdGroupOptimizationGoal';
import FacebookBidValue from './FacebookBidValue';
import GenderTargetingField from './TargetingFields/GenderTargetingField';
import AgeTargetingField from './TargetingFields/AgeTargetingField';
import LocationTypeTargetingField from './TargetingFields/LocationTypeTargetingField';
import LanguageTargetingField from './TargetingFields/LanguageTargetingField';
import HouseHoldIncomeTargetingField from './TargetingFields/HouseHoldIncomeTargetingField';
import ParentalStatusTargetingField from './TargetingFields/ParentalStatusTargetingField';
import DeviceTargetingField from './TargetingFields/DeviceTargetingField';
import AdRotationTargetingField from './TargetingFields/AdRotationTargetingField';
import TargetingSearchField from './TargetingFields/TargetingSearchField';
import TargetingExpansionTargetingField from './TargetingFields/TargetingExpansionTargetingField';
import LocationTargetingField from './TargetingFields/LocationTargetingField';
import ChooseAudienceField from './ChooseAudienceField';
import ChooseExistingAdgroupField from './ChooseExistingAdgroupField';
import AdGroupBillingEventField from './AdGroupBillingEventField';
import AdGroupBudgetField from './AdGroupBudgetField';
import useCreateAd from 'modules/Ad/store/CreateAdContext';
import AudienceCategoryTree from './TargetingFields/AudienceCategoryTree';
import AdGroupCreativePlacementsField from './TargetingFields/AdGroupCreativePlacementsField';
import OperatingSystemTargetingField from './TargetingFields/OperatingSystemTargetingField';
import AdGroupKeywordsField from './TargetingFields/AdGroupKeywordsField';

export default (props) => {
  const { campaign, network } = props;
  const { isNetworkSelected } = useCreateAd();

  return (
    <Grid container>
      <Grid item>
        {campaign && (
          <ExpansionPanel expanded title='Choose Existing Adset' subTitle=''>
            <ChooseExistingAdgroupField campaign={campaign} network={network} />
          </ExpansionPanel>
        )}
        <ExpansionPanel expanded title='Enter Adset Name' subTitle='Adset Name Field'>
          <AdGroupNameField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Enter Budget' subTitle='Choose Budget here'>
          <AdGroupBudgetField />
        </ExpansionPanel>
        <ExpansionPanel
          expanded
          title='Choose Audience'
          subTitle='Choose Existing Audince Or Creat New One'
        >
          <ChooseAudienceField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Enter Dates' subTitle='Start And End Dates'>
          <AdGroupDatesField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Optimize Bid To' subTitle='Enter Bid Optimization'>
          <OptimizationGoal />
        </ExpansionPanel>
        {isNetworkSelected('facebook') && (
          <ExpansionPanel expanded title='Billing Event' subTitle='Enter When You are paying'>
            <AdGroupBillingEventField />
          </ExpansionPanel>
        )}
        <ExpansionPanel expanded title='Bid Value' subTitle='Enter Bid Value'>
          <FacebookBidValue />
        </ExpansionPanel>
        <ExpansionPanel
          title='Gender'
          subTitle='Choose Gender'
          titleBefore='Targeting Options'
          subTitleBefore='Targeting Options'
        >
          <GenderTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Audience Age' subTitle='Choose Ages'>
          <AgeTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Keywords' subTitle='Enter Keywords'>
          <AdGroupKeywordsField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Locations' subTitle='Enter Locations in both networks'>
          <LocationTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Location Type' subTitle='Enter Location Type'>
          <LocationTypeTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Languages' subTitle='Enter Languages'>
          <LanguageTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Income Targeting' subTitle='Enter HouseHold Income'>
          <HouseHoldIncomeTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Parental Status' subTitle='Select Parental Status'>
          <ParentalStatusTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Device Targetings' subTitle='Select Devices'>
          <DeviceTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='OS Targetings' subTitle='Select OS'>
          <OperatingSystemTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Facebook Detailed Targeting' subTitle='Enter Facebook'>
          <TargetingSearchField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Audience' subTitle='Select Audience Tree'>
          <AudienceCategoryTree />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Ad Rotation' subTitle='Choose Ad Rotation Type'>
          <AdRotationTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Targeting Expansion' subTitle='Choose Targeting Expansion'>
          <TargetingExpansionTargetingField />
        </ExpansionPanel>
        <ExpansionPanel expanded title='Placements' subTitle='Choose Placements'>
          <AdGroupCreativePlacementsField />
        </ExpansionPanel>
        <input type='hidden' value='display' name='google_ad_type' />
      </Grid>
    </Grid>
  );
};
