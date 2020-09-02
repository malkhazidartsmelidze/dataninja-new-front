import React, { useEffect, useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem, CircularProgress, Typography, Slider } from '@material-ui/core';

export default () => {
  const { getField, setField } = useNewAdContext();
  const expansion = getField('targeting_expansion');
  const [value, setValue] = useState(expansion.value);

  const handleFieldChange = (_, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value == expansion.value) return;
    const timeOut = setTimeout(() => setField('targeting_expansion', value), 500);

    return () => clearTimeout(timeOut);
  }, [value]);

  return (
    <PanelField
      title='Choose Targeting expansion'
      content={
        <>
          <Typography gutterBottom>{value}%</Typography>
          <Slider defaultValue={value} onChange={handleFieldChange} />
        </>
      }
    />
  );
};
