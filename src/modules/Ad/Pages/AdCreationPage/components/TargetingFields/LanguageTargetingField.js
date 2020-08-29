import React, { useEffect, useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem, CircularProgress, Checkbox, MenuList } from '@material-ui/core';

export default () => {
  const { getField, setField, formConfig } = useNewAdContext();
  const [languages, setLanguages] = useState(getField('targeting_languages').value);

  useEffect(() => {
    const deb = setTimeout(() => setField('targeting_languages', languages));
    return () => clearTimeout(deb);
  }, [languages]);

  const isChecked = (key) => {
    return languages.indexOf(key) > -1;
  };

  const handleChange = (key) => {
    setLanguages((old) => {
      if (isChecked(key)) {
        old.splice(old.indexOf(key), 1);
      } else {
        old.push(key);
      }
      return [...old];
    });
  };

  return (
    <PanelField
      title='Choose language'
      content={
        <MenuList>
          {Array.isArray(formConfig.languages) ? (
            formConfig.languages.map((option) => (
              <div style={{ display: 'flex' }} onClick={() => handleChange(option.key)}>
                <Checkbox checked={isChecked(option.key)} />
                <MenuItem key={option.key} value={option.key}>
                  {option.name}
                </MenuItem>
              </div>
            ))
          ) : (
            <CircularProgress />
          )}
        </MenuList>
      }
    />
  );
};
