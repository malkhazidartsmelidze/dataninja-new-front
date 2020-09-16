import React, { Fragment, useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import AutocompleteField from 'components/Fields/AutocompleteField';
import AdFormService from 'services/AdFormService';

export default () => {
  const [languageValues, setLanguageValues] = useState([]);
  const [languages, setLanguages] = useState([]);

  const onLanguageAutoCompleteChange = (e, newValues) => {
    if (!Array.isArray(newValues)) return;
    if (newValues.length && newValues[0].value === '') newValues.splice(0, 1);
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
      content={
        <Fragment>
          {languages.map((l) => {
            return <input type='hidden' name='targetings[language][]' value={l.value} />;
          })}
          <AutocompleteField
            placeholder='Enter Languages'
            options={languageValues || []}
            defaultValue={[{ name: 'All', value: '' }]}
            onChange={onLanguageAutoCompleteChange}
          />
        </Fragment>
      }
    />
  );
};
