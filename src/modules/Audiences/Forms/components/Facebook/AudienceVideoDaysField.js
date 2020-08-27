import React from 'react';
import { TextField } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  const [value, setValue] = useState(365);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <PanelField
      content={
        <TextField
          name='audience_name'
          value={value}
          onChange={onChange}
          style={{ width: 300 }}
          placeholder='Enter Days'
        />
      }
    />
  );
};
