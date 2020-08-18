import React from 'react';
import { /* Icon, */ Fade, MenuItem, Menu, IconButton, Checkbox, Radio } from '@material-ui/core';
import Icon from '@mdi/react';

export default ({ icon, id, ButtonProps = {}, MenuProps = {}, options, onChoose }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const optionChosen = (option) => {
    onChoose(option);
    // handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-controls={id} aria-haspopup='true' onClick={handleClick} {...ButtonProps}>
        <Icon path={icon} />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        {...MenuProps}
      >
        {options.map((option, key) => {
          return (
            <MenuItem key={key} onClick={() => optionChosen(option)}>
              {option.value}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
