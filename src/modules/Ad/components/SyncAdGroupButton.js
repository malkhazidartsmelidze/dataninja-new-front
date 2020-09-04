import React, { useState } from 'react';
import AdGroupService from '../Services/AdGroupService';
import { IconButton } from '@material-ui/core';
import { mdiSync } from '@mdi/js';
import Icon from '@mdi/react';

export default ({ network, onDone }) => {
  const [diabled, setDisabled] = useState(false);

  if (!network) return null;

  const sync = () => {
    setDisabled(true);
    AdGroupService.sync(network).then(() => {
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
