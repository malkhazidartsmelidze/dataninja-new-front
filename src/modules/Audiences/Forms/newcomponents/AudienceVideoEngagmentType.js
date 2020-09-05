import React from 'react';
import PanelField from 'components/ExpansionPanel/PanelField';
import { SelectField } from 'components/Fields';

export default (props) => {
  const videoOptions = [
    { name: 'People Who Watch 3 seconds of your video', value: 'video_watched' },
    { name: 'People Who Watch 10 seconds of your video', value: 'video_view_10s' },
    {
      name: 'People Who Watch 15 seconds of your video or completed (ThruPlay)',
      value: 'video_view_15s',
    },
    { name: 'People Who Watch 25 percent of your video', value: 'video_view_25_percent' },
    { name: 'People Who Watch 50 percent of your video', value: 'video_view_50_percent' },
    { name: 'People Who Watch 75 percent of your video', value: 'video_view_75_percent' },
    { name: 'People Who Watch 95 percent of your video', value: 'video_completed' },
  ];

  return (
    <PanelField
      content={<SelectField style={{ width: 500 }} options={videoOptions} {...props} />}
    />
  );
};
