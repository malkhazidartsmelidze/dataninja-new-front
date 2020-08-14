import React, { createContext, useState, useContext } from 'react';
import api from 'common/api';

export const ApiContext = createContext({});

export const ApiContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loaders, setLoaders] = useState({});

  const _setLoading = (name, bool) => {
    if (!name) {
      setLoading(bool);
    } else {
      if (bool === false) {
        delete loaders[name];
        setLoaders({ ...loaders });
      } else {
        setLoaders({ ...loaders, [name]: bool });
      }
    }
  };

  const call = (_api, name) => {
    _setLoading(name, true);
    _api
      .catch(() => {
        _setLoading(name, false);
      })
      .then(() => {
        _setLoading(name, false);
      });
  };

  const isLoading = (name, isFinished) => {
    return loaders[name] === true;
  };

  return (
    <ApiContext.Provider
      value={{
        call: call,
        api: api,
        loading: loading,
        isLoading: isLoading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default () => useContext(ApiContext);
