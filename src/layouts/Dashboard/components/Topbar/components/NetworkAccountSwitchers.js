import React, { useEffect, useState, Fragment } from 'react';
import { mdiGoogle, mdiFacebook } from '@mdi/js';
import HeaderSwitcher from './HeaderSwitcher';
import useUser from 'store/UserContext';
import AdAccount from 'Models/AdAccount/AdAccount';

export default () => {
  const { config, setDefaultAccounts, defaultAccounts } = useUser();

  const [googleAccount, setGoogleAccount] = useState(config.getDefaultAccountId('google'));
  const [facebookAccount, setFacebookAccount] = useState(config.getDefaultAccountId('facebook'));
  const [googleOptions, setGoogleOptions] = useState([]);
  const [facebookOptions, setFacebookbOptions] = useState([]);

  useEffect(() => {
    setGoogleOptions(() => {
      return config.getAdAccounts('google').map((acc) => {
        return { name: acc.name, value: acc.id };
      });
    });
    setFacebookbOptions(() => {
      return config.getAdAccounts('facebook').map((acc) => {
        return { name: acc.name, value: acc.id };
      });
    });
  }, [config]);

  const onChangeGoogleAccount = (accountId) => {
    AdAccount.service.setDefaultGoogleAccount(accountId).then(() => {
      setGoogleAccount(accountId);
      setDefaultAccounts({ ...defaultAccounts, google: accountId });
    });
  };

  const onChangeFacebookAccount = (accountId) => {
    AdAccount.service.setDefaultFacebookAccount(accountId).then(() => {
      setFacebookAccount(accountId);
      setDefaultAccounts({ ...defaultAccounts, facebook: accountId });
    });
  };

  return (
    <Fragment>
      <HeaderSwitcher
        icon={mdiGoogle}
        options={googleOptions}
        value={googleAccount}
        onChange={onChangeGoogleAccount}
      />
      <HeaderSwitcher
        icon={mdiFacebook}
        options={facebookOptions}
        value={facebookAccount}
        onChange={onChangeFacebookAccount}
      />
    </Fragment>
  );
};
