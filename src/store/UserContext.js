import React, { useContext, useState, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from 'common/api';
import { User, UserConfig } from 'Models/User';
import { tokenKey } from 'consts';
import UserService from 'services/UserService';

const UserContext = createContext('user');

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(new User({}));
  const [userConfig, setUserConfig] = useState(null);
  const [auth, setAuth] = useState(false);
  const [defaultAccounts, setDefaultAccounts] = useState({
    google: null,
    facebook: null,
  });

  const login = (user) => {
    setUser(user);
    setAuth(true);
  };

  const logout = () => {
    setUser();
    setAuth(false);
    api.setToken(null);
  };

  useEffect(() => {
    // if (!localStorage.getItem(tokenKey)) return;
    refreshUser();
  }, [auth]);

  const refreshUser = () => {
    UserService.bootstrap()
      .then((data) => {
        if (typeof data.user !== 'object') throw 'Undefined User';
        configAndLoginuser(data);
      })
      .catch((e) => {
        console.error(e);
        logout();
      });
  };

  const configAndLoginuser = (data) => {
    const user = new User(data.user);
    const _userConfg = new UserConfig(data.user.config);
    _userConfg.setDefaultAccounts(data.default_accounts).setAdAccounts(data.ad_accounts);

    ReactDOM.unstable_batchedUpdates(() => {
      setUser(user);
      setUserConfig(_userConfg);
      setAuth(true);
    });
  };

  return (
    <UserContext.Provider
      value={{
        auth: auth,
        user: user,
        config: userConfig,
        defaultAccounts: defaultAccounts,
        setDefaultAccounts: setDefaultAccounts,
        refreshUser: refreshUser,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export default useUser;
