import React, { useEffect, useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem, CircularProgress, Checkbox, MenuList } from '@material-ui/core';
import AutocompleteField from 'components/Fields/AutocompleteField';

export default () => {
  const { getField, setField, formConfig } = useNewAdContext();
  const [languages, setLanguages] = useState(getField('targeting_languages').value);

  useEffect(() => {
    const deb = setTimeout(() => setField('targeting_languages', languages));
    return () => clearTimeout(deb);
  }, [languages]);

  const onLanguageAutoCompleteChange = (e, newValues) => {
    if (!Array.isArray(newValues)) return;
    setLanguages(newValues.map((opt) => opt.key));
  };

  return (
    <PanelField
      title='Choose language'
      content={
        <AutocompleteField
          placeholder='Enter Languages'
          options={formConfig.languages || []}
          onChange={onLanguageAutoCompleteChange}
        />
      }
    />
  );
};
