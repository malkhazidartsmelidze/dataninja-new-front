import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import AutocompleteField from 'components/Fields/AutocompleteField';
import AdFormService from 'modules/Ad/Services/AdFormService';

export default () => {
  const [languageValues, setLanguageValues] = useState([]);
  const [languages, setLanguages] = useState([]);

  const onLanguageAutoCompleteChange = (e, newValues) => {
    if (!Array.isArray(newValues)) return;
    setLanguages(newValues.map((opt) => opt.value));
  };

  useEffect(() => {
    AdFormService.getAllLanguages().then((data) => {
      if (!Array.isArray(data)) return;
      setLanguageValues(data);
    });
  }, []);

  return (
    <PanelField
      title='Choose language'
      content={
        <AutocompleteField
          placeholder='Enter Languages'
          options={languageValues || []}
          onChange={onLanguageAutoCompleteChange}
        />
      }
    />
  );
};
