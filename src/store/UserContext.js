import React, { useContext, useState, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import api from 'common/api';
import { User, UserConfig } from 'Models/User';
import { tokenKey } from 'consts';

const UserContext = createContext('user');

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(new User({}));
  const [userConfig, setUserConfig] = useState(null);
  const [auth, setAuth] = useState(true);
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
    const _userConfg = new UserConfig(data.config);
    _userConfg.setDefaultAccounts(data.default_accounts).setAdAccounts(data.ad_accounts);

    ReactDOM.unstable_batchedUpdates(() => {
      setUser(user);
      setUserConfig(_userConfg);
      setAuth(true);
    });
  };

  console.log('rendered auth context');
  return (
    <UserContext.Provider
      value={{
        auth: auth,
        user: user,
        config: userConfig,
        defaultAccounts: defaultAccounts,
        setDefaultAccounts: setDefaultAccounts,
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
