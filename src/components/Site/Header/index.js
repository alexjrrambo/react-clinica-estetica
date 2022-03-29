import {
  Button,
  MenuItem,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import {
  FbIcon,
  InstaIcon,
  PhoneIcon,
} from '../../Icons/FontAwsome';
import logoGreenTransparent from '../../../assets/logoGreenTransparent.png';
import logoTransparent from '../../../assets/logoTransparent.png';
import TreatmentsArray from '../../../utils/TreatmentsArray';
import {
  ContextualMenuContent,
  HeaderActionMenu,
  HeaderContactMenu,
  HeaderContainer,
  HeaderContent,
  LinkStyled,
} from './styles';
import Mobile from './Mobile';
import { facebookLink, instagramLink, whatsAppLink } from '../../../utils/SocialMediaLinks';

const LinksReadyToCrawler = () => (
  <div style={{
    display: 'hidden', position: 'absolute', height: 0, width: 0,
  }}
  >
    <LinkStyled to="/" />
    <LinkStyled to="/sobre" />
    <LinkStyled to="/clinica" />
    <LinkStyled to="/contato" />
    {TreatmentsArray.map(treatments => (
      <LinkStyled key={treatments.key} to={`/tratamentos/${treatments.key}`} />
    ))}
  </div>
);

const Header = props => {
  console.log(props);
  const [tratamentosAnchorEl, setTratamentosAnchorEl] = useState(null);
  const [institucionalAnchorEl, setInstitucionalAnchorEl] = useState(null);
  const [reducedSize, setReducedSize] = useState(false);
  const institucionalOpen = Boolean(institucionalAnchorEl);
  const tratamentosOpen = Boolean(tratamentosAnchorEl);

  useEffect(() => {
    const onScroll = () => setReducedSize(window.pageYOffset > 50);
    console.log(window.pageYOffset > 50);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedSize]);

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
      <LinksReadyToCrawler />
      <HeaderContainer>
        <HeaderContent reducedSize={reducedSize}>
          <HeaderContactMenu>
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <PhoneIcon size={0.75} />
                <span>(51) 99826-7185 - Segunda à Sexta das 8:30h às 19h</span>
              </div>
            </a>
            <div>
              <a
                href={facebookLink}
                target="_blank"
                rel="noreferrer"
              >
                <FbIcon />
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
              >
                <InstaIcon size={1.1} />
              </a>
            </div>
          </HeaderContactMenu>
          <div>
            {reducedSize ? (
              <img src={logoTransparent} alt="Logo clinica" />
            ) : (
              <img src={logoGreenTransparent} alt="Logo clinica" />
            )}
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
      </HeaderContainer>
      <Mobile />
    </>
  );
};

export default Header;
