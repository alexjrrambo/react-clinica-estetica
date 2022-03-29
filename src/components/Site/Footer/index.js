import React from 'react';

import FooterLogo from '../../../assets/logo-footer.jpg';
import {
  emailContact,
  facebookLink,
  instagramLink,
  whatsAppLink,
} from '../../../utils/SocialMediaLinks';
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
        <a
          href={facebookLink}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <FbIcon />
            <span>/drafrancinipereira</span>
          </div>
        </a>
        <a
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <InstaIcon />
            <span>@drafrancinipereira</span>
          </div>
        </a>
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
