import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { FormControlLabel, Radio, FormControl } from '@material-ui/core';
import PanelField from 'components/ExpansionPanel/PanelField';

export default () => {
  const { getField, setField, isNetworkSelected } = useNewAdContext();
  const adType = getField('ad_type');
  const networks = getField('networks');

  const handleTypeRadioField = (e) => {
    setField('ad_type', e.target.name);
  };

  const isAdType = (type) => {
    return adType.value == type;
  };

  if (networks.value.facebook && isAdType('search_ads')) {
    setField('ad_type', 'conversions');
  }

  return (
    <PanelField
      title='Choose Network'
      content={[
        <FormControl fullWidth>
          <FormControlLabel
            control={
              <Radio
                checked={isAdType('conversions')}
                onChange={handleTypeRadioField}
                name='conversions'
              />
            }
            label='Conversions'
          />
        </FormControl>,
        <FormControl fullWidth>
          <FormControlLabel
            control={
              <Radio
                checked={isAdType('traffic_to_website')}
                onChange={handleTypeRadioField}
                name='traffic_to_website'
              />
            }
            label='Traffic to website'
          />
        </FormControl>,
        isNetworkSelected('google') && (
          <FormControl fullWidth>
            <FormControlLabel
              control={
                <Radio
                  disabled={isNetworkSelected('facebook')}
                  checked={isAdType('search_ads')}
                  onChange={handleTypeRadioField}
                  name='search_ads'
                />
              }
              label='Search Ads'
            />
          </FormControl>
        ),
        <FormControl fullWidth>
          <FormControlLabel
            control={
              <Radio
                checked={isAdType('retarget')}
                onChange={handleTypeRadioField}
                name='retarget'
              />
            }
            label='Retarget'
          />
        </FormControl>,
      ]}
    />
  );
};