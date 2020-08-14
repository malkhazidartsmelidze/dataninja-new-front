import React, { useContext, useState, createContext, useEffect } from 'react';
import User from 'common/objects/User';

const UserContext = createContext('user');

const initState = {
  user: new User({
    name: 'Dataninja',
    email: 'info@dataninja.com',
  }),
  auth: true,
  loading: true,
};

export const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);

  const login = (user) => {
    setState({
      user: user,
      auth: true,
      loading: false,
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
        loading: state.loading,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default () => useContext(UserContext);
