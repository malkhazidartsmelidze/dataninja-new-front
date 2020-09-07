import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { mdiSync } from '@mdi/js';
import Icon from '@mdi/react';
import FacebookPixelService from 'services/FacebookPixelService';

export default ({ onDone }) => {
  const [diabled, setDisabled] = useState(false);

  const sync = () => {
    setDisabled(true);
    FacebookPixelService.sync().then(() => {
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
