import {
  Button,
  MenuItem,
  Slide,
  useScrollTrigger,
} from '@material-ui/core';
import React, { useState } from 'react';

import {
  FbIcon,
  InstaIcon,
  PhoneIcon,
} from '../../Icons/FontAwsome';
import logoWhite from '../../../assets/logoWhite.png';
// import HeaderMenu from '../../Header/Menu';
import {
  ContextualMenuContent,
  HeaderActionMenu,
  HeaderContactMenu,
  HeaderContainer,
  HeaderContent,
} from './styles';
// import HeaderSiteMenu from './Menu';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const MenuUI = React.cloneElement(children, {
    reducedSize: 'true',
  });

  return (
    <>
      {trigger ? MenuUI : (
        <Slide
          appear={false}
          direction="down"
          in={!trigger}
        >
          {children}
        </Slide>
      )}
    </>
  );
}

const Header = props => {
  console.log(props);
  const [tratamentosAnchorEl, setTratamentosAnchorEl] = useState(null);
  const [institucionalAnchorEl, setInstitucionalAnchorEl] = useState(null);
  const institucionalOpen = Boolean(institucionalAnchorEl);
  const tratamentosOpen = Boolean(tratamentosAnchorEl);

  const handleClick = (event, menu) => {
    if (menu === 'tratamentos') {
      setTratamentosAnchorEl(event.currentTarget);
    } else if (menu === 'institucional') {
      setInstitucionalAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setTratamentosAnchorEl(null);
    setInstitucionalAnchorEl(null);
  };

  return (
    <>
      <HeaderContainer>
        <HideOnScroll {...props}>
          <HeaderContent>
            <HeaderContactMenu>
              <div>
                <PhoneIcon size={0.75} />
                <span>(51) 99826-7185 - Segunda à Sexta das 8:30h às 19h</span>
              </div>
              <div>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FbIcon />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstaIcon size={1.1} />
                </a>
              </div>
            </HeaderContactMenu>
            <div>
              <img src={logoWhite} alt="Logo Quantify" />
            </div>
            <HeaderActionMenu>
              <Button color="inherit">Home</Button>
              <div>
                <Button
                  id="institucional-button"
                  aria-controls={institucionalOpen ? 'institucional-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={institucionalOpen ? 'true' : undefined}
                  onClick={event => handleClick(event, 'institucional')}
                  color="inherit"
                >
                  Institucional
                </Button>
                <ContextualMenuContent
                  id="institucional-menu"
                  anchorEl={institucionalAnchorEl}
                  open={institucionalOpen}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'institucional-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Sobre a Dra Francini Pereira</MenuItem>
                  <MenuItem onClick={handleClose}>Francini Pereira Biomedicina Estética</MenuItem>
                </ContextualMenuContent>
              </div>
              <div>
                <Button
                  id="tratamentos-button"
                  aria-controls={tratamentosOpen ? 'tratamentos-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={tratamentosOpen ? 'true' : undefined}
                  onClick={event => handleClick(event, 'tratamentos')}
                  color="inherit"
                >
                  Tratamentos
                </Button>
                <ContextualMenuContent
                  id="tratamentos-menu"
                  anchorEl={tratamentosAnchorEl}
                  open={tratamentosOpen}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'Tratamentos-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Toxina Botulínica</MenuItem>
                  <MenuItem onClick={handleClose}>Tratamento 2</MenuItem>
                  <MenuItem onClick={handleClose}>Tratamento 3</MenuItem>
                  <MenuItem onClick={handleClose}>Tratamento 4</MenuItem>
                  <MenuItem onClick={handleClose}>Tratamento 5</MenuItem>
                  <MenuItem onClick={handleClose}>Tratamento 6</MenuItem>
                  <MenuItem onClick={handleClose}>Tratamento 7</MenuItem>
                </ContextualMenuContent>
              </div>
              <Button color="inherit">Contato</Button>
            </HeaderActionMenu>
          </HeaderContent>
        </HideOnScroll>
      </HeaderContainer>
    </>
  );
};

export default Header;
