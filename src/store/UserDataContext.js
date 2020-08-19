import React, { useContext, useState, createContext, useEffect } from 'react';
import User from 'common/objects/User';
import UserData from 'common/objects/UserData/UserData';
import useUser from 'store/UserContext';

const UserDataContext = createContext('user');

export const UserDataContextProvider = ({ children }) => {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user instanceof User) return;

    UserData.service.fetch().then((userData) => setUserData(userData));
  }, [user]);

  return (
    <UserDataContext.Provider
      value={{
        userData: userData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
