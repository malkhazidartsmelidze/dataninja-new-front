import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default ({ options, label, _ref, placeholder, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} variant='standard' label={label} placeholder={placeholder} />
        )}
        ref={_ref}
        {...rest}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));
