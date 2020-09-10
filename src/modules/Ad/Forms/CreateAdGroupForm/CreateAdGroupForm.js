import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import AdGroupNameField from './AdGroupNameField';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import AdGroupDatesField from './AdGroupDatesField';
import OptimizationGoal from './OptimizationGoal';
import FacebookAdGroupBidType from './FacebookAdGroupBidType';
import FacebookBidValue from './FacebookBidValue';
import GenderTargetingField from './TargetingFields/GenderTargetingField';
import AgeTargetingField from './TargetingFields/AgeTargetingField';
import LocationTypeTargetingField from './TargetingFields/LocationTypeTargetingField';
import LanguageTargetingField from './TargetingFields/LanguageTargetingField';
import HouseHoldIncomeTargetingField from './TargetingFields/HouseHoldIncomeTargetingField';
import ParentalStatusTargetingField from './TargetingFields/ParentalStatusTargetingField';
import DeviceTargetingField from './TargetingFields/DeviceTargetingField';
import AdRotationTargetingField from './TargetingFields/AdRotationTargetingField';
import TargetingExpansionTargetingField from './TargetingFields/TargetingExpansionTargetingField';
import LocationTargetingField from './TargetingFields/LocationTargetingField';
import ChooseAudienceField from './ChooseAudienceField';
import ChooseExistingAdgroupField from './ChooseExistingAdgroupField';

export default (props) => {
  const { campaign } = props;
  return (
    <Grid container>
      <Grid item>
        <ExpansionPanel title='Choose Existing Adset' subTitle=''>
          <ChooseExistingAdgroupField />
        </ExpansionPanel>
        <ExpansionPanel title='Enter Adset Name' subTitle='Adset Name Field'>
          <AdGroupNameField />
        </ExpansionPanel>
        <ExpansionPanel title='Choose Audience' subTitle='Choose Existing Audince Or Creat New One'>
          <ChooseAudienceField />
        </ExpansionPanel>
        <ExpansionPanel title='Enter Dates' subTitle='Start And End Dates'>
          <AdGroupDatesField />
        </ExpansionPanel>
        <ExpansionPanel title='Optimize Bid To' subTitle='Enter Bid Optimization'>
          <OptimizationGoal />
        </ExpansionPanel>
        <ExpansionPanel title='Bid Options' subTitle='Enter Bid Options'>
          <FacebookAdGroupBidType />
        </ExpansionPanel>
        <ExpansionPanel title='Bid Value' subTitle='Enter Bid Value'>
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
        <ExpansionPanel title='Audience Age' subTitle='Choose Ages'>
          <AgeTargetingField />
        </ExpansionPanel>
        <ExpansionPanel title='Languages' subTitle='Enter Languages'>
          <LanguageTargetingField />
        </ExpansionPanel>
        <ExpansionPanel title='Locations' subTitle='Enter Locations in both networks'>
          <LocationTargetingField />
        </ExpansionPanel>
        <ExpansionPanel title='Location Type' subTitle='Enter Location Type'>
          <LocationTypeTargetingField />
        </ExpansionPanel>
        <ExpansionPanel title='Income Targeting' subTitle='Enter HouseHold Income'>
          <HouseHoldIncomeTargetingField />
        </ExpansionPanel>
        <ExpansionPanel title='Parental Status' subTitle='Select Parental Status'>
          <ParentalStatusTargetingField />
        </ExpansionPanel>
        <ExpansionPanel title='Device Targetings' subTitle='Select Devices'>
          <DeviceTargetingField />
        </ExpansionPanel>
        <ExpansionPanel title='Ad Rotation' subTitle='Choose Ad Rotation Type'>
          <AdRotationTargetingField />
        </ExpansionPanel>
        <ExpansionPanel title='Targeting Expansion' subTitle='Choose Targeting Expansion'>
          <TargetingExpansionTargetingField />
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
};
