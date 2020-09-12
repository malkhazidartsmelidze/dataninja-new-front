import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import FacebookPixelService from 'services/FacebookPixelService';
import SyncPixelsButton from 'modules/Pixel/components/SyncPixelsButton';

export default (props) => {
  const [pixels, setPixels] = useState([]);

  const fetchPixels = () => {
    FacebookPixelService.getAll().then((pxs) => {
      if (!Array.isArray(pxs)) return;
      const pixs = pxs.map((p) => {
        return { name: p.name, value: p.id };
      });
      setPixels(pixs);
    });
  };

  useEffect(() => {
    fetchPixels();
  }, []);

  return (
    <PanelField
      content={
        <SelectField
          InputAdornment={{
            startAdornment: <SyncPixelsButton onDone={fetchPixels} />,
          }}
          style={{ width: 500 }}
          options={pixels}
          name='creative_pixel_id'
        />
      }
    />
  );
};
