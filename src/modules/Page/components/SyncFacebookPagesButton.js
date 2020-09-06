import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { mdiSync } from '@mdi/js';
import Icon from '@mdi/react';
import FacebookPageService from 'services/FacebookPageService';

export default ({ onDone }) => {
  const [diabled, setDisabled] = useState(false);

  const sync = () => {
    setDisabled(true);
    FacebookPageService.sync().then(() => {
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
