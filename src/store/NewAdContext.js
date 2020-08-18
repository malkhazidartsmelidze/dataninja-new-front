import React, { createContext, useState, useContext, useEffect } from 'react';
import { ownerDocument } from '@material-ui/core';

export const NewAdContext = createContext({});

const initState = {
  networks: {
    facebook: true,
    google: true,
  },
  ad_type: 'conversions',
  bid_type: 'pay_per_click',
  splits: {
    facebook: {},
    google: {},
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

  const getState = (field) => {};

  return (
    <NewAdContext.Provider
      value={{
        networks: state.networks,
        setNetwork,
        isNetworkSelected,
        isAdType,
        setAdType,
        splitNetworkField,
        getState,
      }}
    >
      {children}
    </NewAdContext.Provider>
  );
};

export const useNewAdContext = () => useContext(NewAdContext);
