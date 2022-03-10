import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logoWhite from '../../assets/logoWhite.png';
import Sidebar from '../Sidebar';
import { HeaderContainer, HeaderContent } from './styles';
import HeaderMenu from './Menu';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsSideBarExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <div ref={ref}>
      <Sidebar
        isExpanded={isSideBarExpanded}
        setIsExpanded={setIsSideBarExpanded}
      />
      <HeaderContainer>
        <HeaderContent>
          <IconButton
            onClick={() => setIsSideBarExpanded(!isSideBarExpanded)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <img src={logoWhite} alt="Logo Quantify" />

          <HeaderMenu />
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
}
