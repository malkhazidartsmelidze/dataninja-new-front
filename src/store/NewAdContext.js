import React, { createContext, useState, useContext, useEffect } from 'react';

export const NewAdContext = createContext({});

const initState = {
  networks: {
    facebook: true,
    google: true,
  },
};

export const NewAdContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);

  const isNetworkSelected = (network) => {
    return state.networks[network];
  };

  const setNetworks = (networks) => {
    setState({ ...state, networks: networks });
  };

  return (
    <NewAdContext.Provider
      value={{
        networks: state.networks,
        setNetworks,
        isNetworkSelected,
      }}
    >
      {children}
    </NewAdContext.Provider>
  );
};

export const useNewAdContext = () => useContext(NewAdContext);
