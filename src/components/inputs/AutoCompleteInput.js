import React, { Fragment, useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import TextInput from './TextInput';
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import api from 'common/api';

const AutoCompleteInput = (p) => {
  const { sizes, onChange, name, defaultValue, options: autocompleteoptionid, ...rest } = p;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    api
      .autoComplete({
        field_id: autocompleteoptionid,
      })
      .then((data) => {
        if ((!data || !data.success) && active) return;
        setOptions(data.result);
      });

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Grid item {...sizes}>
      <Autocomplete
        id={`autocomplete_${autocompleteoptionid}`}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        defaultValue={defaultValue}
        getOptionSelected={(option, value) => option.value === value.value}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.value)}
        options={options}
        loading={loading}
        size='small'
        onChange={(_e, value) => {
          onChange(name, value);
        }}
        renderInput={(params) => {
          // console.log(params, rest);
          return (
            <TextInput
              {...params}
              {...rest}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <Fragment>
                    {loading ? <CircularProgress color='inherit' size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </Fragment>
                ),
              }}
            />
          );
        }}
      />
    </Grid>
  );
};

export default AutoCompleteInput;
