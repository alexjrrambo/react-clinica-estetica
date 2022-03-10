import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Button } from '@material-ui/core';
import { Container } from './styles';

export default function HeaderSiteMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuIcon />
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
        }}
        >
          <Button href="#features" color="inherit">Funcionalidades</Button>
        </MenuItem>
        <hr />
        <MenuItem onClick={() => {
          handleClose();
        }}
        >
          <Button color="inherit">Demonstração</Button>
        </MenuItem>
        <hr />
        <MenuItem onClick={() => {
          handleClose();
        }}
        >
          <Button href="#pricing" color="inherit">Preços</Button>
        </MenuItem>
      </Menu>
    </Container>
  );
}
