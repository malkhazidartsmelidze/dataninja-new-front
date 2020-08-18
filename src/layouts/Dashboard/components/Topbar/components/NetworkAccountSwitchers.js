import React, { useEffect, useState } from 'react';
import { useUserConfig } from 'store/UserConfigContext';
import UserConfig from 'common/objects/User/UserConfig';
import { mdiGoogle, mdiFacebook } from '@mdi/js';
import HeaderSwitcher from './HeaderSwitcher';

export default () => {
  const { userConfig, setGoogleAccount, googleAccount, fbAccount, setFbAccount } = useUserConfig();
  const [googleOptions, setGoogleOptions] = useState([]);
  const [fbOptions, setFbOptions] = useState([]);

  useEffect(() => {
    if (!UserConfig.checkLoaded(userConfig)) return;

    setGoogleOptions(
      userConfig.getGoogleAccounts().map((acc) => {
        return { name: acc.name, value: acc.id };
      })
    );
    setFbOptions(
      userConfig.getFacebookAccounts().map((acc) => {
        return { name: acc.name, value: acc.id };
      })
    );
  }, [userConfig]);

  return (
    <>
      <HeaderSwitcher
        icon={mdiGoogle}
        options={googleOptions}
        value={googleAccount}
        onChange={(val) => setGoogleAccount(val)}
      />
      <HeaderSwitcher
        icon={mdiFacebook}
        options={fbOptions}
        value={fbAccount}
        onChange={(val) => setFbAccount(val)}
      />
    </>
  );
};
