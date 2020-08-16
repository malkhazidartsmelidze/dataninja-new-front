import React, { useContext, useState, createContext, useEffect } from 'react';
import User from 'common/objects/User';

const UserContext = createContext('user');

const initState = {
  user: null,
  auth: false,
};

export const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);

  const login = (user) => {
    console.log(user);
    setState({
      user: user,
      auth: true,
    });
  };

  const logout = () => {
    setState(initState);
  };

  useEffect(() => {
    User.service
      .me()
      .then((user) => login(user))
      .catch(() => logout());
  }, [state.auth]);

  return (
    <UserContext.Provider
      value={{
        auth: state.auth,
        user: state.user,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default () => useContext(UserContext);
