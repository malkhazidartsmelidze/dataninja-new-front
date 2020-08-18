import React, { useEffect, useState } from 'react';
import IconButtonMenu from 'common/@mui/IconButtonMenu';
import { useUserData } from 'store/UserDataContext';
import UserData from 'common/objects/UserData/UserData';
import { mdiGoogle } from '@mdi/js';

export default () => {
  /** @var {UserData} */
  const { userData } = useUserData();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!(userData instanceof UserData)) return;

    setOptions(
      userData.getGoogleAccounts().map((acc) => {
        return { value: acc.name, id: acc.id };
      })
    );
  }, [userData]);

  return (
    <IconButtonMenu
      id='google-acc-switcher'
      icon={mdiGoogle}
      options={options}
      onChoose={(opt) => console.log(opt)}
    />
  );
};
