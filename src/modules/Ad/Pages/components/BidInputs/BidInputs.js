import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import BidOptimizationInput from './BidOptimizationInput';
import BidTypeInput from './BidTypeInput';
import FacebookPayFor from './FacebookBidOptions';
import GoogleBidTypeInput from './GoogleBidOptions';

export default () => {
  return (
    <>
      <BidOptimizationInput />
      <BidTypeInput />
      <FacebookPayFor />
      <GoogleBidTypeInput />
    </>
  );
};
