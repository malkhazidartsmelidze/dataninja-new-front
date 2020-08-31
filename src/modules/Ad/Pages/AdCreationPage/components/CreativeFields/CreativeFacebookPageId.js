import React, { useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { TextField, CircularProgress } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { useEffect } from 'react';
import { SelectField } from 'components/Fields';

export default () => {
  const { setField, getField, formConfig } = useNewAdContext();
  const _facebookPageId = getField('facebook_page_id');
  const [facebookPageId, setFacebookPageID] = useState(_facebookPageId.value);

  useEffect(() => {
    if (facebookPageId == _facebookPageId.value) return;
    const deb = setTimeout(() => setField('facebook_page_id', facebookPageId), 500);
    return () => clearTimeout(deb);
  }, [facebookPageId]);

  if (!Array.isArray(formConfig.facebook_pages)) return <CircularProgress />;

  return (
    <PanelField
      content={
        <SelectField
          name='facebook_page_id'
          style={{ width: 200 }}
          options={formConfig.facebook_pages}
          value={facebookPageId}
          onChange={(e) => setFacebookPageID(e.target.value)}
        />
      }
    />
  );
};
