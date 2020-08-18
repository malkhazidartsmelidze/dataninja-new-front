import React, { useState, useEffect } from 'react';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import api from 'common/api'; // was common api
import TextInput from './TextInput';
import Grid from '@material-ui/core/Grid';

const filter = createFilterOptions();

let optionTimeout = null;

export default function FreeSoloCreateOption(p) {
  const { sizes, name, onChange, defaultValue, options: autocompleteoptionid, ...rest } = p;
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');

  const fetchOptions = () => {
    api
      .autoComplete({
        field_id: autocompleteoptionid,
        q: query,
      })
      .then((data) => {
        if (!data || !data.success) return;
        setOptions(data.result);
      });
  };

  useEffect(() => {
    if (optionTimeout) clearTimeout(optionTimeout);
    optionTimeout = setTimeout(fetchOptions, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Grid item {...sizes}>
      <Autocomplete
        freeSolo
        options={options}
        defaultValue={defaultValue}
        renderOption={(option) => option.value}
        style={{ marginBottom: '4px' }}
        renderInput={(params) => (
          <TextInput {...params} {...rest} onChange={(e) => setQuery(e.target.value)} />
        )}
        size='small'
        onChange={(_event, newValue) => {
          if (newValue && newValue.inputValue) {
            setValue({
              value: newValue.inputValue,
              is_new: true,
            });
          } else {
            setValue(newValue);
          }
          onChange(name, newValue);
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '' && !filtered.length) {
            filtered.push({
              inputValue: params.inputValue,
              value: params.inputValue,
            });
          }

          return filtered;
        }}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.value;
        }}
      />
    </Grid>
  );
}
