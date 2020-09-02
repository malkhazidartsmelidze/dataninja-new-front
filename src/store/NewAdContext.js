import React, { createContext, useState, useContext, useEffect } from 'react';
import AdForm from 'common/objects/Ad/AdForm';

export const NewAdContext = createContext({});

const initState = {
  networks: {
    facebook: true,
    google: true,
  },
  ad_type: 'conversions',
  bid_optimization_type: 'pay_per_click',
  budget: 30,
  targeting_gender: 'all',
  targeting_age_from: 15,
  targeting_age_to: 65,
  targeting_location_type: 'living',
  targeting_language: '',
  targeting_expansion: 50,
  splits: {
    facebook: {
      bid_type: 'auto',
      pay_for: 'pay_for_impressions',
      bid_amount: 1.0,
      cost_or_bid: 'cost',
      budget: 10,
    },
    google: {
      bid_type: 'manual_cpc',
      enhanced_bid: true,
      budget: 20,
      bid_amount: 1.0,
    },
  },
};

export const NewAdContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);
  const [formConfig, setFormConfig] = useState({});

  const isNetworkSelected = (network) => {
    return state.networks[network];
  };

  const setNetwork = (network, bool) => {
    setState((old) => {
      old.networks[network] = bool;
      return { ...old };
    });
  };
  /** @todo remove */
  const setBidOptimizationType = (type) => {
    setState((old) => {
      old.bid_optimization_type = type;
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
        old.splits[network][field] = value;
        return Object.create(old);
      });
    } else {
      setState({ ...state, [field]: value });
    }
  };

  useEffect(() => {
    AdForm.service.getFormConfig().then((config) => setFormConfig(config));
  }, []);

  return (
    <NewAdContext.Provider
      value={{
        networks: state.networks,
        setNetwork,
        setBidOptimizationType,
        isNetworkSelected,
        setField,
        getField,
        formConfig,
      }}
    >
      {children}
    </NewAdContext.Provider>
  );
};

export const useNewAdContext = () => useContext(NewAdContext);
