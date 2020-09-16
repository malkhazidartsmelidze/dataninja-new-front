import React, { Fragment, useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import AutocompleteField from 'components/Fields/AutocompleteField';
import FacebookTargetingService from 'services/FacebookTargetingService';

export default () => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState('');

  const onChange = (e, newValues) => {
    if (!Array.isArray(newValues)) return;
    setSelected(newValues.map((opt) => opt.value));
  };

  useEffect(() => {
    if (query.length <= 1) return;

    const deb = setTimeout(() => {
      FacebookTargetingService.searchInterests(query).then((data) => {
        setOptions(data);
      });
    }, 400);

    return () => clearTimeout(deb);
  }, [query]);

  return (
    <PanelField
      content={
        <Fragment>
          {selected.map((l) => {
            return <input type='hidden' name='targetings[language][]' value={l.value} />;
          })}
          <AutocompleteField
            placeholder='Enter inerests'
            options={options || []}
            onChange={onChange}
            inputValue={query}
            onInputChange={(_, val, reason) => {
              console.log(val, reason);
              if (!reason === 'input') return;
              setQuery(val);
            }}
          />
        </Fragment>
      }
    />
  );
};
