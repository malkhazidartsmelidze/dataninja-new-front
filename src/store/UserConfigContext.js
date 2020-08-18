import React, { useContext, useState, createContext, useEffect, useReducer } from 'react';
import User from 'common/objects/User';
import UserConfig from 'common/objects/User/UserConfig';
import useUser from 'store/UserContext';
import { mdiConsolidate } from '@mdi/js';

const UserConfigContext = createContext('user');

export const UserConfigContextProvider = ({ children }) => {
  const { user } = useUser();
  const [state, setState] = useState({
    config: null,
    fbAccount: null,
    googleAccount: null,
  });

  const fetchUserConfig = () => {
    UserConfig.service.fetch().then((userConfig) => {
      setState({ ...state, config: userConfig });
    });
  };

  const setFbAccount = (fbAccountId) => {
    setState({ ...state, fbAccount: fbAccountId });
  };

  const setGoogleAccount = (googleAccountId) => {
    setState({ ...state, googleAccount: googleAccountId });
  };

  useEffect(() => {
    if (!user instanceof User) return;
    fetchUserConfig();
  }, [user]);

  return (
    <UserConfigContext.Provider
      value={{
        userConfig: state.config,
        fbAccount: state.fbAccount,
        googleAccount: state.googleAccount,
        setFbAccount,
        setGoogleAccount,
      }}
    >
      {children}
    </UserConfigContext.Provider>
  );
};

export const useUserConfig = () => useContext(UserConfigContext);
