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
    setState({
      user: user,
      auth: false,
    });
  };

  const logout = () => {
    setState({ ...initState, loading: false });
  };

  useEffect(() => {}, [state.auth]);

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
