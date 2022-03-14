import { Card } from '@material-ui/core';
import React from 'react';

import LocalizationImage from '../../assets/localization.png';
import {
  FbIcon,
  InstaIcon,
  MailIcon,
  PhoneIcon,
} from '../../components/Icons/FontAwsome';
import {
  CardContentStyled,
  Content,
  ContentLeft,
  ContentRight,
  LocalizationContainer,
  LocalizationContent,
  MainContainer,
} from './styles';
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

const Contact = () => {
  console.log('Contato');

  return (
    <>
      <MainContainer>
        <h1>Contato</h1>
        <Content>
          <ContentLeft>
            <div>
              <h4>Redes sociais</h4>
              <Card>
                <CardContentStyled>
                  <div>
                    <FbIcon />
                    <span>/drafrancinipereira</span>
                  </div>
                  <div>
                    <InstaIcon />
                    <span>@drafrancinipereira</span>
                  </div>
                </CardContentStyled>
              </Card>
            </div>
          </ContentLeft>
          <ContentRight>
            <div>
              <h4>Contatos</h4>
              <Card>
                <CardContentStyled>
                  <div>
                    <MailIcon />
                    <span>contato@francinipereira.com</span>
                  </div>
                  <div>
                    <PhoneIcon size={0.8} />
                    <span>(51) 99826-7185</span>
                  </div>
                </CardContentStyled>
              </Card>
            </div>
          </ContentRight>
        </Content>
      </MainContainer>
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

export default Contact;
