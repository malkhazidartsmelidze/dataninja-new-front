import React, { useContext, useState, createContext, useEffect } from 'react';
import User from 'common/objects/User';
import api from 'common/api';

const UserContext = createContext('user');

export const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(initState);

  const login = (user) => {
    setState({
      user: user,
      auth: true,
    });
  };

  const logout = () => {
    setState(initState);
    api.setToken(null);
  };

  useEffect(() => {
    User.service.me();
    // .then((user) => login(user))
    // .catch(() => logout());
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

const _logedUser = new User({
  config: {
    avatar:
      'https://www.google.com/s2/u/0/photos/public/AIbEiAIAAABDCP3d8JHk5tKWXCILdmNhcmRfcGhvdG8qKDgwNTQ1MGVmMDk4MThkMzc0NzllZGY5M2YyYzc5YTUwZmMxNWJiNjAwAecFeG_QETl0cjpqF-7hUNz8QkSf?sz=48',
    language: 'en',
    user_id: 1,
  },
  hasConfig: true,
  id: 1,
  language: null,
  name: 'Gurami Tateshvili',
});

const initState = {
  user: _logedUser,
  auth: true,
};
