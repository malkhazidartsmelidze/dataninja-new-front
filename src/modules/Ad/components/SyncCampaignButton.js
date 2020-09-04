import React, { useState } from 'react';
import CampaignService from '../Services/CampaignService';
import { IconButton } from '@material-ui/core';
import { mdiSync } from '@mdi/js';
import Icon from '@mdi/react';

export default ({ network, onDone }) => {
  const [diabled, setDisabled] = useState(false);

  if (!network) return null;

  const syncCampaign = () => {
    setDisabled(true);
    CampaignService.sync(network).then(() => {
      setDisabled(false);
      onDone && onDone();
    });
  };

  return (
    <IconButton onClick={syncCampaign} disabled={diabled}>
      <Icon path={mdiSync} />
    </IconButton>
  );
};
