import React, { useEffect, useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';
import FacebookPixelService from 'services/FacebookPixelService';
import SyncFacebookPagesButton from 'modules/Page/components/SyncFacebookPagesButton';
import AudienceService from 'services/AudienceService';
import { Grid } from '@material-ui/core';

export default (props) => {
  const [type, setType] = useState('audiences');
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState('');

  const fetchOptions = () => {
    setOptions([]);
    setValue('');
    if (type === 'audiences') {
      AudienceService.getAudiences('facebook').then((audiences) => {
        setOptions(
          audiences.map((aud) => {
            return { value: aud.id, name: aud.name };
          })
        );
      });
    } else if (type === 'pixels') {
      FacebookPixelService.getAll().then((pixels) => {
        setOptions(
          pixels.map((px) => {
            return { value: px.id, name: px.name };
          })
        );
      });
    }
  };

  useEffect(() => {
    fetchOptions();
  }, [type]);

  return (
    <PanelField
      content={
        <Grid container spacing={2} direction='column'>
          <input type='hidden' name='source_type' value={type} />
          <input type='hidden' name='source' value={value} />
          <Grid item>
            <SelectField
              label='Select Type'
              style={{ width: 300 }}
              onChange={(e) => setType(e.target.value)}
              defaultValue={type}
              options={[
                { name: 'Audiences', value: 'audiences' },
                { name: 'Pixels', value: 'pixels' },
              ]}
            />
          </Grid>
          <Grid item>
            <SelectField
              label='Select Source'
              style={{ width: 300 }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              options={options}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
