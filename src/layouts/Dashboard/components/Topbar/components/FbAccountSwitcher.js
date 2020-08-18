import React, { useEffect, useState } from 'react';
import IconButtonMenu from 'common/@mui/IconButtonMenu';
import { useUserConfig } from 'store/UserConfigContext';
import UserConfig from 'common/objects/User/UserConfig';
import { mdiFacebook } from '@mdi/js';

export default () => {
  /** @var UserConfig */
  const { userConfig } = useUserConfig();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!(userConfig instanceof UserConfig)) return;

    setOptions(
      userConfig.getFacebookAccounts().map((acc) => {
        return { value: acc.name, id: acc.id };
      })
    );
  }, [userConfig]);

  return (
    <IconButtonMenu
      id='google-acc-switcher'
      icon={mdiFacebook}
      options={options}
      onChoose={(opt) => console.log(opt)}
    />
  );
};
