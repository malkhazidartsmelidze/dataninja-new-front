import React, { Fragment } from 'react';
import { MenuItem, Grid } from '@material-ui/core';
import { useNewAdContext } from 'store/NewAdContext';
import BidOptimizationInput from './BidOptimizationInput';
import BidTypeInput from './BidTypeInput';

export default () => {
  const { getField, setBidOptimization, setField } = useNewAdContext();
  const bidOptimizationType = getField('bid_optimization_type');
  const bidType = getField('bid_type');
  const bidAmount = getField('bid_amount');

  const handleBidOptimizationChange = (e) => {
    const type = e.target.value;
    setBidOptimization(type);
  };

  const facebookBidTypeChanged = (e) => {
    setField('bid_type', e.target.value, 'facebook');
  };

  const googleBidTypeChanged = (e) => {
    setField('bid_type', e.target.value, 'google');
  };

  return (
    <Fragment>
      <BidOptimizationInput />
      <BidTypeInput />
    </Fragment>
  );

  // return (
  //   <Grid container spacing={2} alignItems='center'>
  //     <Grid item>
  //       <Typography color='textSecondary'>Bid Optimization Goal Type:</Typography>
  //     </Grid>
  //     <Grid item>
  //       <SplittedInput
  //         networks={['facebook', 'google']}
  //         onSplitProps={{
  //           facebook: {
  //             value: bidType.facebook,
  //             onChange: facebookBidTypeChanged,
  //             children: bidTypeFacebookOptions.map((option) => (
  //               <MenuItem key={option.value} value={option.value}>
  //                 {option.name}
  //               </MenuItem>
  //             )),
  //           },
  //           google: {
  //             value: bidType.google,
  //             children: <GoogleBidOptions />,
  //           },
  //         }}
  //         splitted={true}
  //       >
  //         <TextField fullWidth={false} value={bidType.value} name='bid_optimization' select={true}>
  //           <MenuItem />
  //         </TextField>
  //       </SplittedInput>
  //     </Grid>
  //   </Grid>
  // );
};

const FacebookBidOptions = () => {
  const bidTypeFacebookOptions = [
    { value: 'auto', name: 'Automatic' },
    { value: 'manual', name: 'Manual' },
  ];

  return bidTypeFacebookOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.name}
    </MenuItem>
  ));
};

const GoogleBidOptions = () => {
  const bidTypeGoogleOptions = [
    { value: 'target_cpa', name: 'Pay Per Click' },
    { value: 'pay_per_impressions', name: 'Pay Per Impressions' },
    { value: 'maximize_clicks', name: 'Maximize Clicks' },
    { value: 'landing_page_views', name: 'Landing Page Views' },
  ];

  return bidTypeGoogleOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.name}
    </MenuItem>
  ));
};
