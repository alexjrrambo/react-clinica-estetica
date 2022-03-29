import { Card } from '@material-ui/core';
import React from 'react';

import {
  MailIcon,
  PhoneIcon,
} from '../../components/Icons/FontAwsome';
import FbIcon from '../../assets/facebook.svg';
import InstaIcon from '../../assets/instagram.svg';
import Localization from '../../components/Localization';
import {
  emailContact,
  facebookLink,
  instagramLink,
  whatsAppLink,
} from '../../utils/SocialMediaLinks';
import {
  CardContentStyled,
  Content,
  ContentLeft,
  ContentRight,
  MainContainer,
} from './styles';

const Contact = () => {
  console.log('Contato');

  return (
    <>
      <MainContainer>
        <Content>
          <ContentLeft>
            <div>
              <h4>Redes sociais</h4>
              <Card>
                <CardContentStyled>
                  <a
                    href={facebookLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <img src={FbIcon} alt="facebook" />
                      <span>/drafrancinipereira</span>
                    </div>
                  </a>
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <img src={InstaIcon} alt="instagram" />
                      <span>@drafrancinipereira</span>
                    </div>
                  </a>
                </CardContentStyled>
              </Card>
            </div>
          </ContentLeft>
          <ContentRight>
            <div>
              <h4>Contatos</h4>
              <Card>
                <CardContentStyled>
                  <a
                    href={emailContact}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <MailIcon />
                      <span>contato@francinipereira.com</span>
                    </div>
                  </a>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div>
                      <PhoneIcon size={0.8} />
                      <span>(51) 99826-7185</span>
                    </div>
                  </a>
                </CardContentStyled>
              </Card>
            </div>
          </ContentRight>
        </Content>
      </MainContainer>
      <Localization />
    </>
  );
};

export default Contact;
