import React from 'react';

import FranciniImage from '../../assets/dra-francini.png';
import { ContentLeft, ContentRight, MainContainer } from './styles';
// import { Button, Card } from '@material-ui/core';

// import {
//   ActionsContent,
//   CardContentStyled,
//   Content,
//   ContentLeft,
//   ContentRight,
//   GalleryContainer,
//   InformationContent,
//   LocalizationContainer,
//   LocalizationContent,
//   MainContainer,
// } from './styles';

const Home = () => {
  console.log('Sobre');

  return (
    <MainContainer>
      <ContentLeft>
        <h1>Sobre a Dra Francini Pereira</h1>
        <span>
          Caros amigos, a adoção de políticas descentralizadoras cumpre um papel essencial na formulação dos índices pretendidos. Por outro lado, a complexidade dos estudos efetuados não pode mais se dissociar das diretrizes de desenvolvimento para o futuro. A prática cotidiana prova que o consenso sobre a necessidade de qualificação representa uma abertura para a melhoria do orçamento setorial.
          Caros amigos, a adoção de políticas descentralizadoras cumpre um papel essencial na formulação dos índices pretendidos. Por outro lado, a complexidade dos estudos efetuados não pode mais se dissociar das diretrizes de desenvolvimento para o futuro. A prática cotidiana prova que o consenso sobre a necessidade de qualificação representa uma abertura para a melhoria do orçamento setorial.
        </span>
      </ContentLeft>
      <ContentRight>
        <div className="image-wrapper">
          <span className="cut left" />
          <img src={FranciniImage} alt="" />
        </div>
      </ContentRight>
    </MainContainer>
  );
};

export default Home;
