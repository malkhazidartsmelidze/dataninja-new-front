import React, { useEffect, useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import FacebookTargetingService from 'services/FacebookTargetingService';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

export default (props) => {
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onCountriesChange = (_, newValue) => {
    setCountries(newValue);
  };

  const searchLocation = () => {
    FacebookTargetingService.searchCountries(query).then((res) => {
      if (!Array.isArray(res)) return;
      setOptions(res);
    });
  };

  useEffect(() => {
    if (query.length < 2) return setOptions([]);
    const deb = setTimeout(() => searchLocation(), 300);
    return () => clearTimeout(deb);
  }, [query]);

  return (
    <PanelField
      content={
        <Fragment>
          {countries.map((c) => {
            return <input type='hidden' name='countries[]' value={c.value} />;
          })}
          <Autocomplete
            multiple
            options={options}
            onChange={onCountriesChange}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={onInputChange}
                variant='standard'
                label='Search Countries'
                placeholder='Enter Min 2 symbol'
              />
            )}
          />
        </Fragment>
      }
    />
  );
};
