/* eslint-disable no-restricted-globals */
import React from 'react';
import { Button, Card } from '@material-ui/core';

import {
  ActionsContent,
  ButtonMore,
  CardContentStyled,
  Content,
  HeroImagesCarousel,
  InformationContent,
  MainContainer,
} from './styles';
import { ArrowDownNormalIcon } from '../../../components/Icons/FontAwsome';
import { openWhatsAppExternal } from '../../../utils/SocialMediaLinks';
import MobileBackground from '../../../assets/mobileBackground.jpg';

const BgSlide = ({ ComponentContent }) => (
  <>
    <ComponentContent />
    <picture
      style={{
        backgroundImage: `url(${MobileBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -99,
      }}
    />
  </>
);

export const CustomInterval = ({ ComponentContent }) => (
  <HeroImagesCarousel interval={5000}>
    <BgSlide ComponentContent={ComponentContent} />
  </HeroImagesCarousel>
);

const HomeMobile = () => {
  console.log('Home');

  return (
    <>
      <MainContainer>
        <CustomInterval ComponentContent={() => (
          <Content>
            <div>
              <span>Nos dedicamos em prevenir e tratar as alterações estéticas do maior órgão do corpo humano, a pele, buscando amenizar e prevenir os sinais do tempo, além de transformar seu sonho em realidade.</span>
            </div>
            <ButtonMore onClick={() => window.scrollTo({ top: screen.height - 60, behavior: 'smooth' })}>
              <ArrowDownNormalIcon />
            </ButtonMore>
            <InformationContent>
              <h3>Agende sua consulta</h3>
              <ActionsContent>
                <Card>
                  <CardContentStyled>
                    <span>Escolha o melhor horário para sua consulta utilizando nosso agendamento online</span>
                    <Button variant="contained" color="primary">Agendar online</Button>
                  </CardContentStyled>
                </Card>
                <Card>
                  <CardContentStyled>
                    <span>Você também pode marcar sua consulta através do nosso WhatsApp</span>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={openWhatsAppExternal}
                    >
                      Agendar pelo WhatsApp
                    </Button>
                  </CardContentStyled>
                </Card>
              </ActionsContent>
            </InformationContent>
          </Content>
        )}
        />
      </MainContainer>
    </>
  );
};

export default HomeMobile;
