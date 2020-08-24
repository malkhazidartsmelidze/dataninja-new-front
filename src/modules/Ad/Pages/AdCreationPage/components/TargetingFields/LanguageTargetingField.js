import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem, CircularProgress } from '@material-ui/core';

export default () => {
  const { getField, setField, formConfig } = useNewAdContext();
  const language = getField('targeting_languages');

  const handleFieldChange = (e) => {
    const chosenLanguages = e.target.value;
    setField('targeting_languages', chosenLanguages);
  };

  return (
    <PanelField
      title='Choose language'
      content={
        <TextField
          value={language.value || ''}
          name='language'
          onChange={handleFieldChange}
          multiple
          select={true}
        >
          {Array.isArray(formConfig.languages) ? (
            formConfig.languages.map((option) => (
              <MenuItem key={option.key} value={option.key}>
                {option.name}
              </MenuItem>
            ))
          ) : (
            <CircularProgress />
          )}
        </TextField>
      }
    />
  );
};
