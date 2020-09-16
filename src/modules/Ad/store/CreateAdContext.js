import React, { createContext, useState, useContext } from 'react';

export const CreateAdContext = createContext({});

export const CreateAdContextProvider = ({ children }) => {
  const [networks, setNetworks] = useState(['facebook', 'google']);
  const [state, setState] = useState({});

  const turnOffNetwork = (n) => {
    setNetworks((o) => {
      o.splice(o.indexOf(n), 1);
      return [...o];
    });
  };

  const turnOnNetwork = (n) => {
    setNetworks((o) => {
      if (o.indexOf(n) !== -1) return o;

      return [...o, n];
    });
  };

  const isNetworkSelected = (n) => {
    return networks.indexOf(n) >= 0;
  };

  return (
    <CreateAdContext.Provider
      value={{
        networks,
        state,
        setState,
        setNetworks,
        turnOnNetwork,
        turnOffNetwork,
        isNetworkSelected,
      }}
    >
      {children}
    </CreateAdContext.Provider>
  );
};

const useCreateAd = () => useContext(CreateAdContext);

export default useCreateAd;
