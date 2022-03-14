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
  LinkStyled,
} from './styles';
import TreatmentsArray from '../../../utils/TreatmentsArray';

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
              <LinkStyled to="/"><Button color="inherit">Home</Button></LinkStyled>
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
                  <LinkStyled to="/sobre"><MenuItem onClick={handleClose}>Sobre a Dra Francini Pereira</MenuItem></LinkStyled>
                  <LinkStyled to="/clinica"><MenuItem onClick={handleClose}>Francini Pereira Biomedicina Estética</MenuItem></LinkStyled>
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
                  {TreatmentsArray.map(treatments => (
                    <LinkStyled key={treatments.key} to={`/tratamentos/${treatments.key}`}><MenuItem onClick={handleClose}>{treatments.label}</MenuItem></LinkStyled>
                  ))}
                </ContextualMenuContent>
              </div>
              <LinkStyled to="/contato"><Button color="inherit">Contato</Button></LinkStyled>
            </HeaderActionMenu>
          </HeaderContent>
        </HideOnScroll>
      </HeaderContainer>
    </>
  );
};

export default Header;
