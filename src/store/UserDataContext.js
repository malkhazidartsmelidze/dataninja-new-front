import React, { useContext, useState, createContext, useEffect } from 'react';
import User from 'common/objects/User';
import UserData from 'common/objects/User';

const UserDataContext = createContext('user');

const initState = {
  user: null,
  auth: false,
};

export const UserDataContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);

  const login = (user) => {
    setState({
      user: user,
      auth: true,
    });
  };

  const logout = () => {
    setState({ ...initState, loading: false });
  };

  useEffect(() => {
    User.service
      .me()
      .then((user) => login(user))
      .catch(() => logout());
  }, [state.auth]);

  return (
    <UserDataContext.Provider
      value={{
        accounts: state.accounts,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
