import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { useEffect } from 'react';
import { SelectField } from 'components/Fields';
import AdFormService from 'services/AdFormService';
import useCreateAd from 'modules/Ad/store/CreateAdContext';

export default (props) => {
  const [pages, setPages] = useState([]);
  const { state, setState } = useCreateAd();

  useEffect(() => {
    AdFormService.getFacebookPages().then((p) => {
      if (!Array.isArray(p)) return;
      setPages(p);
    });
  }, []);

  const handleChange = (e) => {
    setState({ page_id: e.target.value });
  };

  return (
    <PanelField
      content={
        <SelectField
          label='Choose Facebook Page'
          name='creative_facebook_page_id'
          style={{ width: 200 }}
          options={pages}
          value={state.page_id}
          onChange={handleChange}
          {...props}
        />
      }
    />
  );
};
