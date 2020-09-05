import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
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

export default (props) => {
  const { context, setContext, networks } = props;
  const [bidType, setBidType] = useState('automatic');

  const isNetworkEnabled = (n) => {
    return networks.indexOf(n) !== -1;
  };

  const handleBidTypeChange = (e) => {
    setBidType(e.target.value);
  };

  return (
    <form>
      <Grid container>
        <Grid item xs={8}>
          <ExpansionPanel title='Enter Adset Name' subTitle='Adset Name Field'>
            <AdGroupNameField
              name='name'
              defaultValue={context.name}
              onChange={(e) => console.log(e.target.value)}
            />
          </ExpansionPanel>
          <ExpansionPanel title='Enter Dates' subTitle='Start And End Dates'>
            <AdGroupDatesField
              dateStartProps={{
                label: 'Start Date',
                name: 'start_date',
                defaultValue: context.start_date,
                onChange: (e) => console.log(e.target.value),
              }}
              dateEndProps={{
                label: 'End Date',
                name: 'end_date',
                defaultValue: context.end_date,
                onChange: (e) => console.log(e.target.value),
              }}
            />
          </ExpansionPanel>
          <ExpansionPanel title='Optimize Bid To' subTitle='Enter Bid Optimization'>
            <OptimizationGoal
              name='optimization_goal'
              label='Choose Optimization Goal'
              defaultValue={context.optimization_goal}
              style={{ width: 300 }}
            />
          </ExpansionPanel>
          <ExpansionPanel title='Bid Options' subTitle='Enter Bid Options'>
            <FacebookAdGroupBidType
              name='bid_type'
              label='Choose Bid Type'
              defaultValue={bidType}
              onChange={handleBidTypeChange}
              style={{ width: 300 }}
            />
          </ExpansionPanel>
          <ExpansionPanel title='Bid Value' subTitle='Enter Bid Value'>
            <FacebookBidValue
              bidValueProps={{
                name: 'bid_amount',
                label: 'Choose Bid Type',
                style: { width: 300 },
                defaultValue: context.bid_amount,
              }}
              bidStrategyProps={{
                name: 'bid_strategy',
              }}
            />
          </ExpansionPanel>
          <ExpansionPanel
            expanded
            title='Gender'
            subTitle='Choose Gender'
            titleBefore='Targeting Options'
            subTitleBefore='Targeting Options Subtitle'
          >
            <GenderTargetingField
              name='targetings[gender]'
              value={context.targetings.gender}
              style={{ width: 300 }}
            />
          </ExpansionPanel>
          <ExpansionPanel expanded title='Audience Age' subTitle='Choose Ages'>
            <AgeTargetingField
              ageFromProps={{
                name: 'targetings[age_min]',
                value: context.targetings.age_min,
                label: 'Minimum Age',
                style: { width: 200 },
              }}
              ageToProps={{
                name: 'targetings[age_max]',
                label: 'Maximum Age',
                value: context.targetings.age_max,
                style: { width: 200 },
              }}
            />
          </ExpansionPanel>
          <ExpansionPanel expanded title='Languages' subTitle='Enter Languages'>
            <LanguageTargetingField
              name='targetings[locations]'
              value={context.targetings.languages}
            />
          </ExpansionPanel>
          <ExpansionPanel expanded title='Location Type' subTitle='Enter Location Type'>
            <LocationTypeTargetingField
              name='targetings[location_type]'
              value={context.targetings.location_type}
            />
          </ExpansionPanel>
          <ExpansionPanel expanded title='Income Targeting' subTitle='Enter HouseHold Income'>
            <HouseHoldIncomeTargetingField
              name='targetings[household_income]'
              value={context.targetings.household_income}
            />
          </ExpansionPanel>
          <ExpansionPanel expanded title='Parental Status' subTitle='Select Parental Status'>
            <ParentalStatusTargetingField name='targetings[parental_status]' />
          </ExpansionPanel>
          <ExpansionPanel expanded title='Device Targetings' subTitle='Select Devices'>
            <DeviceTargetingField name='targetings[devices]' />
          </ExpansionPanel>
        </Grid>
        <Grid item xs={4}>
          This is Adset Config
        </Grid>
      </Grid>
    </form>
  );
};
