import React, { createContext, useState, useContext, useEffect } from 'react';
import { ownerDocument } from '@material-ui/core';

export const NewAdContext = createContext({});

const aviableNetworks = ['facebook', 'google'];

const initState = {
  networks: {
    facebook: true,
    google: true,
  },
  ad_type: 'conversions',
  bid_optimization: 'pay_per_click',
  splits: {
    facebook: {
      bid_type: 'auto',
      bid_amount: 1.0,
    },
    google: {
      bid_type: 'manual_cpc',
      bid_amount: 2.0,
    },
  },
};

export const NewAdContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);

  const isNetworkSelected = (network) => {
    return state.networks[network];
  };

  const setNetwork = (network, bool) => {
    setState((old) => {
      old.networks[network] = bool;
      return { ...old };
    });
  };

  const setAdType = (type) => {
    setState((old) => {
      old.ad_type = type;
      return { ...old };
    });
  };

  const setBidOptimization = (type) => {
    setState((old) => {
      old.bid_optimization = type;
      return Object.create(old);
    });
  };

  const isAdType = (type) => {
    return state.ad_type === type;
  };

  const splitNetworkField = (network, field, value) => {
    setState((old) => {
      if (!old.splits[network]) return;
      old.splits[network][field] = value;
      return Object.create(old);
    });
  };

  const getState = (field) => {
    const generalFieldValue = state[field];
    const facebookFieldValue = state.splits.facebook[field] || state[field];
    const googleFieldValue = state.splits.google[field] || state[field];
    const isSplitted = state.splits.facebook[field] || state.splits.google[field];

    return {
      value: generalFieldValue,
      facebook: facebookFieldValue,
      google: googleFieldValue,
      isSplitted: isSplitted,
    };
  };

  return (
    <NewAdContext.Provider
      value={{
        networks: state.networks,
        setNetwork,
        setBidOptimization,
        setAdType,
        isNetworkSelected,
        isAdType,
        splitNetworkField,
        getState,
      }}
    >
      {children}
    </NewAdContext.Provider>
  );
};

export const useNewAdContext = () => useContext(NewAdContext);
