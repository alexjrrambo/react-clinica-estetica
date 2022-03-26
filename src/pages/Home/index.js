import React from 'react';
import { Button, Card } from '@material-ui/core';

import {
  ActionsContent,
  CardContentStyled,
  Content,
  ContentLeft,
  ContentRight,
  InformationContent,
  MainContainer,
} from './styles';
import MobileHome from './Mobile';
import BackgroundImage from '../../assets/photoHome.png';
import Gallery from '../../components/Gallery';
import ImagesArray from '../../utils/ImagesArray';
import Localization from '../../components/Localization';
import { openWhatsAppExternal } from '../../utils/SocialMediaLinks';

const Home = () => {
  console.log('Home');

  return (
    <>
      <MainContainer>
        <Content>
          <ContentLeft>
            <div>
              <span>Caros amigos, a adoção de políticas descentralizadoras cumpre um papel essencial na formulação dos índices pretendidos. Por outro lado, a complexidade dos estudos efetuados não pode mais se dissociar das diretrizes de desenvolvimento para o futuro. A prática cotidiana prova que o consenso sobre a necessidade de qualificação representa uma abertura para a melhoria do orçamento setorial.</span>
            </div>
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
          </ContentLeft>
          <ContentRight>
            <div className="image-wrapper">
              <span className="cut left" />
              <img src={BackgroundImage} alt="" />
            </div>
          </ContentRight>
        </Content>
      </MainContainer>
      <MobileHome />
      <Gallery imagesData={ImagesArray} title="Conheça nossa estrutura" />
      <Localization />
    </>
  );
};

export default Home;
