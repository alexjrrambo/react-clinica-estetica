import React from 'react';
import { Button, Card } from '@material-ui/core';

import {
  ActionsContent,
  CardContentStyled,
  Content,
  ContentLeft,
  ContentRight,
  InformationContent,
  LocalizationContainer,
  LocalizationContent,
  MainContainer,
} from './styles';
import BackgroundImage from '../../assets/image-home2.jpg';
import LocalizationImage from '../../assets/localization.png';
import Gallery from '../../components/Gallery';
import ImagesArray from '../../utils/ImagesArray';

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
                    <Button variant="contained" color="primary">Agendar pelo WhatsApp</Button>
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
      <Gallery imagesData={ImagesArray} title="Conheça nossa estrutura" />
      <LocalizationContainer>
        <LocalizationContent>
          <h4>Localização</h4>
          <span>Rua Sete de Setembro, nº 434, Centro, Sapiranga - RS <br />Centro Comercial e Residencial Vitale</span>
          <button type="button" onClick={() => window.open('https://www.google.com.br/maps/place/R.+Sete+de+Setembro,+434+-+Centro,+Sapiranga+-+RS,+93800-244/@-29.6402445,-51.0081269,17.25z/data=!4m5!3m4!1s0x95193f65285678ff:0x8d92f69d63b0823b!8m2!3d-29.6403202!4d-51.0062202', '_blank')}>
            <img src={LocalizationImage} alt="" />
          </button>
        </LocalizationContent>
      </LocalizationContainer>
    </>
  );
};

export default Home;
