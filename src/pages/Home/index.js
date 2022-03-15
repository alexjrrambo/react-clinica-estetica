/* eslint-disable no-restricted-globals */
import React from 'react';
import { Button, Card } from '@material-ui/core';
import HeroCarousel from 'react-hero-carousel';

import {
  ActionsContent,
  ButtonMore,
  CardContentStyled,
  Content,
  // ContentLeft,
  // ContentRight,
  InformationContent,
  MainContainer,
} from './styles';
// import BackgroundImage from '../../assets/image-home2.jpg';
import Gallery from '../../components/Gallery';
import ImagesArray from '../../utils/ImagesArray';
import Localization from '../../components/Localization';
import { ArrowDownNormalIcon } from '../../components/Icons/FontAwsome';

const BgSlide = ({ seed, ComponentContent }) => (
  <>
    <ComponentContent />
    <picture
      style={{
        backgroundImage: `url(https://placem.at/places?w=1920&h=1080&random=${seed}&txt=)`,
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
  <HeroCarousel interval={5000}>
    <BgSlide seed="1" ComponentContent={ComponentContent} />
    <BgSlide seed="2" ComponentContent={ComponentContent} />
    <BgSlide seed="3" ComponentContent={ComponentContent} />
    <BgSlide seed="4" ComponentContent={ComponentContent} />
    <BgSlide seed="5" ComponentContent={ComponentContent} />
  </HeroCarousel>
);

const Home = () => {
  console.log('Home');

  return (
    <>
      <MainContainer>
        <CustomInterval ComponentContent={() => (
          <Content>
            <div>
              <span>Caros amigos, a adoção de políticas descentralizadoras cumpre um papel essencial na formulação dos índices pretendidos. Por outro lado, a complexidade dos estudos efetuados não pode mais se dissociar das diretrizes de desenvolvimento para o futuro. A prática cotidiana prova que o consenso sobre a necessidade de qualificação representa uma abertura para a melhoria do orçamento setorial.</span>
            </div>
            <ButtonMore onClick={() => window.scrollTo({ top: screen.height - 170, behavior: 'smooth' })}>
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
                    <Button variant="contained" color="primary">Agendar pelo WhatsApp</Button>
                  </CardContentStyled>
                </Card>
              </ActionsContent>
            </InformationContent>
          </Content>
        )}
        />
      </MainContainer>
      <Gallery imagesData={ImagesArray} title="Conheça nossa estrutura" />
      <Localization />
    </>
  );
};

export default Home;
