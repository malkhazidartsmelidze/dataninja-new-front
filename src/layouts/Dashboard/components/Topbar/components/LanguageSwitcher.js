import React, { useEffect, useState } from 'react';
import useLanguage from 'store/LanguageContext';
import IconButtonMenu from 'common/@mui/IconButtonMenu';
import { mdiEarth } from '@mdi/js';

export default () => {
  const { changeLanguage, languages } = useLanguage();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      languages.map((lang) => {
        return { value: lang.getName(), code: lang.getCode() };
      })
    );
  }, [languages]);

  return (
    <IconButtonMenu
      id='language-switcher'
      icon={mdiEarth}
      options={options}
      onChoose={(opt) => changeLanguage(opt.code)}
    />
  );
};
