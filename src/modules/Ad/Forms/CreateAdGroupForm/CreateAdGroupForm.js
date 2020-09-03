import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import AdGroupNameField from './AdGroupNameField';
import ExpansionPanel from 'components/ExpansionPanel/ExpansionPanel';
import AdGroupDatesField from './AdGroupDatesField';
import OptimizationGoal from './OptimizationGoal';
import FacebookAdGroupBidType from './FacebookAdGroupBidType';
import FacebookBidValue from './FacebookBidValue';

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
          <ExpansionPanel expanded title='Enter Adset Name' subTitle='Adset Name Field'>
            <AdGroupNameField
              name='name'
              defaultValue={context.name}
              onChange={(e) => console.log(e.target.value)}
            />
          </ExpansionPanel>
          <ExpansionPanel expanded title='Enter Dates' subTitle='Start And End Dates'>
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
          <ExpansionPanel expanded title='Optimize Bid To' subTitle='Enter Bid Optimization'>
            <OptimizationGoal
              name='optimization_goal'
              label='Choose Optimization Goal'
              defaultValue={context.optimization_goal}
              style={{ width: 300 }}
            />
          </ExpansionPanel>
          <ExpansionPanel expanded title='Bid Options' subTitle='Enter Bid Options'>
            <FacebookAdGroupBidType
              name='bid_type'
              label='Choose Bid Type'
              defaultValue={bidType}
              onChange={handleBidTypeChange}
              style={{ width: 300 }}
            />
          </ExpansionPanel>
          <ExpansionPanel expanded title='Bid Value' subTitle='Enter Bid Value'>
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
        </Grid>
        <Grid item xs={4}>
          This is Adset Config
        </Grid>
      </Grid>
    </form>
  );
};
