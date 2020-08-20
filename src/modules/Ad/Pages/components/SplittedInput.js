import React, { useState, useEffect } from 'react';
import { InputAdornment, Grid, IconButton, makeStyles } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiLink, mdiLinkOff } from '@mdi/js';

export default ({ children, splitted: _splitted, networks, onSplitProps }) => {
  const classes = useStyles();
  const [splitted, setSplitted] = useState(_splitted);
  const [renderChildren, setRenderChildren] = useState(children);
  if (!React.Children.only(children)) {
    throw 'Split Element has to have only one children';
  }

  const splitButton = (
    <IconButton onClick={() => setSplitted(!splitted)}>
      <Icon path={splitted ? mdiLink : mdiLinkOff} />
    </IconButton>
  );

  const mergeInputs = () => {
    const singleInput = React.cloneElement(children, {
      InputProps: {
        startAdornment: <InputAdornment position='start'>{splitButton}</InputAdornment>,
      },
    });

    setRenderChildren(singleInput);
  };

  const splitInputs = () => {
    const _chidrenToRender = [];

    networks.map((network) => {
      const splitProps = onSplitProps[network] ? onSplitProps[network] : {};
      const el = React.cloneElement(children, {
        label: network,
        key: network,
        className: classes.splittedInput,
        InputProps: {
          'data-network': network,
          startAdornment: <InputAdornment position='start'>{splitButton}</InputAdornment>,
          ...(splitProps.InputProps ? splitProps.InputProps : {}),
        },
        ...splitProps,
      });

      _chidrenToRender.push(el);
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

const useStyles = makeStyles((theme) => ({
  splittedInput: {
    marginRight: theme.spacing(2),
  },
}));
