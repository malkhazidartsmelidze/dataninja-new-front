import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { mdiSync } from '@mdi/js';
import Icon from '@mdi/react';
import AudienceService from '../Services/AudienceService';

export default ({ network, onDone }) => {
  const [diabled, setDisabled] = useState(false);

  if (!network) return null;

  const sync = () => {
    setDisabled(true);
    AudienceService.sync(network).then(() => {
      setDisabled(false);
      onDone && onDone();
    });
  };

  return (
    <IconButton onClick={sync} disabled={diabled}>
      <Icon path={mdiSync} />
    </IconButton>
  );
};
