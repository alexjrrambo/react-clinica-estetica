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
import { openOnlineScheduleExternal, openWhatsAppExternal } from '../../utils/SocialMediaLinks';

const Home = () => {
  return (
    <>
      <MainContainer>
        <Content>
          <ContentLeft>
            <div>
              <span>Nos dedicamos em prevenir e tratar as alterações estéticas do maior órgão do corpo humano, a pele, buscando amenizar e prevenir os sinais do tempo. Sabemos que não se trata apenas de procedimentos estéticos ou de beleza, mas de melhora da autoestima e aumento da saúde física e mental.
                <br /><br />Estudamos a face e corpo de cada indivíduo e após esta etapa indicamos as melhores técnicas para solucionar as suas queixas e promover a harmonização da região analisada.
              </span>
            </div>
            <InformationContent>
              <h3>Agende sua consulta</h3>
              <ActionsContent>
                <Card>
                  <CardContentStyled>
                    <span>Escolha o melhor horário para sua consulta utilizando nosso agendamento online</span>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={openOnlineScheduleExternal}
                    >
                      Agendar online
                    </Button>
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
