import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useDispatch } from 'react-redux';

import { history } from '../../../routes';
import { Actions as SessionActions } from '../../../store/actions/session';

export default function HeaderMenu() {
  const disptach = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    disptach(SessionActions.logoutUserRequest());
    handleClose();
  };

  return (

    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {
          handleClose();
          history.push('/dashboard/my-account');
        }}
        >
          Minha Conta
        </MenuItem>
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
    </div>
  );
}
