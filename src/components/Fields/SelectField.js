import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default (p) => {
  const { options, width, ...rest } = p;

  const style = p.style ? p.style : { width: width };

  return (
    <TextField autoComplete='off' style={style} select={true} {...rest}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
