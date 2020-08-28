import React, { useContext, useState, createContext, useEffect } from 'react';
import User from 'Models/User/User';
import UserConfig from 'common/objects/User/UserConfig';
import useUser from 'store/UserContext';

const UserConfigContext = createContext('user');

export const UserConfigContextProvider = ({ children }) => {
  const { user } = useUser();
  const [state, setState] = useState({
    config: null,
    fbAccount: '',
    googleAccount: '',
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
