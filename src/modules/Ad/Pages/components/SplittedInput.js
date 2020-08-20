import React, { useState, useEffect } from 'react';
import { InputAdornment, Grid, IconButton } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiLink, mdiLinkOff } from '@mdi/js';

export default ({ children, splitted: _splitted, networks }) => {
  const [splitted, setSplitted] = useState(_splitted);
  const [renderChildren, setRenderChildren] = useState(children);
  if (!React.Children.only(children)) {
    throw 'Children must be only 1';
  }

  const splitButton = (
    <IconButton onClick={() => setSplitted(!splitted)}>
      <Icon path={splitted ? mdiLink : mdiLinkOff} />
    </IconButton>
  );

  const mergeInputs = () => {
    const singleInput = React.cloneElement(children, {
      sizes: { xs: 6 },
      InputProps: {
        startAdornment: <InputAdornment position='start'>{splitButton}</InputAdornment>,
      },
    });

    setRenderChildren(singleInput);
  };
  const splitInputs = () => {
    const _chidrenToRender = [];

    networks.map((network) => {
      _chidrenToRender.push(
        React.cloneElement(children, {
          sizes: { xs: 6 },
          InputProps: {
            'data-network': network,
            startAdornment: <InputAdornment position='start'>{splitButton}</InputAdornment>,
          },
        })
      );
    });

    setRenderChildren(_chidrenToRender);
  };

  useEffect(() => {
    if (!splitted) {
      return mergeInputs();
    } else {
      return splitInputs();
    }
  }, [splitted]);

  return renderChildren;
};
