import React, { Fragment, useEffect, useRef, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import AutocompleteField from 'components/Fields/AutocompleteField';
import FacebookTargetingService from 'services/FacebookTargetingService';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';

export default () => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState('');

  const [suggestions, setSuggestions] = useState([]);
  const autoCompleteRef = useRef();

  const onChange = (e, newValues) => {
    if (!Array.isArray(newValues)) return;
    const values = {};
    setSelected((o) => {
      newValues.map((n) => {
        o[n.value] = n;
      });

      return { ...o };
    });
  };

  useEffect(() => {
    if (query.length <= 1) return;

    const deb = setTimeout(() => {
      FacebookTargetingService.searchTargetings(query).then((data) => {
        setOptions(data);
      });
    }, 400);

    return () => clearTimeout(deb);
  }, [query]);

  const getSuggestions = () => {
    console.log(selected);
    FacebookTargetingService.getSuggestions({
      targeting_list: selected,
    }).then((data) => {
      setOptions([]);
      setSuggestions(data);
      console.log(autoCompleteRef);
    });
  };

  return (
    <PanelField
      content={
        <Fragment>
          {Object.values(selected).map((l, key) => {
            return (
              <Fragment>
                <input
                  key={l.value}
                  type='hidden'
                  name={`targetings[interests][${l.type}][]`}
                  value={l.value}
                />
              </Fragment>
            );
          })}
          {Object.values(suggestions).map((suggestion) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    key={suggestion.id}
                    onChange={(e) => {
                      setSelected((oldSelecteds) => {
                        oldSelecteds[suggestion.value] = suggestion;
                        return { ...oldSelecteds };
                      });
                    }}
                  />
                }
                key={suggestion.id}
                label={suggestion.name}
              />
            );
          })}
          <AutocompleteField
            placeholder='Enter inerests'
            openOnFocus={true}
            options={options || []}
            onChange={onChange}
            inputValue={query}
            onInputChange={(_, val, reason) => {
              if (!reason === 'input') return;
              setQuery(val);
            }}
            // _ref={autoCompleteRef}
          />
          <Button onClick={getSuggestions}>Get Suggestions</Button>
        </Fragment>
      }
    />
  );
};
