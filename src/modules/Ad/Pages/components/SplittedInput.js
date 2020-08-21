import React, { useState, useEffect } from 'react';
import { InputAdornment, Grid, IconButton, makeStyles } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiLink, mdiLinkOff } from '@mdi/js';
import { useNewAdContext } from 'store/NewAdContext';

export default ({
  children,
  splitted: _splitted,
  networks,
  onSplitProps,
  disableSplit,
  disableMerge,
}) => {
  const classes = useStyles();
  const [splitted, setSplitted] = useState(_splitted);
  const [renderChildren, setRenderChildren] = useState(children);

  if (!React.Children.only(children)) {
    throw 'Split Element has to have only one children';
  }

  const splitButton = (
    <IconButton
      onClick={() => setSplitted(!splitted)}
      disabled={(disableMerge && splitted) || (disableSplit && !splitted)}
    >
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
      const InputProps = {
        'data-network': network,
        startAdornment: <InputAdornment position='start'>{splitButton}</InputAdornment>,
        endAdornment: splitProps?.InputProps?.endAdornment,
      };
      delete splitProps.InputProps;
      const el = React.cloneElement(children, {
        key: network,
        className: classes.splittedInput,
        InputProps: InputProps,
        ...splitProps,
      });

      _chidrenToRender.push(el);
    });

    setRenderChildren(_chidrenToRender);
  };

  useEffect(() => {
    if (!splitted) {
      mergeInputs();
    } else {
      splitInputs();
    }
  }, [splitted]);

  return renderChildren;
};

const useStyles = makeStyles((theme) => ({
  splittedInput: {
    marginRight: theme.spacing(2),
  },
}));
