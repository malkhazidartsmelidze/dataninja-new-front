import React, { useContext, useState, createContext, useEffect, useReducer } from 'react';
import User from 'common/objects/User';
import UserConfig from 'common/objects/User/UserConfig';
import useUser from 'store/UserContext';
import { mdiConsolidate } from '@mdi/js';

const UserConfigContext = createContext('user');

const userConfigReducer = (state, action) => {
  switch (action.type) {
    case 'USER_CONFIG_FETCHED': {
      return { ...state, config: action.data };
    }
    case 'GOOGLE_ACCOUNT_CHOSEN': {
      return { ...state, googleAccountId: action.data };
    }
    case 'FACEBOOK_ACCOUNT_CHOSEN': {
      return { ...state, fbAccountId: action.data };
    }
    default:
      throw new Error();
  }
};
export const UserConfigContextProvider = ({ children }) => {
  const { user } = useUser();
  const [state, setState] = useState({
    config: null,
    fbAccount: null,
    googleAccount: null,
  });

  const [userConfig, setUserConfig] = useState(null);
  const [fbAccount, setFbAccount] = useState(null);
  const [googleAccount, setGoogle] = useState(null);

  const fetchUserConfig = () => {
    UserConfig.service.fetch().then((userConfig) => {
      setState({ ...state, config: userConfig });
    });
  };

  useEffect(() => {
    if (!user instanceof User) return;
    fetchUserConfig();
  }, [user]);

  return (
    <UserConfigContext.Provider
      value={{
        userConfig: state.config,
      }}
    >
      {children}
    </UserConfigContext.Provider>
  );
};

export const useUserConfig = () => useContext(UserConfigContext);
