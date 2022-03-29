import React from 'react';

import WhatsImage from '../../../assets/whatsapp.png';
import { openWhatsAppExternal } from '../../../utils/SocialMediaLinks';
import {
  Container,
} from './styles';

const WhatsApp = () => {
  return (
    <Container>
      <img
        src={WhatsImage}
        alt=""
        onClick={openWhatsAppExternal}
      />
    </Container>
  );
};

export default WhatsApp;
