import React, { useEffect, useState } from 'react';
import IconButtonMenu from 'common/@mui/IconButtonMenu';
import { useUserConfig } from 'store/UserConfigContext';
import UserConfig from 'common/objects/User/UserConfig';
import { mdiGoogle } from '@mdi/js';

export default () => {
  /** @var {UserConfig} */
  const { userConfig, setGoogleAccount } = useUserConfig();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    UserConfig.checkLoaded(userConfig) &&
      setOptions(
        userConfig.getGoogleAccounts().map((acc) => {
          return { value: acc.name, id: acc.id };
        })
      );
  }, [userConfig]);

  return (
    <IconButtonMenu
      id='google-acc-switcher'
      icon={mdiGoogle}
      options={options}
      anchor='bottom'
      onChoose={(opt) => console.log(opt)}
    />
  );
};
