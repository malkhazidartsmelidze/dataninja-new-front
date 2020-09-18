import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default (props) => {
  const { state, setState } = useCreateAd();
  const [value, setValue] = useState(state.display_link);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === state.display_link) return;
    setValue(state.display_link);
  }, [state.display_link]);

  return (
    <PanelField
      content={
        <TextField
          label='Display Link'
          name='creative_display_link'
          placeholder='Enter Ad Long Headline'
          value={value}
          onChange={handleChange}
          {...props}
        />
      }
    />
  );
};
