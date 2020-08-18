import React, { useEffect, useState } from 'react';
import IconButtonMenu from 'common/@mui/IconButtonMenu';
import { useUserConfig } from 'store/UserConfigContext';
import UserConfig from 'common/objects/User/UserConfig';
import { mdiGoogle } from '@mdi/js';
import { Grid, Typography } from '@material-ui/core';
import { HeaderSwitcher } from '.';

export default () => {
  /** @var {UserConfig} */
  const { config, userConfig, setGoogleAccount } = useUserConfig();
  const googleAccount = UserConfig.checkLoaded(userConfig) ? 1 : 2;
  const [options, setOptions] = useState([]);
  console.log(config);
  useEffect(() => {
    UserConfig.checkLoaded(userConfig) &&
      setOptions(
        userConfig.getGoogleAccounts().map((acc) => {
          return { name: acc.name, value: acc.id };
        })
      );
  }, [userConfig]);

  return (
    <HeaderSwitcher
      icon={mdiGoogle}
      options={options}
      value={googleAccount}
      onChoose={(opt) => setGoogleAccount(opt.code)}
    />
  );
};
