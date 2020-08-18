import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

export default ({ onChange }) => {
  const [googleChecked, setGoogleChecked] = useState(true);
  const [facebookChecked, setfacebookChecked] = useState(true);

  const handleGoogleChanged = (e) => {
    setGoogleChecked(e.target.checked);
    networksChanged();
  };

  const handleFacebookChanged = (e) => {
    setfacebookChecked(e.target.checked);
    networksChanged();
  };

  const networksChanged = () => {
    onChange({
      facebook: facebookChecked,
      google: googleChecked,
    });
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={facebookChecked}
            onChange={handleFacebookChanged}
            name='network'
            value='facebook'
          />
        }
        label='Facebook'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={googleChecked}
            onChange={handleGoogleChanged}
            name='network'
            value='google'
          />
        }
        label='Google'
      />
    </>
  );
};
