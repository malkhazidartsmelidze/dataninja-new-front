import React from 'react';
import BidTypeInput from './BidTypeInput';
import FacebookPayFor from './FacebookBidOptions';
import GoogleBidTypeInput from './GoogleBidOptions';

export default () => {
  return (
    <>
      <BidTypeInput />
      <FacebookPayFor />
      <GoogleBidTypeInput />
    </>
  );
};
