import React from 'react';

import WhatsImage from '../../../assets/whatsapp.png';
import {
  Container,
} from './styles';

const WhatsApp = () => {
  console.log('WhatsApp');

  return (
    <Container>
      <img src={WhatsImage} alt="" />
    </Container>
  );
};

export default WhatsApp;
