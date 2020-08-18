import React from 'react';
import { useNewAdContext } from 'store/NewAdContext';
import { FormControlLabel, Radio } from '@material-ui/core';

export default () => {
  const { isAdType, setAdType, isNetworkSelected } = useNewAdContext();

  const handleTypeCheck = (e) => {
    setAdType(e.target.name);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Radio checked={isAdType('conversions')} onChange={handleTypeCheck} name='conversions' />
        }
        label='Conversions'
      />
      <FormControlLabel
        control={
          <Radio
            checked={isAdType('traffic_to_website')}
            onChange={handleTypeCheck}
            name='traffic_to_website'
          />
        }
        label='Traffic to website'
      />
      {
        <FormControlLabel
          control={
            <Radio
              disabled={isNetworkSelected('facebook')}
              checked={isAdType('search_ads')}
              onChange={handleTypeCheck}
              name='search_ads'
            />
          }
          label='Search Ads'
        />
      }

      <FormControlLabel
        control={
          <Radio checked={isAdType('retarget')} onChange={handleTypeCheck} name='retarget' />
        }
        label='Retarget'
      />
    </div>
  );
};
