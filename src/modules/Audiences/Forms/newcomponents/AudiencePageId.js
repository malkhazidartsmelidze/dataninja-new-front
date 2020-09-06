import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import FacebookPageService from 'services/FacebookPageService';
import SyncFacebookPagesButton from 'modules/Page/components/SyncFacebookPagesButton';

export default (props) => {
  const [pages, setPages] = useState([]);

  const fetchPages = () => {
    FacebookPageService.getAll().then((_pages) => {
      if (!Array.isArray(_pages)) return;
      const pgs = _pages.map((p) => {
        return { name: p.name, value: p.id };
      });
      setPages(pgs);
    });
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <PanelField
      content={
        <SelectField
          InputProps={{
            startAdornment: <SyncFacebookPagesButton onDone={fetchPages} />,
          }}
          style={{ width: 500 }}
          options={pages}
          {...props}
        />
      }
    />
  );
};
