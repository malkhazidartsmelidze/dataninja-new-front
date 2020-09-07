import React, { useEffect, useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import FacebookTargetingService from 'services/FacebookTargetingService';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

export default (props) => {
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');

  const onInputChange = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    if (query.length < 2) return;
    FacebookTargetingService.searchCountries(query).then((res) => {
      console.log(res);
    });
  }, [query]);

  return (
    <PanelField
      content={
        <Fragment>
          <Autocomplete
            multiple
            id='tags-standard'
            options={options}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={onInputChange}
                variant='standard'
                label='Multiple values'
                placeholder='Favorites'
              />
            )}
          />
        </Fragment>
      }
    />
  );
};
