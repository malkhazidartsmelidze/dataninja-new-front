import React, { useEffect, useState } from 'react';
import useLanguage from 'store/LanguageContext';
import { mdiEarth } from '@mdi/js';
import HeaderSwitcher from './HeaderSwitcher';

export default () => {
  const { changeLanguage, languages, language } = useLanguage();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      languages.map((lang) => {
        return { name: lang.getName(), value: lang.getCode() };
      })
    );
  }, [languages]);

  return (
    <HeaderSwitcher
      icon={mdiEarth}
      options={options}
      value={language}
      onChange={(val) => changeLanguage(val)}
    />
  );
};
