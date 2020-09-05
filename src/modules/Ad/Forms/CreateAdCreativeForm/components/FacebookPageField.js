import React, { useState } from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { CircularProgress } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';
import { useEffect } from 'react';
import { SelectField } from 'components/Fields';
import AdFormService from 'modules/Ad/Services/AdFormService';

export default (props) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    AdFormService.getFacebookPages().then((p) => {
      if (!Array.isArray(p)) return;
      setPages(p);
    });
  }, []);

  return (
    <PanelField
      content={
        <SelectField name='facebook_page_id' style={{ width: 200 }} options={pages} {...props} />
      }
    />
  );
};