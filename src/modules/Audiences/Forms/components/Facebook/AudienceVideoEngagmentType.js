import React, { useState } from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default () => {
  const videoOptions = [
    { name: 'People Who Watch 3 seconds of your video', value: '3' },
    { name: 'People Who Watch 10 seconds of your video', value: '10' },
    { name: 'People Who Watch 15 seconds of your video or completed (ThruPlay)', value: '15' },
    { name: 'People Who Watch 25 percent of your video', value: '25' },
    { name: 'People Who Watch 50 percent of your video', value: '50' },
    { name: 'People Who Watch 75 percent of your video', value: '75' },
    { name: 'People Who Watch 95 percent of your video', value: '95' },
  ];
  const [videoOption, setVideoOption] = useState('all');

  const onVideoOptionChange = (e) => {
    setVideoOption(e.target.value);
  };

  return (
    <PanelField
      content={
        <SelectField
          style={{ width: 400 }}
          value={videoOption}
          onChange={onVideoOptionChange}
          options={videoOptions}
        />
      }
    />
  );
};
