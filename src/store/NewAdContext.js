import React, { createContext, useState, useContext, useEffect } from 'react';

export const NewAdContext = createContext({});

const initState = {
  networks: {
    facebook: true,
    google: true,
  },
  ad_type: 'conversions',
};

export const NewAdContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);

  const isNetworkSelected = (network) => {
    return state.networks[network];
  };

  const setNetwork = (network, bool) => {
    setState({ ...state, networks: { ...state.networks, [network]: bool } });
  };

  const setAdType = (type) => {
    setState({ ...state, ad_type: type });
  };

  const isAdType = (type) => {
    return state.ad_type === type;
  };

  return (
    <NewAdContext.Provider
      value={{
        networks: state.networks,
        setNetwork,
        isNetworkSelected,
        isAdType,
        setAdType,
      }}
    >
      {children}
    </NewAdContext.Provider>
  );
};

export const useNewAdContext = () => useContext(NewAdContext);
