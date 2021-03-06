import React, { createContext, useState, useContext } from 'react';

export const CreateAdContext = createContext({});

export const CreateAdContextProvider = ({ children }) => {
  const [networks, setNetworks] = useState(['facebook']);
  const [state, _setState] = useState({
    campaign_objective: 'traffic',
    optimization_goal: 'clicks',
    billing_event: 'clicks',
    display_link: 'https://facebook.com',
    bid_strategy: 'cost_cap',
    bid_type: 'automatic',
    page_id: 33,
  });
  const [campaignFormData] = useState(new FormData());
  const [adGroupFormData] = useState(new FormData());
  const [creativeFormData] = useState(new FormData());

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

  const setState = (obj) => {
    _setState({ ...state, ...obj });
  };

  return (
    <CreateAdContext.Provider
      value={{
        networks,
        state,
        campaignFormData,
        adGroupFormData,
        creativeFormData,
        isSearch: state.campaign_objective === 'search',
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
