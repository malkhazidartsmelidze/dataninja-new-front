import React, { useContext, useState, createContext, useEffect } from 'react';
import User from 'common/objects/User';
import UserConfig from 'common/objects/User/UserConfig';
import useUser from 'store/UserContext';

const UserConfigContext = createContext('user');

export const UserConfigContextProvider = ({ children }) => {
  const { user } = useUser();
  const [userConfig, setUserConfig] = useState(null);

  const fetchUserConfig = () => {
    UserConfig.service.fetch().then((userConfig) => setUserConfig(userConfig));
  };

  useEffect(() => {
    if (!user instanceof User) return;
    fetchUserConfig();
  }, [user]);

  return (
    <UserConfigContext.Provider
      value={{
        userConfig: userConfig,
      }}
    >
      {children}
    </UserConfigContext.Provider>
  );
};

export const useUserConfig = () => useContext(UserConfigContext);
