import React, { useEffect, useState, Fragment } from 'react';
import { useUserConfig } from 'store/UserConfigContext';
import UserConfig from 'common/objects/User/UserConfig';
import { mdiGoogle, mdiFacebook } from '@mdi/js';
import HeaderSwitcher from './HeaderSwitcher';
import UserActions from 'Models/User/UserActions';
import useUser from 'store/UserContext';
import AdAccount from 'Models/AdAccount/AdAccount';

export default () => {
  const { config } = useUser();

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
    });
  };

  const onChangeFacebookAccount = (accountId) => {
    AdAccount.service.setDefaultFacebookAccount(accountId).then(() => {
      setFacebookAccount(accountId);
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
