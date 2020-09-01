import React, { useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import PanelField from 'components/ExpansionPanel/PanelField';
import { TextField, MenuItem, CircularProgress, Grid } from '@material-ui/core';
import { useEffect } from 'react';

export default () => {
  const { getField, setField, formConfig } = useNewAdContext();
  const link = getField('creative_link');
  const [customInputActive, setCustomInputActive] = useState(false);
  const [stateLink, setStateLink] = useState(link.value);

  useEffect(() => {
    if (link.value == stateLink) return;
    const deb = setTimeout(() => setField('creative_link', stateLink), 500);
    return () => clearTimeout(deb);
  }, [stateLink]);

  const handleFieldChange = (e) => {
    setStateLink(e.target.value);
  };

  const handleLinkChange = (e) => {
    setStateLink(e.target.value);
    setCustomInputActive(e.target.value == '');
  };

  return (
    <PanelField
      title='Choose language'
      content={
        <Grid container spacing={2}>
          <Grid item>
            <TextField
              value={stateLink}
              name='language'
              onChange={handleLinkChange}
              label='Enter Custom Url'
            />
          </Grid>
          <Grid item>
            <TextField
              value={stateLink}
              name='language'
              style={{ width: 400 }}
              onChange={handleFieldChange}
              disabled={!customInputActive}
              label='Select From Active pages'
              select={true}
            >
              {Array.isArray(formConfig.links) ? (
                formConfig.links.map((option) => (
                  <MenuItem key={option.key} value={option.key}>
                    {option.name}
                  </MenuItem>
                ))
              ) : (
                <CircularProgress />
              )}
            </TextField>
          </Grid>
        </Grid>
      }
    />
  );
};
