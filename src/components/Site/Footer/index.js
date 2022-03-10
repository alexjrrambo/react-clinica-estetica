import React from 'react';

import FooterLogo from '../../../assets/logo-footer.jpg';
import {
  FbIcon,
  InstaIcon,
  MailIcon,
  PhoneIcon,
} from '../../Icons/FontAwsome';
import {
  FooterCenter,
  FooterContainer,
  FooterContent,
  FooterDescription,
  FooterLeft,
} from './styles';

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterLeft>
        <div>
          <FbIcon />
          <span>/drafrancinipereira</span>
        </div>
        <div>
          <InstaIcon />
          <span>@drafrancinipereira</span>
        </div>
        <div>
          <MailIcon />
          <span>contato@francinipereira.com</span>
        </div>
        <div>
          <PhoneIcon size={0.8} />
          <span>(51) 99826-7185</span>
        </div>
      </FooterLeft>
      <FooterCenter>
        <img src={FooterLogo} alt="" />
        <FooterDescription>
          <div>
            Drª Me Francini Pereira
          </div>
          <div>
            Biomédica Esteta - CRBM 3274
          </div>
        </FooterDescription>
      </FooterCenter>
      <div />
    </FooterContent>
  </FooterContainer>
);

export default Footer;
