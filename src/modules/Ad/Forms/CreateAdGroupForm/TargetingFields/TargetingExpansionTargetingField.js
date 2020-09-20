import React, { useState, Fragment } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { Typography, Slider } from '@material-ui/core';

export default (props) => {
  const [value, setValue] = useState(props.value || 50);

  const handleFieldChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <PanelField
      content={
        <Fragment>
          <input type='hidden' name='targetings[targeting_expansion]' value={value} />
          <Typography gutterBottom>{value}%</Typography>
          <Slider defaultValue={value} onChange={handleFieldChange} />
        </Fragment>
      }
    />
  );
};
