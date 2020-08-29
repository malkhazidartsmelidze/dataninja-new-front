import React, { useContext, useState, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from 'common/api';
import { User, UserConfig } from 'Models/User';
import { tokenKey } from 'consts';

const UserContext = createContext('user');

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(new User({}));
  const [userConfig, setUserConfig] = useState(new UserConfig({}));
  const [auth, setAuth] = useState(false);

  const login = (user) => {
    setUser(user);
    setAuth(true);
  };

  const logout = () => {
    setUser();
    api.setToken(null);
  };

  useEffect(() => {
    if (!localStorage.getItem(tokenKey)) return;
    User.service
      .bootstrap()
      .then((data) => {
        if (typeof data.user !== 'object') throw 'Undefined User';
        configAndLoginuser(data);
      })
      .catch((e) => {
        // logout()
        console.log(e);
      });
  }, []);

  const configAndLoginuser = (data) => {
    const user = new User(data.user);
    const userConfg = new UserConfig(data.config);
    userConfg.setDefaultAccounts(data.default_accounts);
    userConfg.setAdAccounts(data.ad_accounts);

    ReactDOM.unstable_batchedUpdates(() => {
      setUser(user);
      setAuth(true);
      setUserConfig(userConfig);
    });
  };

  return (
    <UserContext.Provider
      value={{
        auth: auth,
        user: user,
        config: userConfig,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default () => useContext(UserContext);
