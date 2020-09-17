import React, { Fragment, useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import AutocompleteField from 'components/Fields/AutocompleteField';
import AdFormService from 'services/AdFormService';
import FacebookTargetingService from 'services/FacebookTargetingService';
import { mdiFacebook, mdiGoogle } from '@mdi/js';
import Icon from '@mdi/react';
import { ListItem } from '@material-ui/core';

export default () => {
  const [options, setOptions] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [query, setQuery] = useState('');

  const onLanguageAutoCompleteChange = (e, newValues) => {
    if (!Array.isArray(newValues)) return;
    if (newValues.length && newValues[0].value === '') newValues.splice(0, 1);
    setLanguages(newValues);
  };

  useEffect(() => {
    const deb = setTimeout(() => {
      FacebookTargetingService.searchLanguages(query).then((data) => {
        setOptions(data);
      });
    }, 500);

    return () => clearTimeout(deb);
  }, [query]);

  const icons = {
    facebook: mdiFacebook,
    google: mdiGoogle,
  };

  return (
    <PanelField
      content={
        <Fragment>
          {languages.map((l) => {
            console.log(l.name, l.networks);
            return (
              <Fragment>
                <ListItem>
                  {l.name} -
                  {l.networks.map((n) => {
                    return (
                      <Fragment>
                        <Icon path={icons[n]} />
                        <input
                          type='hidden'
                          name={`targetings[${n}_langauges][]`}
                          value={l[n + '_id']}
                        />
                      </Fragment>
                    );
                  })}
                </ListItem>
              </Fragment>
            );
          })}
          <AutocompleteField
            placeholder='Enter Languages'
            options={options}
            defaultValue={[{ name: 'All', value: '' }]}
            onChange={onLanguageAutoCompleteChange}
            onInputChange={(_, val, reason) => {
              if (!reason === 'input') return;
              setQuery(val);
            }}
          />
        </Fragment>
      }
    />
  );
};
