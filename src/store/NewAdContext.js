import React, { createContext, useState, useContext, useEffect } from 'react';
import { ownerDocument } from '@material-ui/core';

export const NewAdContext = createContext({});

const initState = {
  networks: {
    facebook: true,
    google: true,
  },
  ad_type: 'conversions',
  bid_optimization_type: 'pay_per_click',
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

  const setBidOptimizationType = (type) => {
    setState((old) => {
      old.bid_optimization_type = type;
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

  const getField = (field) => {
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

  const setField = (field, value, network = null) => {
    if (network) {
      setState((old) => {
        old[network][field] = value;
        return Object.create(old);
      });
    } else {
      setState({ ...state, [field]: value });
    }
  };

  return (
    <NewAdContext.Provider
      value={{
        networks: state.networks,
        setNetwork,
        setBidOptimizationType,
        setAdType,
        setField,
        isNetworkSelected,
        isAdType,
        splitNetworkField,
        getField,
      }}
    >
      {children}
    </NewAdContext.Provider>
  );
};

export const useNewAdContext = () => useContext(NewAdContext);
