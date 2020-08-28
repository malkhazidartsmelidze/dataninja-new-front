import React, { useEffect, useState, Fragment } from 'react';
import { useUserConfig } from 'store/UserConfigContext';
import UserConfig from 'common/objects/User/UserConfig';
import { mdiGoogle, mdiFacebook } from '@mdi/js';
import HeaderSwitcher from './HeaderSwitcher';
import UserActions from 'Models/User/UserActions';
import useUser from 'store/UserContext';

export default () => {
  const { config } = useUser();
  // const googleAccount = config.getDefaultAccount('google');
  // const fbAccount = config.getDefaultAccount('facebook');
  const { userConfig, setGoogleAccount, googleAccount, fbAccount, setFbAccount } = useUserConfig();
  const [googleOptions, setGoogleOptions] = useState([]);
  const [fbOptions, setFbOptions] = useState([]);

  useEffect(() => {
    console.log(config);
    setGoogleOptions(
      config.getAdAccounts('google').map((acc) => {
        return { name: acc.name, value: acc.id };
      })
    );
    setFbOptions(
      config.getAdAccounts('facebook').map((acc) => {
        return { name: acc.name, value: acc.id };
      })
    );
  }, [config]);

  useEffect(() => {
    UserActions.service.setDefaulGoogleAccount(googleAccount).then((data) => console.log(data));
  }, [googleAccount]);

  useEffect(() => {
    UserActions.service.setDefaulFacebookAccount(fbAccount).then((data) => console.log(data));
  }, [fbAccount]);

  return (
    <Fragment>
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
    </Fragment>
  );
};
