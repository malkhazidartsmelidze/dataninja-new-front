import React, { useEffect, useState } from 'react';
import IconButtonMenu from 'common/@mui/IconButtonMenu';
import { useUserConfig } from 'store/UserConfigContext';
import UserConfig from 'common/objects/User/UserConfig';
import { mdiFacebook } from '@mdi/js';
import { HeaderSwitcher } from '.';

export default () => {
  /** @var UserConfig */
  const { userConfig, setFbAccount } = useUserConfig();
  const fbAccount = 167;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    UserConfig.checkLoaded(userConfig) &&
      setOptions(
        userConfig.getFacebookAccounts().map((acc) => {
          return { name: acc.name, value: acc.id };
        })
      );
  }, [userConfig]);

  return (
    <HeaderSwitcher
      icon={mdiFacebook}
      options={options}
      value={fbAccount}
      onChoose={(opt) => setFbAccount(opt.code)}
    />
  );
};
