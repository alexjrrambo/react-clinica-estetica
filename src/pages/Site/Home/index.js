import React from 'react';
import { Button, Card } from '@material-ui/core';
import DztImageGalleryComponent from 'reactjs-image-gallery';

import Header from '../../../components/Site/Header';
import {
  ActionsContent,
  CardContentStyled,
  Content,
  ContentLeft,
  ContentRight,
  GalleryContainer,
  InformationContent,
  LocalizationContainer,
  LocalizationContent,
  MainContainer,
} from './styles';
// import Footer from '../../../components/Site/Footer';
import BackgroundImage from '../../../assets/image-home2.jpg';
import LocalizationImage from '../../../assets/localization.png';
import Footer from '../../../components/Site/Footer';

const data = [
  {
    url:
      'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Kayak',
    thumbUrl:
      'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Cyclist competition',
    thumbUrl:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Surfer in action',
    thumbUrl:
      'https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80',
    title: 'Drops',
    thumbUrl:
      'https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80',
  },

  {
    url:
      'https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Bird',
    thumbUrl:
      'https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    thumbUrl:
      'https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
  },
];

const Home = () => {
  console.log('Home');

  return (
    <>
      <Header />
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
              <img src={BackgroundImage} alt="asd" />
            </div>
          </ContentRight>
        </Content>
      </MainContainer>
      <GalleryContainer>
        <h4>Conheça nossa estrutura</h4>
        <DztImageGalleryComponent
          hideRotate
          hideDownload
          images={data}
        />
      </GalleryContainer>
      <LocalizationContainer>
        <LocalizationContent>
          <h4>Localização</h4>
          <span>Rua Sete de Setembro, nº 434, Centro, Sapiranga - RS <br />Centro Comercial e Residencial Vitale</span>
          <button type="button" onClick={() => window.open('https://www.google.com.br/maps/place/R.+Sete+de+Setembro,+434+-+Centro,+Sapiranga+-+RS,+93800-244/@-29.6402445,-51.0081269,17.25z/data=!4m5!3m4!1s0x95193f65285678ff:0x8d92f69d63b0823b!8m2!3d-29.6403202!4d-51.0062202', '_blank')}>
            <img src={LocalizationImage} alt="" />
          </button>
        </LocalizationContent>
      </LocalizationContainer>
      <Footer />
    </>
  );
};

export default Home;
